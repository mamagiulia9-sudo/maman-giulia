'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';

type WindowItem = {id: string; number: string; title: string; desc: string; categories: string[]};

function WindowCard({item, placeholder}: {item: WindowItem; placeholder: string}) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`rounded-2xl transition-all duration-300 border ${open ? 'border-teal bg-white' : 'border-dark/10 bg-white hover:border-teal/40'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-8 flex items-start justify-between gap-4"
      >
        <div>
          <span className="text-5xl font-light text-teal/20 leading-none block mb-4 font-display italic">{item.number}</span>
          <h3 className="text-2xl font-light mb-3 font-display italic">{item.title}</h3>
          <p className="text-dark/50 text-sm leading-relaxed font-light">{item.desc}</p>
        </div>
        <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-teal border-teal text-white' : 'border-dark/20 text-dark/40'}`}>
          <span className={`text-lg transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
        </div>
      </button>

      {open && (
        <div className="px-8 pb-8">
          <div className="flex gap-2 mb-6 flex-wrap">
            {item.categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm font-light rounded-full transition-colors ${activeTab === i ? 'bg-teal text-white' : 'bg-teal/10 text-teal hover:bg-teal/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="bg-butter rounded-xl p-6">
            <p className="text-dark/40 text-sm leading-relaxed italic font-light">{placeholder}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Windows() {
  const t = useTranslations('windows');
  const items = t.raw('items') as WindowItem[];
  const placeholder = t('placeholder');

  return (
    <section id="resources" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none opacity-40"
        style={{background: "#E8C4D4"}} />
      <div className="absolute bottom-[-40px] left-[10%] w-[180px] h-[180px] rounded-full pointer-events-none opacity-30"
        style={{background: "#EDE5C0"}} />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-4">{t('tag')}</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-light leading-tight font-display">
            {t('title').split(' ').slice(0,2).join(' ')}
            <span className="italic text-teal"> {t('title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-dark/40 max-w-sm text-sm leading-relaxed font-light">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {items.map(item => (
            <WindowCard key={item.id} item={item} placeholder={placeholder} />
          ))}
        </div>

        <div className="border border-dashed border-teal/30 rounded-2xl p-8 flex items-center justify-center">
          <p className="text-dark/25 text-sm font-light tracking-wide italic">{t('coming_soon')} ✦</p>
        </div>
      </div>
    </section>
  );
}
