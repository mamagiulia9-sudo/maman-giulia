'use client';
import {useTranslations} from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Decorative circles — butter + mauve */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{background: "#EDE5C0"}} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{background: "#E8C4D4", opacity: 0.45}} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Text content */}
        <div>
          <p className="text-sm font-light tracking-[0.25em] uppercase text-teal mb-10">Infant Sleep Coach · Londres</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] font-display text-dark mb-3">
            {t("title_1")}
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold italic leading-[1.1] text-teal font-display mb-12">
            {t("title_2")}
          </h1>
          <p className="text-base md:text-lg text-dark/55 max-w-md mb-12 leading-relaxed font-light">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-teal text-white font-medium text-sm tracking-[0.12em] uppercase rounded-full hover:opacity-90 transition-opacity">
              {t("cta_book")}
            </a>
            <a href="#resources"
              className="inline-flex items-center justify-center px-10 py-4 border border-dark/25 text-dark font-medium text-sm tracking-[0.12em] uppercase rounded-full hover:bg-dark/5 transition-colors">
              {t("cta_resources")}
            </a>
          </div>
        </div>

        {/* Logo image — circular crop */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden drop-shadow-sm">
            <Image
              src="/Logo - 2.png"
              alt="Mama Giulia logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
