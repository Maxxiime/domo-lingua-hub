import React, { createContext, useContext, useEffect, useState } from 'react';
import { getInitialLocale, type Locale } from './i18n-init';
export type { Locale } from './i18n-init';

const supported: Locale[] = ['fr-FR', 'en-US', 'es-ES'];

const I18nCtx = createContext<{ locale: Locale; setLocale: (l: Locale)=>void }>({ locale: 'fr-FR', setLocale: ()=>{} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale());

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

