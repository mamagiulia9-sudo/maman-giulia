'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import Image from 'next/image';
import type {SanityResource} from '@/lib/types';

const TYPE_ICONS = {video: '▶', pdf: '↓', article: '✦'};
const TYPE_LABELS: Record<string, string> = {video: 'Vidéo', pdf: 'PDF', article: 'Article'};

const CATEGORY_MAP: Record<string, string> = {
  newborn: 'bebes',
  discovery: 'jeunes-enfants',
  'sleep-lab': 'sommeil-general',
};

// Map tab label → subcategory value in Sanity
const SUBCATEGORY_MAP: Record<string, string> = {
  // Bébés tabs
  'Alimentation': 'alimentation',
  'Activités de la journée': 'activites',
  'Problèmes récurrents': 'problemes',
  // Jeunes enfants tabs (same labels, different values)
  'Feeding': 'alimentation',
  'Daytime Activities': 'activites',
  'Common Issues': 'problemes',
  // Sleep Lab tabs
  'Cycles du sommeil': 'cycles',
  'Sleep Cycles': 'cycles',
  'Environnement': 'environnement',
  'Environment': 'environnement',
  'Méthodes': 'methodes',
  'Methods': 'methodes',
  // Italian
  'Alimentazione': 'alimentation',
  'Attività diurne': 'activites',
  'Problemi ricorrenti': 'problemes',
  'Cicli del sonno': 'cycles',
  'Ambiente': 'environnement',
  'Metodi': 'methodes',
  // Chinese
  '睡眠周期': 'cycles',
  '睡眠环境': 'environnement',
  '方法': 'methodes',
};

type WindowItem = {id: string; number: string; title: string; desc: string; categories: string[]};

function ResourceCard({resource, locale}: {resource: SanityResource; locale: string}) {
  const title = locale === 'fr' ? resource.titleFr || resource.title
    : locale === 'zh' ? resource.titleZh || resource.title
    : locale === 'it' ? resource.titleIt || resource.title
    : resource.title;
  const desc = locale === 'fr' ? resource.descriptionFr || resource.description
    : locale === 'it' ? resource.descriptionIt || resource.description
    : resource.description;
  const href = resource.type === 'video' ? resource.videoUrl
    : resource.type === 'pdf' ? resource.file?.asset?.url
    : undefined;
  const imgUrl = resource.coverImage?.asset?.url;

  return (
    <a href={href || '#'} target={href ? '_blank' : undefined} rel="noreferrer"
      className="group flex gap-4 items-start p-4 rounded-xl bg-white border border-dark/8 hover:border-teal/40 transition-colors">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-butter/60 shrink-0">
        {imgUrl ? (
          <Image src={imgUrl} alt={title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl text-teal/40">
            {TYPE_ICONS[resource.type]}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-teal font-light tracking-widest uppercase block mb-1">
          {TYPE_ICONS[resource.type]} {TYPE_LABELS[resource.type]}
        </span>
        <p className="font-display italic text-base text-dark group-hover:text-teal transition-colors leading-snug">{title}</p>
        {desc && <p className="text-xs text-dark/45 mt-1 leading-relaxed line-clamp-2">{desc}</p>}
      </div>
    </a>
  );
}

function WindowCard({item, placeholder, resources, locale}: {
  item: WindowItem; placeholder: string; resources: SanityResource[]; locale: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const mainCategory = CATEGORY_MAP[item.id];
  const activeSubcategory = SUBCATEGORY_MAP[item.categories[activeTab]] ?? null;

  // Filter by main category AND active subcategory
  const filtered = resources.filter(r => {
    const inMainCat = r.categories?.includes(mainCategory);
    if (!inMainCat) return false;
    if (!activeSubcategory) return true;
    return r.subcategories?.includes(activeSubcategory);
  });

  return (
    <div className={`rounded-2xl transition-all duration-300 border ${open ? 'border-teal bg-white' : 'border-dark/10 bg-white hover:border-teal/40'}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left p-8 flex items-start justify-between gap-4">
        <div>
          <span className="text-5xl font-light text-teal/20 leading-none block mb-4 font-display italic">{item.number}</span>
          <h3 className="text-2xl font-light mb-3 font-display italic">{item.title}</h3>
          <p className="text-dark/50 text-sm leading-relaxed font-light">{item.desc}</p>
        </div>
        <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-teal border-teal text-white' : 'border-dark/20 text-dark/40'}`}>
          <span className={`text-lg transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
        </div>
      </button>

      {open && (
        <div className="px-8 pb-8">
          <div className="flex gap-2 mb-6 flex-wrap">
            {item.categories.map((cat, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm font-light rounded-full transition-colors ${activeTab === i ? 'bg-teal text-white' : 'bg-teal/10 text-teal hover:bg-teal/20'}`}>
                {cat}
              </button>
            ))}
          </div>
          {filtered.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filtered.map(r => (
                <ResourceCard key={r._id} resource={r} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="bg-butter/40 rounded-xl p-6">
              <p className="text-dark/40 text-sm leading-relaxed italic font-light">{placeholder}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Windows({locale = 'fr', resources = []}: {locale?: string; resources?: SanityResource[]}) {
  const t = useTranslations('windows');
  const items = t.raw('items') as WindowItem[];
  const placeholder = t('placeholder');

  return (
    <section id="resources" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none opacity-40"
        style={{background: '#E8C4D4'}} />
      <div className="absolute bottom-[-40px] left-[10%] w-[180px] h-[180px] rounded-full pointer-events-none opacity-30"
        style={{background: '#EDE5C0'}} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-4">{t('tag')}</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-light leading-tight font-display">
            {t('title').split(' ').slice(0, 2).join(' ')}
            <span className="italic text-teal"> {t('title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-dark/40 max-w-sm text-sm leading-relaxed font-light">{t('subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {items.map(item => (
            <WindowCard key={item.id} item={item} placeholder={placeholder} resources={resources} locale={locale} />
          ))}
        </div>
        <div className="border border-dashed border-teal/30 rounded-2xl p-8 flex items-center justify-center">
          <p className="text-dark/25 text-sm font-light tracking-wide italic">{t('coming_soon')} ✦</p>
        </div>
      </div>
    </section>
  );
}
