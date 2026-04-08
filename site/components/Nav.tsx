'use client';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter} from '@/i18n/navigation';
import {usePathname as useNextPathname} from 'next/navigation';
import {useState} from 'react';
import {MamaGiuliaLogo} from './Logo';

const LOCALES = [{code: 'fr', label: 'FR'}, {code: 'en', label: 'EN'}, {code: 'zh', label: '中'}, {code: 'it', label: 'IT'}];

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const nextPathname = useNextPathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (l: string) => {
    const stripped = nextPathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';
    router.replace(stripped, {locale: l});
  };

  const links = [
    {href: '#about', label: t('about')},
    {href: '#resources', label: t('resources')},
    {href: '#services', label: t('services')},
    {href: '#contact', label: t('contact')},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-dark/8">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 select-none">
          <MamaGiuliaLogo size={40} />
          <span className="font-display text-lg font-bold text-dark leading-none">
            <span className="font-light italic text-dark/60">Mama</span>Giulia
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-light tracking-wide text-dark/50 hover:text-dark transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: lang + CTA */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-xs font-light tracking-widest">
            {LOCALES.map((l, i) => (
              <span key={l.code} className="flex items-center gap-1">
                {i > 0 && <span className="text-dark/20 text-xs">|</span>}
                <button
                  onClick={() => switchLocale(l.code)}
                  className={`px-1 py-0.5 transition-all ${locale === l.code ? 'text-teal font-semibold' : 'text-dark/40 hover:text-dark'}`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
          <a href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-teal text-white text-xs font-medium tracking-[0.15em] uppercase rounded-full hover:opacity-90 transition-opacity">
            {t('book')}
          </a>
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-5 h-px bg-dark transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-px bg-dark transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-px bg-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-dark/8 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-light tracking-wide text-dark/50 hover:text-dark">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="inline-flex items-center px-6 py-2.5 bg-teal text-white text-xs font-medium tracking-[0.15em] uppercase rounded-full w-fit">
            {t('book')}
          </a>
        </div>
      )}
    </nav>
  );
}
