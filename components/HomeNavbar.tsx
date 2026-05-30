"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const localeLabels: Record<string, string> = { pt: "PT", en: "EN", es: "ES", de: "DE" };

export default function HomeNavbar() {
  const t = useTranslations("cv.nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  const links = [
    { href: "#summary", label: t("summary") },
    { href: "#experience", label: t("experience") },
    { href: "#programs", label: t("programs") },
    { href: "#education", label: t("education") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-xl text-[var(--navy)] tracking-tight hover:text-[var(--celeste)] transition-colors">
          Renato Decker
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--navy)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1">
            {Object.entries(localeLabels).map(([loc, label]) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors cursor-pointer ${
                  locale === loc ? "bg-[var(--navy)] text-white" : "text-[var(--muted)] hover:text-[var(--navy)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-[var(--navy)] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--celeste)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 pt-2 border-t border-[var(--border)]">
            {Object.entries(localeLabels).map(([loc, label]) => (
              <button
                key={loc}
                onClick={() => { switchLocale(loc); setMenuOpen(false); }}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors cursor-pointer ${
                  locale === loc ? "bg-[var(--navy)] text-white" : "text-[var(--muted)] hover:text-[var(--navy)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
