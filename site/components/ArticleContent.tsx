'use client';
import { useState, useEffect, useRef, ReactNode } from 'react';
import type { Article, ArticleBlock } from '@/content/articles';

function renderText(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-semibold text-dark">{part}</strong>
      : <span key={i}>{part}</span>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-teal/15">
      <div className="h-full bg-teal transition-all duration-75" style={{ width: `${progress}%` }} />
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      {children}
    </div>
  );
}

function BlockRenderer({ block, index }: { block: ArticleBlock; index: number }) {
  const delay = (index % 4) * 80;

  switch (block.type) {
    case 'intro':
      return (
        <Reveal delay={delay}>
          <p className="text-lg md:text-xl text-dark/75 leading-relaxed font-light mb-7">
            {renderText(block.text)}
          </p>
        </Reveal>
      );

    case 'part-header':
      return (
        <Reveal delay={0}>
          <div className="my-20 py-10 px-8 rounded-2xl bg-cream/40 border border-teal/15 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-px bg-teal/40" />
              <span className="text-teal/50 text-xs">✦</span>
              <div className="w-10 h-px bg-teal/40" />
            </div>
            <p className="font-display italic text-2xl md:text-3xl text-dark/65 font-light">
              {block.text}
            </p>
          </div>
        </Reveal>
      );

    case 'h3':
      return (
        <Reveal delay={delay}>
          <h3 className="font-display italic text-2xl md:text-3xl text-dark font-light mt-10 mb-4 leading-tight">
            {block.text}
          </h3>
        </Reveal>
      );

    case 'p':
      return (
        <Reveal delay={delay}>
          <p className="text-dark/65 leading-relaxed font-light mb-5 text-base md:text-lg">
            {renderText(block.text)}
          </p>
        </Reveal>
      );

    case 'pull-quote':
      return (
        <Reveal delay={0}>
          <div className="my-12 py-10 pl-8 border-l-4 border-teal/60">
            <p className="font-display italic text-3xl md:text-4xl text-teal/75 font-light leading-snug">
              «&nbsp;{block.text}&nbsp;»
            </p>
          </div>
        </Reveal>
      );

    case 'stage':
      return (
        <Reveal delay={delay}>
          <div className="mb-5 rounded-2xl border border-dark/8 overflow-hidden hover:border-teal/30 transition-colors">
            <div className="flex items-stretch">
              <div className="w-1 bg-teal/50 shrink-0" />
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                  <span className="text-4xl font-display italic text-teal/25 font-light leading-none">
                    {block.number}
                  </span>
                  <span className="font-semibold text-dark text-sm md:text-base">{block.label}</span>
                  <span className="text-dark/35 text-sm font-light">— {block.labelDesc}</span>
                </div>
                <p className="text-dark/60 leading-relaxed font-light text-sm md:text-base">
                  {renderText(block.body)}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      );

    case 'bullets':
      return (
        <Reveal delay={delay}>
          <ul className="space-y-4 my-6">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-teal mt-1 shrink-0 text-xs">✦</span>
                <p className="text-dark/65 leading-relaxed font-light text-sm md:text-base">
                  {renderText(item)}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case 'closing':
      return (
        <Reveal delay={0}>
          <div className="my-16 px-8 md:px-14 py-12 rounded-2xl bg-cream/50 border border-teal/10 text-center">
            {block.text.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="font-display italic text-dark/60 text-lg md:text-xl font-light leading-relaxed mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      );

    default:
      return null;
  }
}

export default function ArticleContent({
  article,
  locale,
  ctaSubtitle,
  ctaButton,
}: {
  article: Article;
  locale: string;
  ctaSubtitle: string;
  ctaButton: string;
}) {
  return (
    <>
      <ReadingProgress />
      <article className="px-6 py-16 max-w-2xl mx-auto">
        {article.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} index={i} />
        ))}
      </article>

      {/* CTA section */}
      <section className="py-20 px-6 bg-cream/30 border-t border-teal/10">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-display italic text-3xl md:text-4xl text-dark font-light leading-snug mb-8">
            {ctaSubtitle}
          </p>
          <a
            href={`/${locale}#contact`}
            className="inline-block bg-teal text-white px-10 py-4 rounded-full text-sm font-light tracking-wide hover:bg-teal/85 transition-colors"
          >
            {ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
