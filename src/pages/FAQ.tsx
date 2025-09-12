import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t('nav.faq')}</h1>
          <p className="text-xl text-muted-foreground">Page en construction...</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;