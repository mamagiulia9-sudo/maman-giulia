'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { articles } from '@/content/articles';
import ProblemFinder from '@/components/ProblemFinder';
import SleepQuiz from '@/components/SleepQuiz';

export default function Windows({ locale = 'fr' }: { locale?: string }) {
  const t = useTranslations('windows');
  const loc = locale as 'fr' | 'en' | 'zh' | 'it';

  const titleWords = t('title').split(' ');
  const titleMain = titleWords.slice(0, titleWords.length - 1).join(' ');
  const titleItalic = titleWords[titleWords.length - 1];

  return (
    <section id="resources" className="py-24 px-6 bg-white relative overflow-hidden">
      <div
        className="absolute top-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full pointer-events-none opacity-40"
        style={{ background: '#E8C4D4' }}
      />
      <div
        className="absolute bottom-[-40px] left-[10%] w-[180px] h-[180px] rounded-full pointer-events-none opacity-30"
        style={{ background: '#EDE5C0' }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-4">{t('tag')}</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-light leading-tight font-display">
            {titleMain}
            <span className="italic text-teal"> {titleItalic}</span>
          </h2>
          <p className="text-dark/40 max-w-sm text-sm leading-relaxed font-light">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 items-start">
          <SleepQuiz locale={locale} />
          <ProblemFinder locale={locale} />
        </div>

        {/* Article cards */}
        <div className="flex flex-col gap-5 mb-8">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/${locale}/articles/${article.slug}`}
              className="group block border border-dark/10 rounded-2xl p-8 md:p-12 hover:border-teal/50 transition-all duration-300 hover:shadow-sm bg-white"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-xs font-light tracking-[0.25em] uppercase text-teal/70">
                  ✦ {article.readingTime} {t('min_sleep')}
                </span>
                <span className="text-5xl font-light text-teal/15 font-display italic leading-none shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-display font-light leading-tight mb-3">
                  <span className="italic text-teal text-3xl md:text-4xl">
                    {article.titleDisplay[loc]}
                  </span>
                  <span className="text-dark/80 text-xl md:text-2xl ml-2 font-light">
                    {article.titleSub[loc]}
                  </span>
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed font-light mt-4">
                  {article.excerpts[loc]}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-teal text-sm font-light group-hover:gap-3 transition-all duration-200">
                <span>{t('read')}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <div className="border border-dashed border-teal/30 rounded-2xl p-8 flex items-center justify-center">
          <p className="text-dark/25 text-sm font-light tracking-wide italic">
            {t('coming_soon')} ✦
          </p>
        </div>
      </div>
    </section>
  );
}
