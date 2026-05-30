import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--celeste)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ServiceCard({
  tag, title, description, items, cta, accent,
}: {
  tag: string; title: string; description: string; items: string[]; cta: string; accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-8 flex flex-col gap-5 border transition-shadow hover:shadow-lg ${
      accent ? "bg-[var(--navy)] text-white border-[var(--navy)]" : "bg-white text-[var(--foreground)] border-[var(--border)]"
    }`}>
      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start ${
        accent ? "bg-white/15 text-white" : "bg-[var(--celeste-pale)] text-[var(--celeste)]"
      }`}>{tag}</span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`text-sm leading-relaxed ${accent ? "text-white/80" : "text-[var(--muted)]"}`}>{description}</p>
      <ul className="flex flex-col gap-2 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            {accent ? (
              <svg className="w-4 h-4 text-[var(--celeste-light)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : <CheckIcon />}
            <span className={accent ? "text-white/90" : ""}>{item}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
        accent ? "text-[var(--celeste-light)] hover:text-white" : "text-[var(--celeste)] hover:text-[var(--navy)]"
      }`}>
        {cta}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

export default function RenatoPmoPage() {
  const t = useTranslations();

  const services = [
    {
      tag: t("services.s1.tag"), title: t("services.s1.title"), description: t("services.s1.description"),
      items: [t("services.s1.items.0"), t("services.s1.items.1"), t("services.s1.items.2"), t("services.s1.items.3"), t("services.s1.items.4")],
    },
    {
      tag: t("services.s2.tag"), title: t("services.s2.title"), description: t("services.s2.description"),
      items: [t("services.s2.items.0"), t("services.s2.items.1"), t("services.s2.items.2"), t("services.s2.items.3"), t("services.s2.items.4")],
      accent: true,
    },
    {
      tag: t("services.s3.tag"), title: t("services.s3.title"), description: t("services.s3.description"),
      items: [t("services.s3.items.0"), t("services.s3.items.1"), t("services.s3.items.2"), t("services.s3.items.3"), t("services.s3.items.4")],
    },
  ];

  return (
    <>
      <Navbar />
      <main id="top">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--navy-dark)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[var(--celeste)] opacity-5 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--celeste)] opacity-5 -translate-x-1/2" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy)] to-[#0d3060]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--celeste-light)] mb-6 px-4 py-2 rounded-full border border-[var(--celeste)]/30 bg-[var(--celeste)]/10">
              {t("hero.tag")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">{t("hero.title")}</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-[var(--celeste)] text-white font-bold rounded-xl hover:bg-[var(--celeste-light)] transition-colors shadow-lg">
                {t("hero.cta")}
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#f5f8fc" />
            </svg>
          </div>
        </section>

        {/* ── Symptoms ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] mb-3">
                {t("symptoms.title")}
              </h2>
              <p className="text-[var(--muted)]">{t("symptoms.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(["s1","s2","s3","s4","s5","s6"] as const).map((key) => (
                <div key={key} className="flex items-start gap-3 p-5 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-[var(--celeste)] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[var(--celeste)]" />
                  </span>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{t(`symptoms.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────── */}
        <section id="services" className="py-24 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-3 block">{t("services.title")}</span>
              <p className="text-[var(--muted)] max-w-xl mx-auto">{t("services.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => <ServiceCard key={s.title} {...s} cta={t("services.cta")} />)}
            </div>
          </div>
        </section>

        {/* ── Cases ────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-3 block">
                {t("cases.title")}
              </span>
              <p className="text-[var(--muted)] max-w-xl mx-auto">{t("cases.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["c1","c2","c3"] as const).map((key) => (
                <div key={key} className="rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col">
                  {/* Card header */}
                  <div className="bg-[var(--navy)] px-6 py-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white">
                        {t(`cases.${key}.industry`)}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--celeste)]/20 text-[var(--celeste-light)]">
                        {t(`cases.${key}.type`)}
                      </span>
                    </div>
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                      {(["stat1","stat2","stat3"] as const).map((s) => (
                        <div key={s} className="text-center">
                          <div className="text-xl font-black text-white">{t(`cases.${key}.${s}`)}</div>
                          <div className="text-[10px] text-white/50 leading-tight mt-0.5">{t(`cases.${key}.${s}l`)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="px-6 py-5 flex flex-col gap-4 flex-1 bg-white">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] block mb-1">
                        {t("cases.challengeLabel")}
                      </span>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{t(`cases.${key}.challenge`)}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--navy)] block mb-1">
                        {t("cases.resultLabel")}
                      </span>
                      <p className="text-sm text-[var(--foreground)] leading-relaxed font-medium">{t(`cases.${key}.result`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden">
                  <img src="/images/renato-decker.jpeg" alt="Renato Decker" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--celeste-pale)] -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[var(--navy)]/5 -z-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-3 block">{t("about.title")}</span>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p className="font-medium text-[var(--foreground)] italic">{t("about.p3")}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {[t("about.badge1"), t("about.badge2"), t("about.badge3")].map((badge) => (
                    <span key={badge} className="text-xs font-semibold px-4 py-2 rounded-full bg-[var(--celeste-pale)] text-[var(--navy)]">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--celeste)] mb-3 block">{t("contact.title")}</span>
              <p className="text-[var(--muted)] max-w-xl mx-auto">{t("contact.subtitle")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--navy-dark)] text-white/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-bold text-white">Renato Decker</span>
          <span>© {new Date().getFullYear()} {t("footer.rights")}</span>
        </div>
      </footer>
    </>
  );
}
