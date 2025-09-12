import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    },
    {
      question: t('faq.q6.question'),
      answer: t('faq.q6.answer')
    }
  ];

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('faq.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('faq.page.subtitle')}
          </p>
        </section>

        {/* FAQ Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-6 py-2 hover:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-base font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border shadow-soft text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with personalized advice for your smart home project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t('nav.contact')}
              </Button>
              <Button variant="outline" size="lg">
                {t('common.request_quote')}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;