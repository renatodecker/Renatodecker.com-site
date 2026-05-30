import { useTranslations, useLocale } from "next-intl";
import HomeNavbar from "@/components/HomeNavbar";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-2 block">
      {children}
    </span>
  );
}

export default function HomePage() {
  const t = useTranslations("cv");
  const locale = useLocale();

  const expRoles = ["r1", "r2", "r3", "r4", "r5", "r6", "r7"] as const;
  const eduEntries = ["e1", "e2", "e3", "e4", "e5"] as const;
  const skillCats = ["c1", "c2", "c3", "c4"] as const;

  return (
    <>
      <HomeNavbar />

      <main id="top">
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy)] to-[#0d3060]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[var(--celeste)] opacity-5 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--celeste)] opacity-5 -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
            {/* Avatar */}
            <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-gradient-to-br from-[var(--celeste)] to-[var(--navy-dark)] flex items-center justify-center ring-4 ring-white/20">
              <span className="text-3xl font-black text-white/90 select-none">RD</span>
            </div>

            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--celeste-light)] mb-4 px-4 py-1.5 rounded-full border border-[var(--celeste)]/30 bg-[var(--celeste)]/10">
              {t("hero.tag")}
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Renato Decker
            </h1>
            <p className="text-[var(--celeste-light)] font-medium text-lg mb-3 tracking-wide">
              {t("hero.subtitle")}
            </p>
            <p className="text-white/50 text-sm mb-10 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t("hero.location")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {(["stat1", "stat2", "stat3"] as const).map((key) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-black text-white">{t(`hero.${key}`)}</div>
                  <div className="text-xs text-white/50 mt-1 max-w-[100px]">{t(`hero.${key}label`)}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/renatopmo`}
                className="px-8 py-4 bg-[var(--celeste)] text-white font-bold rounded-xl hover:bg-[var(--celeste-light)] transition-colors shadow-lg"
              >
                {t("hero.cta")}
              </a>
              <a
                href="mailto:renatodecker@yahoo.com.br"
                className="px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                {t("hero.ctaContact")}
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#f5f8fc" />
            </svg>
          </div>
        </section>

        {/* ── About / Summary ───────────────────────────── */}
        <section id="about" className="py-20 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>{t("summary.title")}</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <p className="text-[var(--muted)] leading-relaxed">{t("summary.p1")}</p>
              <p className="text-[var(--muted)] leading-relaxed">{t("summary.p2")}</p>
              <p className="text-[var(--foreground)] leading-relaxed font-medium italic border-l-4 border-[var(--celeste)] pl-4">
                {t("summary.p3")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Experience ────────────────────────────────── */}
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>{t("exp.title")}</SectionLabel>

            {/* Company header */}
            <div className="flex items-center gap-3 mb-10 mt-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--celeste-pale)] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[var(--celeste)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[var(--navy)] text-lg">{t("exp.company")}</h3>
                <p className="text-sm text-[var(--muted)]">{t("exp.total")}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-[var(--border)] space-y-10">
              {expRoles.map((key) => (
                <div key={key} className="relative">
                  <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-[var(--celeste)] ring-4 ring-white" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h4 className="font-bold text-[var(--foreground)] text-base">{t(`exp.${key}.title`)}</h4>
                    <span className="text-xs font-medium text-[var(--celeste)] bg-[var(--celeste-pale)] px-2 py-0.5 rounded-full">
                      {t(`exp.${key}.duration`)}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted)] mb-2">{t(`exp.${key}.period`)}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{t(`exp.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────── */}
        <section className="py-20 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>{t("skills.title")}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {skillCats.map((cat) => (
                <div key={cat} className="bg-white rounded-xl p-5 border border-[var(--border)]">
                  <h4 className="font-bold text-[var(--navy)] text-sm mb-3">{t(`skills.${cat}.name`)}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.from({ length: cat === "c4" ? 4 : 5 }).map((_, i) => {
                      const key = `skills.${cat}.items.${i}` as Parameters<typeof t>[0];
                      return (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-[var(--celeste-pale)] text-[var(--navy)] font-medium">
                          {t(key)}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ─────────────────────────────────── */}
        <section id="education" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>{t("edu.title")}</SectionLabel>
            <div className="mt-4 space-y-4">
              {eduEntries.map((key) => (
                <div key={key} className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-0">
                  <div className="w-10 h-10 rounded-lg bg-[var(--celeste-pale)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[var(--celeste)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span className="font-bold text-[var(--navy)]">{t(`edu.${key}.inst`)}</span>
                      <span className="text-xs text-[var(--muted)]">{t(`edu.${key}.period`)}</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)]">{t(`edu.${key}.degree`)} · {t(`edu.${key}.field`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Languages ─────────────────────────────────── */}
        <section className="py-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>{t("languages.title")}</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-4">
              {(["l1", "l2", "l3"] as const).map((key) => (
                <span key={key} className="px-4 py-2 rounded-full bg-white border border-[var(--border)] text-sm font-medium text-[var(--foreground)]">
                  {t(`languages.${key}` as Parameters<typeof t>[0])}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services CTA ──────────────────────────────── */}
        <section className="py-20 bg-[var(--navy-dark)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">{t("cta.title")}</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">{t("cta.subtitle")}</p>
            <a
              href={`/${locale}/renatopmo`}
              className="inline-block px-10 py-4 bg-[var(--celeste)] text-white font-bold rounded-xl hover:bg-[var(--celeste-light)] transition-colors shadow-lg text-lg"
            >
              {t("cta.btn")}
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="bg-[var(--navy-dark)] border-t border-white/10 text-white/40 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-bold text-white">Renato Decker</span>
          <div className="flex items-center gap-6">
            <a href="mailto:renatodecker@yahoo.com.br" className="hover:text-white transition-colors">
              renatodecker@yahoo.com.br
            </a>
            <a href="https://www.linkedin.com/in/renatodecker/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
