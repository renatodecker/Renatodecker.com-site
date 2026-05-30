"use client";

import { useTranslations } from "next-intl";
import { useState, useRef } from "react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--celeste-pale)] mb-4">
          <svg className="w-8 h-8 text-[var(--celeste)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{t("successTitle")}</h3>
        <p className="text-[var(--muted)]">{t("successMsg")}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
            {t("name")}
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--celeste)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
            {t("email")}
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--celeste)] focus:border-transparent transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {t("message")}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--celeste)] focus:border-transparent transition resize-none"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={loading}
        data-track="contact-form-submit"
        className="w-full sm:w-auto px-8 py-3 bg-[var(--navy)] text-white font-semibold rounded-lg hover:bg-[var(--celeste)] transition-colors disabled:opacity-60 cursor-pointer"
      >
        {loading ? t("sending") : t("send")}
      </button>
    </form>
  );
}
