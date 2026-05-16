'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { articles } from '@/content/articles';
import type { Article } from '@/content/articles';

type Problem = {
  text: Record<string, string>;
  slug: string;
};

const problems: Problem[] = [
  {
    text: {
      fr: "Mon bébé refuse de s'endormir",
      en: "My baby won't fall asleep",
      zh: "宝宝不肯入睡",
      it: "Il mio bebè non vuole dormire",
    },
    slug: 'fenetre-eveil',
  },
  {
    text: {
      fr: "Les siestes durent 20 minutes",
      en: "Naps only last 20 minutes",
      zh: "宝宝小睡只有20分钟",
      it: "I pisolini durano solo 20 minuti",
    },
    slug: 'fenetre-eveil',
  },
  {
    text: {
      fr: "Mon bébé pleure chaque soir",
      en: "My baby cries every evening",
      zh: "宝宝每天傍晚哭闹",
      it: "Il mio bebè piange ogni sera",
    },
    slug: 'coliques-sorcier-deuxieme-soir',
  },
  {
    text: {
      fr: "Mon bébé est inconsolable",
      en: "My baby is inconsolable",
      zh: "宝宝无法安抚",
      it: "Il mio bebè è inconsolabile",
    },
    slug: 'coliques-sorcier-deuxieme-soir',
  },
  {
    text: {
      fr: "Est-ce des coliques ?",
      en: "Is it colic?",
      zh: "是肠绞痛吗？",
      it: "Sono coliche?",
    },
    slug: 'coliques-sorcier-deuxieme-soir',
  },
  {
    text: {
      fr: "Bébé surstimulé, difficile à calmer",
      en: "Baby overstimulated, hard to calm",
      zh: "宝宝过度刺激，难以安抚",
      it: "Bebè sovrastimolato, difficile da calmare",
    },
    slug: 'fenetre-eveil',
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
    <div className="mb-16 p-8 md:p-10 rounded-2xl bg-cream/30 border border-teal/10">
      <p className="text-xs font-light tracking-[0.25em] uppercase text-teal/70 mb-2">
        {t('tag')}
      </p>
      <p className="font-display italic text-2xl md:text-3xl text-dark/70 font-light mb-8">
        {t('title')}
      </p>

      {/* Problem chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {problems.map((p, i) => (
          <button
            key={i}
            onClick={() => handleChipClick(p)}
            className={`px-4 py-2 rounded-full text-sm font-light transition-colors duration-200 border ${
              selected && articles.find(a => a.slug === p.slug) === selected
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
