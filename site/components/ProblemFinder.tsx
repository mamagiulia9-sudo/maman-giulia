'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { articles } from '@/content/articles';
import type { Article } from '@/content/articles';

type Problem = {
  text: Record<string, string>;
  slug: string;
};

const problems: Problem[] = [
  // fenetre-eveil
  {
    text: {
      fr: "Ses siestes ne durent que 20 min, il se réveille en larmes",
      en: "Naps only last 20 min, they wake up crying",
      zh: "宝宝小睡只有20分钟，哭着醒来",
      it: "I pisolini durano solo 20 min, si sveglia in lacrime",
    },
    slug: 'fenetre-eveil',
  },
  {
    text: {
      fr: "Je l'allonge, il pleure aussitôt — il bâillait pourtant",
      en: "I put them down, they cry instantly — but they were yawning",
      zh: "刚放下就哭——明明刚才在打哈欠",
      it: "Lo metto giù e piange subito — eppure sbadigliava",
    },
    slug: 'fenetre-eveil',
  },
  // coliques-sorcier-deuxieme-soir
  {
    text: {
      fr: "Chaque soir vers 18h, il est inconsolable pendant des heures",
      en: "Every evening around 6pm, inconsolable for hours",
      zh: "每天傍晚6点左右，哭好几个小时哄不好",
      it: "Ogni sera verso le 18h, inconsolabile per ore",
    },
    slug: 'coliques-sorcier-deuxieme-soir',
  },
  {
    text: {
      fr: "Ventre dur, jambes repliées, cri perçant — les coliques ?",
      en: "Hard belly, legs pulled up, piercing cry — colic?",
      zh: "肚子硬、腿蜷起来、哭声尖——是肠绞痛吗？",
      it: "Pancia dura, gambe piegate, pianto acuto — coliche?",
    },
    slug: 'coliques-sorcier-deuxieme-soir',
  },
  // deuxieme-soir
  {
    text: {
      fr: "C'est sa 2e nuit, il réclame le sein sans discontinuer",
      en: "It's the 2nd night and they won't stop asking for the breast",
      zh: "第二晚，不停要吃奶，停不下来",
      it: "È la 2a notte, chiede il seno senza sosta",
    },
    slug: 'deuxieme-soir',
  },
  {
    text: {
      fr: "Il était calme hier, ce soir il refuse d'être posé",
      en: "They were calm yesterday, tonight they refuse to be put down",
      zh: "昨天还好好的，今晚就是不肯被放下",
      it: "Ieri era calmo, stasera rifiuta di essere posato",
    },
    slug: 'deuxieme-soir',
  },
  // mauvais-dormeur
  {
    text: {
      fr: "Depuis 5 semaines, rien ne fonctionne et les nuits empirent",
      en: "5 weeks in, nothing works and nights are getting worse",
      zh: "五周了，什么都试过，夜里越来越难",
      it: "Da 5 settimane niente funziona e le notti peggiorano",
    },
    slug: 'mauvais-dormeur',
  },
  {
    text: {
      fr: "J'essaie une routine, il résiste chaque soir — c'est son caractère ?",
      en: "I try a routine, they resist every night — is it just who they are?",
      zh: "我试着建立程序，他每晚都抗拒——这就是他的性格？",
      it: "Provo una routine, resiste ogni sera — è il suo carattere?",
    },
    slug: 'mauvais-dormeur',
  },
  // microbiote-sommeil
  {
    text: {
      fr: "Il crie après chaque tétée, ventre gonflé, nuits morcelées",
      en: "Cries after every feed, bloated belly, fragmented nights",
      zh: "每次喂完都哭，肚子胀，夜里睡不好",
      it: "Piange dopo ogni poppata, pancia gonfia, notti frammentate",
    },
    slug: 'microbiote-sommeil',
  },
  {
    text: {
      fr: "Gaz, spasmes après les repas — je ne sais plus où chercher",
      en: "Gas, cramps after feeds — I don't know where to look anymore",
      zh: "肠气、痉挛、喂完就难受——不知道从哪里找原因",
      it: "Gas, spasmi dopo le poppate — non so più dove cercare",
    },
    slug: 'microbiote-sommeil',
  },
];

const keywordIndex: Record<string, string[]> = {
  'fenetre-eveil': [
    'fenêtre', 'eveil', 'éveil', 'stimul', 'fatigue', 'fatigué', 'sieste',
    'éveillé', 'eveillé', 'endormir', 'dort', 'dormir', 'réveil', 'reveil',
    'calme', 'agité', 'agite', 'trop éveillé', 'sleep', 'nap', 'awake',
    'tired', 'overtired', '清醒', '睡觉', '小睡', '入睡', '疲惫', '刺激',
    'veglia', 'stanco', 'stimolat',
  ],
  'coliques-sorcier-deuxieme-soir': [
    'colique', 'coliques', 'pleur', 'pleure', 'sorcier', 'soir', 'soirée',
    'inconsolable', 'cri', 'crie', 'douleur', 'ventre', 'agité', 'agite',
    'cry', 'cries', 'colic', 'evening', 'witching', 'inconsolable',
    '哭', '肠绞痛', '傍晚', '魔女', '腹痛', '无法安抚',
    'piange', 'coliche', 'sera', 'strega',
  ],
  'mauvais-dormeur': [
    'mauvais dormeur', 'tempérament', 'caractère', 'hypersensible', 'routine',
    'régularité', 'habitude', 'étiquette', 'schedule', 'ritual',
    'bad sleeper', 'temperament', 'sensitive', 'character',
    '气质', '习惯', '规律', '敏感', '作息', '程序',
    'carattere', 'temperamento', 'abitudine', 'dormitore',
  ],
  'microbiote-sommeil': [
    'microbiote', 'intestin', 'ventre', 'digestif', 'digestion', 'probiotique',
    'sérotonine', 'mélatonine', 'gaz', 'crampe', 'estomac', 'bactérie',
    'gut', 'microbiome', 'probiotic', 'digestive', 'belly', 'stomach',
    '肠道', '菌群', '消化', '益生菌', '褪黑素', '肚子',
    'intestino', 'microbiota', 'probiotico', 'pancia',
  ],
  'deuxieme-soir': [
    'deuxième soir', 'deuxieme soir', 'deuxième nuit', 'deuxieme nuit',
    'réclame', 'reclame', 'sein sans arrêt', 'toute la nuit', 'maternité',
    'tète tout le temps', 'inconsolable nuit', 'deuxième jour',
    'second night', 'second evening', 'cluster feeding', 'nursing constantly',
    '第二晚', '第二夜', '不停吃奶', '一直要吃奶', '出生第二天',
    'seconda notte', 'seconda sera', 'richiede continuamente', 'poppate',
  ],
};

