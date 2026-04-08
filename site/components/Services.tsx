import {useTranslations} from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as {title: string; duration: string; desc: string}[];

  return (
    <section id="services" className="py-24 px-6" style={{background: "#78B8B5"}}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-light tracking-[0.25em] uppercase text-white/70 mb-4">{t("tag")}</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-light leading-tight text-white font-display">
            {t("title").split(" ").slice(0,2).join(" ")}
            <span className="italic"> {t("title").split(" ").slice(2).join(" ")}</span>
          </h2>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed font-light">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {items.map((item, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/25 transition-all group border border-white/20">
              <div className="w-8 h-px bg-white/40 mb-8" />
              <h3 className="text-xl font-light text-white mb-2 font-display italic">{item.title}</h3>
              <p className="text-white/60 text-xs font-light tracking-[0.15em] uppercase mb-4">{item.duration}</p>
              <p className="text-white/70 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact"
            className="inline-flex items-center px-10 py-4 bg-white text-teal font-medium text-sm tracking-[0.12em] uppercase rounded-full hover:bg-cream transition-colors">
            {t("cta")} →
          </a>
        </div>
      </div>
    </section>
  );
}
