import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { Settings, Smartphone, Monitor, Lightbulb, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: t('services.install.title'),
      description: t('services.install.description'),
      features: t('services.install.features')
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('services.devices.title'),
      description: t('services.devices.description'),
      features: t('services.devices.features')
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t('services.dashboard.title'),
      description: t('services.dashboard.description'),
      features: t('services.dashboard.features')
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services.advice.title'),
      description: t('services.advice.description'),
      features: t('services.advice.features')
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      features: t('services.maintenance.features')
    }
  ];

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('services.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.page.subtitle')}
          </p>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="tech-card group p-8">
                <div className="mb-6">
                  <div className="feature-icon mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary smooth-transition mb-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-2">{t('common.included')}:</h4>
                  <p className="text-sm text-muted-foreground">{service.features}</p>
                </div>
                
                <Button asChild variant="tech" className="w-full">
                  <Link to="/quote">
                    {t('common.request_quote')}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border shadow-soft">
            <h2 className="text-3xl font-bold mb-4">{t('common.contact_us')}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('services.page.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/quote">
                  {t('common.request_quote')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {t('nav.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;