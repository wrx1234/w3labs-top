"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "zh" | "en";

type SiteContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  t: <T>(copy: Record<Locale, T>) => T;
};

const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("w3labs-locale") as Locale | null;
    if (saved === "zh" || saved === "en") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("w3labs-locale", locale);
  }, [locale]);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      toggleLocale: () => setLocale((prev) => (prev === "zh" ? "en" : "zh")),
      t: (copy) => copy[locale],
    }),
    [locale],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
