import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'fr-FR' | 'en-US' | 'es-ES';

const supported: Locale[] = ['fr-FR', 'en-US', 'es-ES'];

function detectBrowserLocale(): Locale {
  try {
    const nav = typeof navigator !== "undefined" ? (navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || "") : "";
    const base = (nav || "").toLowerCase();
    if (base.startsWith("en")) return "en-US";
    if (base.startsWith("es")) return "es-ES";
    if (base.startsWith("fr")) return "fr-FR";
  } catch { /* ignore */ }
  return "fr-FR";
}

const I18nCtx = createContext<{ locale: Locale; setLocale: (l: Locale)=>void }>({ locale: 'fr-FR', setLocale: ()=>{} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr-FR');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('app.lang') as Locale | null) : null;
    const initial = saved && supported.includes(saved) ? saved : detectBrowserLocale();
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    // keep <html lang="..."> in sync
    if (typeof document !== 'undefined') document.documentElement.lang = locale;
    if (typeof window !== 'undefined') localStorage.setItem('app.lang', locale);
  }, [locale]);

  const setLocale = (l: Locale) => {
    if (!supported.includes(l)) return;
    setLocaleState(l);
  };

  return <I18nCtx.Provider value={{ locale, setLocale }}>{children}</I18nCtx.Provider>;
}

export const useLocale = () => useContext(I18nCtx);

