'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';

const SOCIAL = [
  {name: 'Instagram', href: '#', icon: '◈'},
  {name: 'Facebook', href: '#', icon: '◉'},
  {name: 'TikTok', href: '#', icon: '◐'},
];

export default function Contact() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');
  const langs = t.raw('languages') as string[];
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name: '', email: '', language: '', message: ''});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-6">{t('tag')}</p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6 font-display">
            {t('title').split(' ').slice(0,1).join(' ')}
            <span className="italic text-teal"> {t('title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-dark/50 leading-relaxed mb-12 max-w-sm font-light">{t('subtitle')}</p>

          <p className="text-xs font-light tracking-[0.2em] uppercase text-dark/30 mb-4">{t('social_title')}</p>
          <div className="flex gap-4">
            {SOCIAL.map(s => (
              <a key={s.name} href={s.href}
                className="w-12 h-12 border border-dark/10 rounded-full flex items-center justify-center text-xl hover:border-teal hover:text-teal transition-colors"
                title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {sent ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white">✓</div>
                <p className="font-light text-xl font-display italic">{t('success')}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {key: 'name', type: 'text', label: tf('name')},
                {key: 'email', type: 'email', label: tf('email')},
              ].map(f => (
                <div key={f.key}>
                  <label className="text-xs font-light tracking-[0.2em] uppercase text-dark/40 block mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm(p => ({...p, [f.key]: e.target.value}))}
                    className="w-full px-4 py-3 border border-dark/15 rounded-xl bg-cream focus:border-teal focus:outline-none transition-colors text-sm font-light"
                  />
                </div>
              ))}

              <div>
                <label className="text-xs font-light tracking-[0.2em] uppercase text-dark/40 block mb-2">{tf('language')}</label>
                <select
                  value={form.language}
                  onChange={e => setForm(p => ({...p, language: e.target.value}))}
                  className="w-full px-4 py-3 border border-dark/15 rounded-xl bg-cream focus:border-teal focus:outline-none transition-colors text-sm font-light"
                >
                  <option value="" />
                  {langs.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-light tracking-[0.2em] uppercase text-dark/40 block mb-2">{tf('message')}</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({...p, message: e.target.value}))}
                  className="w-full px-4 py-3 border border-dark/15 rounded-xl bg-cream focus:border-teal focus:outline-none transition-colors text-sm resize-none font-light"
                />
              </div>

              <button type="submit"
                className="w-full py-4 bg-teal text-white font-medium text-sm tracking-[0.12em] uppercase rounded-full hover:opacity-90 transition-opacity">
                {tf('send')} →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
