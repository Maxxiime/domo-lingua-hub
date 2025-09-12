import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Packs = () => {
  const { t } = useLanguage();

  const packs = [
    {
      title: t('packs.starter.title'),
      price: t('packs.starter.price'),
      features: t('packs.starter.features').split(' • '),
      popular: false,
      variant: 'outline' as const
    },
    {
      title: t('packs.advanced.title'),
      price: t('packs.advanced.price'),
      features: t('packs.advanced.features').split(' • '),
      popular: true,
      variant: 'default' as const
    },
    {
      title: t('packs.pro.title'),
      price: t('packs.pro.price'),
      features: t('packs.pro.features').split(' • '),
      popular: false,
      variant: 'secondary' as const
    }
  ];

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('packs.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('packs.page.subtitle')}
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packs.map((pack, index) => (
              <Card 
                key={index} 
                className={`relative tech-card transition-all duration-300 hover:scale-105 ${
                  pack.popular ? 'border-primary shadow-glow' : ''
                }`}
              >
                {pack.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    {t('packs.popular')}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{pack.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pack.price}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-4">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 pt-6">
                  <Button 
                    variant={pack.popular ? "hero" : "tech"} 
                    className="w-full"
                  >
                    {t('common.request_quote')}
                  </Button>
                  <Button variant="outline" className="w-full">
                    {t('common.buy_now')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border shadow-soft text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every smart home is unique. Contact us for a personalized quote tailored to your specific needs and requirements.
            </p>
            <Button variant="hero" size="lg">
              {t('nav.contact')}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Packs;