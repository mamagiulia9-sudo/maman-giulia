'use client';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter} from '@/i18n/navigation';
import {usePathname as useNextPathname} from 'next/navigation';

const LOCALES = [{code: 'fr', label: 'FR'}, {code: 'en', label: 'EN'}, {code: 'zh', label: '中文'}, {code: 'it', label: 'IT'}];

export default function Footer() {
  const t = useTranslations('footer');
  const nt = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const nextPathname = useNextPathname();

  const links = [
    {href: '#about', label: nt('about')},
    {href: '#resources', label: nt('resources')},
    {href: '#services', label: nt('services')},
    {href: '#contact', label: nt('contact')},
  ];

  return (
    <footer className="py-16 px-6" style={{background: '#2D2825'}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div>
            <p className="text-3xl leading-none mb-3 font-display">
              <span className="font-light italic" style={{color: 'rgba(255,255,255,0.4)'}}>Mama</span>
              <span className="font-bold" style={{color: 'white'}}>Giulia</span>
            </p>
            <p className="text-sm font-light" style={{color: 'rgba(255,255,255,0.35)'}}>{t('tagline')}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-light transition-colors"
                style={{color: 'rgba(255,255,255,0.35)'}}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
          <p className="text-xs font-light" style={{color: 'rgba(255,255,255,0.25)'}}>© {new Date().getFullYear()} « Mama Giulia » · {t('rights')}</p>
          <div className="flex gap-3 text-sm">
            {LOCALES.map(l => (
              <button key={l.code}
                onClick={() => router.replace(nextPathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/', {locale: l.code})}
                className="font-light transition-colors"
                style={{color: locale === l.code ? '#78B8B5' : 'rgba(255,255,255,0.3)'}}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
