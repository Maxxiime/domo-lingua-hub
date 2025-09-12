import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.packs': 'Packs',
    'nav.quote': 'Devis',
    'nav.payment': 'Paiement',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.portfolio': 'Portfolio',
    
    // Home Page
    'home.hero.title': 'Votre Maison Intelligente',
    'home.hero.subtitle': 'Services professionnels de domotique',
    'home.hero.description': 'Installation et configuration Home Assistant, dispositifs IoT, tableaux de bord personnalisés et support technique expert.',
    'home.hero.cta': 'Demander un devis',
    'home.hero.learn': 'Découvrir nos services',
    
    // Services
    'services.title': 'Nos Services',
    'services.installation': 'Installation & Configuration',
    'services.installation.desc': 'Installation complète de Home Assistant et configuration de vos dispositifs',
    'services.devices': 'Configuration Dispositifs',
    'services.devices.desc': 'Intégration et paramétrage de tous vos appareils connectés',
    'services.dashboard': 'Tableaux de Bord',
    'services.dashboard.desc': 'Création d\'interfaces personnalisées et intuitives',
    'services.advice': 'Conseils Technologiques',
    'services.advice.desc': 'Expertise et recommandations pour optimiser votre installation',
    'services.maintenance': 'Maintenance & Support',
    'services.maintenance.desc': 'Support technique à distance et maintenance continue',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.get_started': 'Commencer',
    'theme.toggle': 'Basculer le thème',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.packs': 'Packs',
    'nav.quote': 'Quote',
    'nav.payment': 'Payment',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.portfolio': 'Portfolio',
    
    // Home Page
    'home.hero.title': 'Your Smart Home',
    'home.hero.subtitle': 'Professional home automation services',
    'home.hero.description': 'Home Assistant installation & configuration, IoT device setup, custom dashboards and expert technical support.',
    'home.hero.cta': 'Get a quote',
    'home.hero.learn': 'Discover our services',
    
    // Services
    'services.title': 'Our Services',
    'services.installation': 'Installation & Configuration',
    'services.installation.desc': 'Complete Home Assistant installation and device configuration',
    'services.devices': 'Device Setup',
    'services.devices.desc': 'Integration and configuration of all your connected devices',
    'services.dashboard': 'Custom Dashboards',
    'services.dashboard.desc': 'Creation of personalized and intuitive interfaces',
    'services.advice': 'Technology Consulting',
    'services.advice.desc': 'Expertise and recommendations to optimize your installation',
    'services.maintenance': 'Maintenance & Support',
    'services.maintenance.desc': 'Remote technical support and continuous maintenance',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.get_started': 'Get started',
    'theme.toggle': 'Toggle theme',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.packs': 'Paquetes',
    'nav.quote': 'Presupuesto',
    'nav.payment': 'Pago',
    'nav.contact': 'Contacto',
    'nav.faq': 'FAQ',
    'nav.portfolio': 'Portfolio',
    
    // Home Page
    'home.hero.title': 'Tu Hogar Inteligente',
    'home.hero.subtitle': 'Servicios profesionales de domótica',
    'home.hero.description': 'Instalación y configuración de Home Assistant, dispositivos IoT, paneles personalizados y soporte técnico experto.',
    'home.hero.cta': 'Solicitar presupuesto',
    'home.hero.learn': 'Descubrir servicios',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.installation': 'Instalación y Configuración',
    'services.installation.desc': 'Instalación completa de Home Assistant y configuración de dispositivos',
    'services.devices': 'Configuración de Dispositivos',
    'services.devices.desc': 'Integración y configuración de todos tus dispositivos conectados',
    'services.dashboard': 'Paneles Personalizados',
    'services.dashboard.desc': 'Creación de interfaces personalizadas e intuitivas',
    'services.advice': 'Consultoría Tecnológica',
    'services.advice.desc': 'Experiencia y recomendaciones para optimizar tu instalación',
    'services.maintenance': 'Mantenimiento y Soporte',
    'services.maintenance.desc': 'Soporte técnico remoto y mantenimiento continuo',
    
    // Common
    'common.learn_more': 'Saber más',
    'common.get_started': 'Empezar',
    'theme.toggle': 'Cambiar tema',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};