"use client";

import { useEffect } from "react";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = (e.target as Element).closest("[data-track]");
      if (!el) return;
      const label = el.getAttribute("data-track") ?? "";
      const g = (window as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof g === "function") {
        g("event", "cta_click", { event_label: label });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
