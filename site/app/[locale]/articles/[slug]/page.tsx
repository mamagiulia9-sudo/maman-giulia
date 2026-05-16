import { notFound } from 'next/navigation';
import { getArticle, articles } from '@/content/articles';
import ArticleContent from '@/components/ArticleContent';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    articles.map(article => ({ locale, slug: article.slug }))
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: 'articles' });
  const loc = locale as 'fr' | 'en' | 'zh' | 'it';
  const titleDisplay = article.titleDisplay[loc] || article.titleDisplay.fr;
  const titleSub = article.titleSub[loc] || article.titleSub.fr;

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-cream/25 relative overflow-hidden">
        <div
          className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full pointer-events-none opacity-30"
          style={{ background: '#E8C4D4' }}
        />
        <div className="max-w-3xl mx-auto relative">
          <Link
            href={`/${locale}#resources`}
            className="inline-block text-xs text-teal/60 hover:text-teal transition-colors font-light tracking-[0.2em] uppercase mb-10"
          >
            ← {t('back')}
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-teal font-light tracking-[0.25em] uppercase">✦ Article</span>
            <span className="text-dark/25 text-xs">·</span>
            <span className="text-xs text-dark/35 font-light">
              {article.readingTime} {t('min_read')}
            </span>
          </div>
          <h1 className="font-display font-light leading-[1.1]">
            <span className="italic text-teal text-4xl md:text-6xl block mb-2">{titleDisplay}</span>
            <span className="text-dark/75 text-2xl md:text-3xl block font-light">{titleSub}</span>
          </h1>
        </div>
      </section>

      <ArticleContent
        article={article}
        locale={locale}
        ctaSubtitle={t('cta_subtitle')}
        ctaButton={t('cta_button')}
      />

      <Footer />
    </main>
  );
}
