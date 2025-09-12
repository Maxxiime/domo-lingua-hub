import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import QuoteForm from '@/components/QuoteForm';

const Quote = () => {
  const { t } = useLanguage();
  const [estimate, setEstimate] = useState(0);

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('quote.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('quote.page.subtitle')}
          </p>
        </section>

        {/* Quote Form */}
        <section className="container mx-auto px-4 pb-16">
          <QuoteForm onEstimateChange={setEstimate} />
        </section>
      </main>
    </div>
  );
};

export default Quote;