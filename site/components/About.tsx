import {useTranslations} from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const values = t.raw("values") as {title: string; desc: string}[];

  return (
    <section id="about" className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Soft blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{background: "#C87898"}} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="w-full aspect-[3/4] bg-butter rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="w-full h-3/4 bg-gradient-to-t from-dark/10 to-transparent absolute bottom-0" />
            <span className="relative mb-8 text-8xl font-light text-teal/40 font-display italic">G</span>
          </div>
          {/* Decorative circle */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full" style={{background: "#EDE5C0"}} />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-70" style={{background: "#EDE5C0"}} />
        </div>

        {/* Content */}
        <div className="pt-4 flex flex-col gap-10">
          <div>
            <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-6">{t("tag")}</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight font-display">
              {t("title").split(" ").slice(0, -2).join(" ")}
              <span className="italic text-teal"> {t("title").split(" ").slice(-2).join(" ")}</span>
            </h2>
          </div>

          {/* Pull quote */}
          <div>
            <p className="text-base leading-relaxed text-dark/60 mb-4">
              {t("bio_1").split("—")[0].trim()} —
            </p>
            {t("bio_1").includes("—") && (
              <p className="text-2xl md:text-3xl font-light italic leading-snug text-teal font-display">
                {t("bio_1").split("—")[1].trim()}
              </p>
            )}
          </div>

          {/* Secondary paragraphs */}
          <div className="space-y-5 border-l border-teal/40 pl-6">
            <p className="text-dark/60 text-base leading-relaxed font-light">{t("bio_2")}</p>
            <p className="text-dark/60 text-base leading-relaxed font-light">{t("bio_3")}</p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-3">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-dark/8 hover:border-teal/40 hover:bg-teal/5 transition-all">
                <div className="w-2 h-2 mt-2 bg-teal rounded-full shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">{v.title}</p>
                  <p className="text-sm text-dark/50 font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
