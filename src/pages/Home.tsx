import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, 
  Settings, 
  Smartphone, 
  Monitor, 
  Lightbulb, 
  HeadphonesIcon,
  Thermometer,
  Camera,
  Lock,
  Wifi
} from 'lucide-react';
import { animateOnce } from '@/lib/animateOnce';

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => animateOnce(), []);

  useEffect(() => {
    console.log('[Home] mounted');
    return () => console.log('[Home] unmounted');
  }, []);

  useEffect(() => {
    const root = document.querySelector('main, #root, body') || document.body;
    const onStart = (e: AnimationEvent) => {
      const t = e.target as HTMLElement;
      // Only log elements inside the home page
      if (!root.contains(t)) return;
      const id = t.id || '';
      const cls = (t.className || '').toString().trim();
      console.log('[ANIM start]', e.animationName, { id, cls });
    };
    document.addEventListener('animationstart', onStart, true);
    return () => document.removeEventListener('animationstart', onStart, true);
  }, []);

  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: t('services.installation'),
      description: t('services.installation.desc')
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('services.devices'),
      description: t('services.devices.desc')
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t('services.dashboard'),
      description: t('services.dashboard.desc')
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services.advice'),
      description: t('services.advice.desc')
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: t('services.maintenance'),
      description: t('services.maintenance.desc')
    }
  ];

  const features = [
    { icon: <Thermometer className="h-6 w-6" />, name: 'Thermostat' },
    { icon: <Camera className="h-6 w-6" />, name: 'Security' },
    { icon: <Lock className="h-6 w-6" />, name: 'Smart Locks' },
    { icon: <Lightbulb className="h-6 w-6" />, name: 'Lighting' },
    { icon: <Wifi className="h-6 w-6" />, name: 'Network' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        id="home-hero"
        className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32 animate-fade-in [animation-duration:700ms] [animation-fill-mode:both]"
      >
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 data-animate-once className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>

            <p data-animate-once className="mb-4 text-xl text-white/90 sm:text-2xl">
              {t('home.hero.subtitle')}
            </p>

            <p data-animate-once className="mb-10 text-lg text-white/80 sm:text-xl max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                data-animate-once
                asChild
                variant="hero"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <Link to="/quote">
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                data-animate-once
                asChild
                variant="tech"
                size="lg"
                className="text-lg px-8 py-4 h-auto text-white border-white/20 bg-white/10 hover:bg-white/20"
              >
                <Link to="/services">
                  {t('home.hero.learn')}
                </Link>
              </Button>
            </div>

            {/* Feature icons */}
            <div className="mt-16 flex justify-center space-x-6">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  data-animate-once
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className="service-icon bg-white/10 backdrop-blur-sm border border-white/20 text-white group-hover:bg-white/20 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <span className="text-xs text-white/80 hidden sm:block">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour transformer votre maison en espace intelligent et connecté
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.title}
                data-animate-once
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div
                key={service.title}
                data-animate-once
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="smart" size="lg">
              <Link to="/services">
                Découvrir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Prêt à transformer votre maison ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Obtenez un devis personnalisé pour votre projet de domotique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/quote">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
