import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('contact.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.page.subtitle')}
          </p>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 pb-16 relative z-10 pointer-events-auto">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Contact;