function findBestArticle(query: string): Article | null {
  const q = query.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  let bestSlug = '';
  let bestScore = 0;
  for (const [slug, keywords] of Object.entries(keywordIndex)) {
    const score = keywords.filter(kw =>
      q.includes(kw.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''))
    ).length;
    if (score > bestScore) {
      bestScore = score;
      bestSlug = slug;
    }
  }
  return bestScore > 0 ? (articles.find(a => a.slug === bestSlug) ?? null) : null;
}

function ArticleResult({
  article,
  locale,
  label,
}: {
  article: Article;
  locale: string;
  label: string;
}) {
  const loc = locale as 'fr' | 'en' | 'zh' | 'it';
  return (
    <div className="mt-6 animate-fadeIn">
      <p className="text-xs text-teal/60 font-light tracking-[0.2em] uppercase mb-3">
        ✦ {label}
      </p>
      <Link
        href={`/${locale}/articles/${article.slug}`}
        className="group flex items-start gap-6 p-6 rounded-2xl border border-teal/30 bg-white hover:border-teal/60 transition-all duration-200"
      >
        <div className="flex-1 min-w-0">
          <p className="font-display font-light leading-tight">
            <span className="italic text-teal text-lg">{article.titleDisplay[loc]}</span>
            <span className="text-dark/70 text-base ml-2">{article.titleSub[loc]}</span>
          </p>
          <p className="text-dark/40 text-sm mt-2 font-light leading-relaxed">
            {article.excerpts[loc]}
          </p>
        </div>
        <span className="text-teal text-sm font-light mt-1 shrink-0 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </Link>
    </div>
  );
}

export default function ProblemFinder({ locale = 'fr' }: { locale?: string }) {
  const t = useTranslations('problem_finder');
  const loc = locale as 'fr' | 'en' | 'zh' | 'it';

  const [selected, setSelected] = useState<Article | null>(null);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Article | null>(null);
  const [noMatch, setNoMatch] = useState(false);

  // Pick 5 random chips from the pool — stable per mount
  const visibleProblems = useMemo(() => {
    return [...problems].sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);

  function handleChipClick(problem: Problem) {
    setQuery('');
    setNoMatch(false);
    const article = articles.find(a => a.slug === problem.slug) ?? null;
    setSelected(article);
    setResult(null);
  }

  function handleSearch() {
    if (!query.trim()) return;
    setSelected(null);
    const found = findBestArticle(query);
    setResult(found);
    setNoMatch(!found);
  }

  const displayedArticle = selected ?? result;

  return (
    <div className="p-8 md:p-10 rounded-2xl bg-cream/30 border border-teal/10 h-full">
      <p className="text-xs font-light tracking-[0.25em] uppercase text-teal/70 mb-2">
        {t('tag')}
      </p>
      <p className="font-display italic text-2xl md:text-3xl text-dark/70 font-light mb-8">
        {t('title')}
      </p>

      {/* Problem chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {visibleProblems.map((p, i) => (
          <button
            key={i}
            onClick={() => handleChipClick(p)}
            className={`px-4 py-2 rounded-full text-sm font-light transition-colors duration-200 border ${
              selected?.slug === p.slug
                ? 'bg-teal text-white border-teal'
                : 'bg-white text-dark/60 border-dark/10 hover:border-teal/40 hover:text-teal'
            }`}
          >
            {p.text[loc]}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-dark/10" />
        <span className="text-xs text-dark/30 font-light">{t('or')}</span>
        <div className="flex-1 h-px bg-dark/10" />
      </div>

      {/* Free text input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setSelected(null);
            setResult(null);
            setNoMatch(false);
          }}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder={t('placeholder')}
          className="flex-1 px-5 py-3 rounded-full border border-dark/15 text-sm font-light text-dark placeholder:text-dark/30 focus:outline-none focus:border-teal/50 bg-white transition-colors"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-teal text-white rounded-full text-sm font-light hover:bg-teal/85 transition-colors shrink-0"
        >
          {t('cta')}
        </button>
      </div>

      {/* Result */}
      {displayedArticle && (
        <ArticleResult
          article={displayedArticle}
          locale={locale}
          label={t('result_label')}
        />
      )}

      {noMatch && (
        <div className="mt-6 p-5 rounded-xl bg-butter/40 border border-dark/8">
          <p className="text-sm text-dark/50 font-light leading-relaxed">
            {t('no_match')}{' '}
            <Link href={`/${locale}#contact`} className="text-teal underline underline-offset-2">
              {t('no_match_link')}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
