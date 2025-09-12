import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Lightbulb, Shield, Thermometer, Zap, Mic } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: <Monitor className="h-12 w-12" />,
      title: t('portfolio.dashboard.title'),
      description: t('portfolio.dashboard.desc'),
      image: "🏠"
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: t('portfolio.lighting.title'),
      description: t('portfolio.lighting.desc'),
      image: "💡"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: t('portfolio.security.title'),
      description: t('portfolio.security.desc'),
      image: "🔒"
    },
    {
      icon: <Thermometer className="h-12 w-12" />,
      title: t('portfolio.climate.title'),
      description: t('portfolio.climate.desc'),
      image: "🌡️"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: t('portfolio.automation.title'),
      description: t('portfolio.automation.desc'),
      image: "⚡"
    },
    {
      icon: <Mic className="h-12 w-12" />,
      title: t('portfolio.voice.title'),
      description: t('portfolio.voice.desc'),
      image: "🎤"
    }
  ];

  return (
    <div className="pt-16">
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            {t('portfolio.page.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.page.subtitle')}
          </p>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="tech-card group overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-4xl">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="feature-icon mx-auto mb-4">
                    {project.icon}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Demo Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">See It in Action</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Experience how our smart home solutions transform daily living. From voice-controlled lighting to intelligent climate management, discover the possibilities of home automation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Monitor className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Intuitive dashboard interfaces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Automated scenarios and routines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mic className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">Voice control integration</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-xl font-semibold mb-2">Home Assistant Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Control your entire home from one beautiful interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;