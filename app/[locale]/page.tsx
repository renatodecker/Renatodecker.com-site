import { useTranslations } from "next-intl";
import HomeNavbar from "@/components/HomeNavbar";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-4 block">
      {children}
    </span>
  );
}

function DarkLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste-light)] mb-4 block">
      {children}
    </span>
  );
}

export default function HomePage() {
  const t = useTranslations("cv");

  return (
    <>
      <HomeNavbar />
      <main id="top">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy-dark)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-[var(--navy)] opacity-70 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--celeste)] opacity-[0.03] -translate-x-1/2 translate-y-1/3" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

              {/* Left: text — 3 cols */}
              <div className="lg:col-span-3">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--celeste-light)] mb-6 px-4 py-1.5 rounded-full border border-[var(--celeste)]/25 bg-[var(--celeste)]/8">
                  {t("hero.tag")}
                </span>

                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3">
                  Renato Decker
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--celeste-light)] mb-5 tracking-wide">
                  {t("hero.headline")}
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-6 max-w-xl">
                  {t("hero.subtitle")}
                </p>

                <p className="text-white/30 text-sm flex items-center gap-2 mb-10">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t("hero.location")}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-10 mb-10 pb-10 border-b border-white/10">
                  {(["stat1", "stat2", "stat3"] as const).map((key) => (
                    <div key={key}>
                      <div className="text-3xl font-black text-white">{t(`hero.${key}`)}</div>
                      <div className="text-xs text-white/35 mt-1 leading-tight max-w-[110px]">{t(`hero.${key}label`)}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:renatodecker@yahoo.com.br"
                    data-track="hero-cta-contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--celeste)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--celeste-light)] transition-colors shadow-md"
                  >
                    {t("hero.ctaContact")}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renatodecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="hero-cta-linkedin"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/8 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right: photo — 2 cols */}
              <div className="lg:col-span-2 hidden lg:flex justify-center items-center">
                <div className="relative">
                  <div className="w-72 h-[22rem] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                    <img
                      src="/images/renato-decker.jpeg"
                      alt="Renato Decker"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--celeste)]/15 -z-10" />
                  <div className="absolute -top-3 -left-3 w-24 h-24 rounded-full bg-[var(--celeste)]/5 -z-10" />
                </div>
              </div>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 64L1440 64L1440 32C1200 64 960 0 720 16C480 32 240 64 0 32L0 64Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── EXECUTIVE SUMMARY ───────────────────────────── */}
        <section id="summary" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <Label>{t("summary.title")}</Label>
            <div className="space-y-6">
              <p className="text-[var(--foreground)] text-lg leading-relaxed">
                {t("summary.p1")}
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                {t("summary.p2")}
              </p>
              <p className="text-[var(--muted)] leading-relaxed border-l-3 border-[var(--celeste)] pl-5 py-0.5">
                {t("summary.p3")}
              </p>
            </div>
          </div>
        </section>

        {/* ── CORE EXPERTISE ──────────────────────────────── */}
        <section className="py-20 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6">
            <Label>{t("expertise.title")}</Label>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {(Array.from({ length: 12 }) as unknown[]).map((_, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-[var(--border)] text-sm font-medium text-[var(--foreground)] rounded-md hover:border-[var(--celeste)]/60 hover:text-[var(--navy)] transition-colors"
                >
                  {t(`expertise.items.${i}` as Parameters<typeof t>[0])}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ──────────────────────────────────── */}
        <section id="experience" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <Label>{t("exp.title")}</Label>

            <div className="mb-10">
              <p className="font-bold text-[var(--navy)] text-lg">{t("exp.company")}</p>
              <p className="text-sm text-[var(--muted)]">{t("exp.total")}</p>
            </div>

            <div className="relative pl-7 border-l-2 border-[var(--border)] space-y-10">
              {(["r1","r2","r3","r4","r5","r6","r7"] as const).map((key) => (
                <div key={key} className="relative">
                  <div className="absolute -left-[2.4rem] top-1 w-4 h-4 rounded-full bg-[var(--celeste)] ring-4 ring-white" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h4 className="font-bold text-[var(--foreground)] text-base">{t(`exp.${key}.title`)}</h4>
                    <span className="text-xs font-medium text-[var(--celeste)] bg-[var(--celeste-pale)] px-2.5 py-0.5 rounded-full">
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

        {/* ── FEATURED PROGRAMS ───────────────────────────── */}
        <section id="programs" className="py-24 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-6">
            <Label>{t("programs.title")}</Label>
            <p className="text-[var(--muted)] text-sm mb-10 -mt-2">{t("programs.subtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {(["p1","p2","p3","p4"] as const).map((key) => (
                <div key={key} className="bg-white rounded-xl p-6 border border-[var(--border)] border-l-4 border-l-[var(--celeste)]/30 hover:border-l-[var(--celeste)] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--celeste)] block mb-2">
                    {t(`programs.${key}.tag`)}
                  </span>
                  <h4 className="font-bold text-[var(--navy)] text-base mb-2 leading-snug">
                    {t(`programs.${key}.title`)}
                  </h4>
                  <p className="text-xs text-[var(--muted)] font-medium mb-3 leading-relaxed">
                    {t(`programs.${key}.scale`)}
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {t(`programs.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP PHILOSOPHY ───────────────────────── */}
        <section className="py-24 bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto px-6">
            <DarkLabel>{t("philosophy.title")}</DarkLabel>
            <div className="space-y-8">
              <p className="text-white/80 text-lg leading-relaxed">{t("philosophy.p1")}</p>
              <div className="border-t border-white/8" />
              <p className="text-white/60 leading-relaxed">{t("philosophy.p2")}</p>
              <div className="border-t border-white/8" />
              <p className="text-white/60 leading-relaxed">{t("philosophy.p3")}</p>
            </div>
          </div>
        </section>

        {/* ── EDUCATION + LANGUAGES + INTERNATIONAL ───────── */}
        <section id="education" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              {/* Education */}
              <div>
                <Label>{t("edu.title")}</Label>
                <div className="space-y-5">
                  {(["e1","e2","e3","e4","e5"] as const).map((key) => (
                    <div key={key} className="pb-5 border-b border-[var(--border)] last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-3 mb-0.5">
                        <span className="font-bold text-[var(--navy)] text-sm">{t(`edu.${key}.inst`)}</span>
                        <span className="text-xs text-[var(--muted)] flex-shrink-0">{t(`edu.${key}.period`)}</span>
                      </div>
                      <p className="text-sm text-[var(--foreground)]">{t(`edu.${key}.degree`)}</p>
                      <p className="text-sm text-[var(--muted)]">{t(`edu.${key}.field`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages + International */}
              <div className="space-y-12">
                <div>
                  <Label>{t("languages.title")}</Label>
                  <div className="space-y-3">
                    {(["l1","l2","l3"] as const).map((key) => (
                      <div key={key} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--celeste)] flex-shrink-0" />
                        <span className="text-sm text-[var(--foreground)] font-medium">
                          {t(`languages.${key}` as Parameters<typeof t>[0])}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>{t("international.title")}</Label>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                    {t("international.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Array.from({ length: 6 }) as unknown[]).map((_, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--celeste-pale)] text-[var(--navy)]"
                      >
                        {t(`international.items.${i}` as Parameters<typeof t>[0])}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[var(--navy-dark)] py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-bold text-white text-lg tracking-tight">Renato Decker</span>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <a
                href="mailto:renatodecker@yahoo.com.br"
                data-track="footer-email"
                className="hover:text-white transition-colors"
              >
                renatodecker@yahoo.com.br
              </a>
              <a
                href="https://www.linkedin.com/in/renatodecker/"
                target="_blank"
                rel="noopener noreferrer"
                data-track="footer-linkedin"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <span className="text-white/20 text-xs">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
