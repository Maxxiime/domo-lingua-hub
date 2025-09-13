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
    'common.request_quote': 'Demander un devis',
    'common.buy_now': 'Acheter maintenant',
    'common.contact_us': 'Nous contacter',
    'common.upload_file': 'Télécharger un fichier',
    'common.send_message': 'Envoyer le message',
    'common.calculate_price': 'Calculer le prix',
    'common.features': 'Fonctionnalités',
    'common.included': 'Inclus',
    'theme.toggle': 'Basculer le thème',
    
    // Services Page
    'services.page.title': 'Nos Services de Domotique',
    'services.page.subtitle': 'Solutions professionnelles pour votre maison intelligente',
    'services.install.title': 'Installation & Configuration',
    'services.install.description': 'Installation complète de Home Assistant sur votre serveur local ou cloud. Configuration des paramètres de base, création des comptes utilisateurs et sécurisation de votre système.',
    'services.install.features': 'Installation serveur • Configuration réseau • Comptes utilisateurs • Sécurité SSL',
    'services.devices.title': 'Configuration Dispositifs',
    'services.devices.description': 'Intégration et configuration de tous vos appareils connectés : éclairage, chauffage, sécurité, multimédia. Optimisation des communications et test de fonctionnement.',
    'services.devices.features': 'Intégration Zigbee/Z-Wave • Configuration WiFi • Tests fonctionnels • Optimisation réseau',
    'services.dashboard.title': 'Tableaux de Bord Personnalisés',
    'services.dashboard.description': 'Création d\'interfaces utilisateur intuitives et esthétiques adaptées à vos besoins. Design responsive pour tous vos appareils.',
    'services.dashboard.features': 'Design sur mesure • Interface responsive • Widgets personnalisés • Thèmes adaptatifs',
    'services.advice.title': 'Conseils Technologiques',
    'services.advice.description': 'Audit de votre installation existante, recommandations d\'équipements compatibles et conseils d\'optimisation pour une maison intelligente efficace.',
    'services.advice.features': 'Audit technique • Recommandations équipements • Guide d\'achat • Stratégie d\'évolution',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.description': 'Support technique à distance, mises à jour régulières, sauvegarde de configuration et assistance en cas de problème.',
    'services.maintenance.features': 'Support 24/7 • Mises à jour automatiques • Sauvegardes cloud • Diagnostic à distance',
    
    // Packs Page
    'packs.page.title': 'Nos Packs Domotique',
    'packs.page.subtitle': 'Choisissez la solution qui correspond à vos besoins',
    'packs.starter.title': 'Pack Débutant',
    'packs.starter.price': '299.00 $ CAD',
    'packs.starter.features': 'Jusqu\'à 15 appareils • Tableau de bord basique • Installation à distance • Email support • 1 mois de maintenance',
    'packs.advanced.title': 'Pack Avancé',
    'packs.advanced.price': '599.00 $ CAD',
    'packs.advanced.features': 'Jusqu\'à 50 appareils • Tableaux personnalisés • Installation sur site • Support téléphonique • 6 mois de maintenance • Conseils d\'optimisation',
    'packs.pro.title': 'Pack Professionnel',
    'packs.pro.price': '999.00 $ CAD',
    'packs.pro.features': 'Appareils illimités • Design sur mesure • Formation utilisateur • Support prioritaire • 12 mois de maintenance • Audit complet',
    'packs.popular': 'Plus populaire',
    
    // Portfolio Page
    'portfolio.page.title': 'Nos Réalisations',
    'portfolio.page.subtitle': 'Découvrez nos projets de maisons intelligentes',
    'portfolio.dashboard.title': 'Tableau de Bord Moderne',
    'portfolio.dashboard.desc': 'Interface utilisateur épurée avec contrôle de l\'éclairage, température et sécurité',
    'portfolio.lighting.title': 'Éclairage Intelligent',
    'portfolio.lighting.desc': 'Système d\'éclairage automatisé avec scénarios personnalisés et contrôle vocal',
    'portfolio.security.title': 'Sécurité Connectée',
    'portfolio.security.desc': 'Système de surveillance avec caméras, détecteurs et notifications en temps réel',
    'portfolio.climate.title': 'Contrôle Climatique',
    'portfolio.climate.desc': 'Gestion intelligente du chauffage et climatisation avec économies d\'énergie',
    'portfolio.automation.title': 'Automatisations',
    'portfolio.automation.desc': 'Scénarios automatiques basés sur la présence, l\'heure et les habitudes',
    'portfolio.voice.title': 'Contrôle Vocal',
    'portfolio.voice.desc': 'Intégration Alexa et Google Assistant pour un contrôle mains libres',
    
    // Quote Page
    'quote.page.title': 'Demande de Devis',
    'quote.page.subtitle': 'Obtenez une estimation personnalisée pour votre projet',
    'quote.form.services': 'Services souhaités',
    'quote.form.project': 'Description du projet',
    'quote.form.project.placeholder': 'Décrivez votre projet de domotique, le nombre de pièces, les équipements existants...',
    'quote.form.files': 'Documents (plans, photos)',
    'quote.form.estimate': 'Estimation',
    'quote.form.contact_info': 'Informations de contact',
    'quote.form.name': 'Nom complet',
    'quote.form.email': 'Email',
    'quote.form.phone': 'Téléphone',
    
    // Contact Page
    'contact.page.title': 'Contactez-nous',
    'contact.page.subtitle': 'Nous sommes là pour répondre à vos questions',
    'contact.form.subject': 'Objet de votre demande',
    'contact.form.message': 'Votre message',
    'contact.form.message.placeholder': 'Décrivez votre demande ou vos questions...',
    'contact.info.title': 'Informations de contact',
    'contact.info.email': 'contact@smartdomotics.fr',
    'contact.info.phone': '+33 1 23 45 67 89',
    'contact.info.address': '123 Rue de la Technologie, 75001 Paris',
    'contact.info.hours': 'Lun-Ven: 9h-18h, Sam: 9h-12h',
    
    // FAQ Page
    'faq.page.title': 'Questions Fréquentes',
    'faq.page.subtitle': 'Trouvez les réponses à vos questions sur la domotique',
    'faq.q1.question': 'Home Assistant fonctionne-t-il sans Internet ?',
    'faq.q1.answer': 'Oui, Home Assistant fonctionne entièrement en local. Seules certaines intégrations cloud nécessitent Internet.',
    'faq.q2.question': 'Quels appareils sont compatibles ?',
    'faq.q2.answer': 'Plus de 3000 intégrations disponibles : Philips Hue, Sonos, Nest, Ring, et tous les protocoles Zigbee/Z-Wave.',
    'faq.q3.question': 'Combien coûte une installation complète ?',
    'faq.q3.answer': 'Entre 300 $ CAD et 1500 $ CAD selon la complexité. Nos packs incluent installation, configuration et maintenance.',
    'faq.q4.question': 'Combien de temps pour l\'installation ?',
    'faq.q4.answer': 'Installation de base : 2-4h. Configuration complète avec nombreux appareils : 1-2 jours.',
    'faq.q5.question': 'Quel matériel faut-il ?',
    'faq.q5.answer': 'Un mini-PC (Raspberry Pi ou NUC) et éventuellement un hub Zigbee/Z-Wave selon vos appareils.',
    'faq.q6.question': 'Proposez-vous de la formation ?',
    'faq.q6.answer': 'Oui, formation incluse dans nos packs Avancé et Pro. Sessions personnalisées disponibles séparément.'
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
    'common.request_quote': 'Request Quote',
    'common.buy_now': 'Buy Now',
    'common.contact_us': 'Contact Us',
    'common.upload_file': 'Upload File',
    'common.send_message': 'Send Message',
    'common.calculate_price': 'Calculate Price',
    'common.features': 'Features',
    'common.included': 'Included',
    'theme.toggle': 'Toggle theme',
    
    // Services Page
    'services.page.title': 'Our Smart Home Services',
    'services.page.subtitle': 'Professional solutions for your intelligent home',
    'services.install.title': 'Installation & Configuration',
    'services.install.description': 'Complete Home Assistant installation on your local or cloud server. Basic configuration setup, user account creation and system security.',
    'services.install.features': 'Server installation • Network configuration • User accounts • SSL security',
    'services.devices.title': 'Device Configuration',
    'services.devices.description': 'Integration and configuration of all your connected devices: lighting, heating, security, multimedia. Communication optimization and functionality testing.',
    'services.devices.features': 'Zigbee/Z-Wave integration • WiFi setup • Functional testing • Network optimization',
    'services.dashboard.title': 'Custom Dashboards',
    'services.dashboard.description': 'Creation of intuitive and aesthetic user interfaces adapted to your needs. Responsive design for all your devices.',
    'services.dashboard.features': 'Custom design • Responsive interface • Custom widgets • Adaptive themes',
    'services.advice.title': 'Technology Consulting',
    'services.advice.description': 'Audit of your existing installation, compatible equipment recommendations and optimization advice for an efficient smart home.',
    'services.advice.features': 'Technical audit • Equipment recommendations • Buying guide • Evolution strategy',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.description': 'Remote technical support, regular updates, configuration backup and assistance in case of problems.',
    'services.maintenance.features': '24/7 Support • Automatic updates • Cloud backups • Remote diagnostics',
    
    // Packs Page
    'packs.page.title': 'Our Smart Home Packs',
    'packs.page.subtitle': 'Choose the solution that fits your needs',
    'packs.starter.title': 'Starter Pack',
    'packs.starter.price': 'CAD $299.00',
    'packs.starter.features': 'Up to 15 devices • Basic dashboard • Remote installation • Email support • 1 month maintenance',
    'packs.advanced.title': 'Advanced Pack',
    'packs.advanced.price': 'CAD $599.00',
    'packs.advanced.features': 'Up to 50 devices • Custom dashboards • On-site installation • Phone support • 6 months maintenance • Optimization advice',
    'packs.pro.title': 'Professional Pack',
    'packs.pro.price': 'CAD $999.00',
    'packs.pro.features': 'Unlimited devices • Custom design • User training • Priority support • 12 months maintenance • Complete audit',
    'packs.popular': 'Most Popular',
    
    // Portfolio Page
    'portfolio.page.title': 'Our Work',
    'portfolio.page.subtitle': 'Discover our smart home projects',
    'portfolio.dashboard.title': 'Modern Dashboard',
    'portfolio.dashboard.desc': 'Clean user interface with lighting, temperature and security control',
    'portfolio.lighting.title': 'Smart Lighting',
    'portfolio.lighting.desc': 'Automated lighting system with custom scenes and voice control',
    'portfolio.security.title': 'Connected Security',
    'portfolio.security.desc': 'Surveillance system with cameras, detectors and real-time notifications',
    'portfolio.climate.title': 'Climate Control',
    'portfolio.climate.desc': 'Smart heating and air conditioning management with energy savings',
    'portfolio.automation.title': 'Automations',
    'portfolio.automation.desc': 'Automatic scenarios based on presence, time and habits',
    'portfolio.voice.title': 'Voice Control',
    'portfolio.voice.desc': 'Alexa and Google Assistant integration for hands-free control',
    
    // Quote Page
    'quote.page.title': 'Request Quote',
    'quote.page.subtitle': 'Get a personalized estimate for your project',
    'quote.form.services': 'Desired services',
    'quote.form.project': 'Project description',
    'quote.form.project.placeholder': 'Describe your smart home project, number of rooms, existing equipment...',
    'quote.form.files': 'Documents (plans, photos)',
    'quote.form.estimate': 'Estimate',
    'quote.form.contact_info': 'Contact information',
    'quote.form.name': 'Full name',
    'quote.form.email': 'Email',
    'quote.form.phone': 'Phone',
    
    // Contact Page
    'contact.page.title': 'Contact Us',
    'contact.page.subtitle': 'We are here to answer your questions',
    'contact.form.subject': 'Subject of your request',
    'contact.form.message': 'Your message',
    'contact.form.message.placeholder': 'Describe your request or questions...',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'contact@smartdomotics.com',
    'contact.info.phone': '+1 234 567 8900',
    'contact.info.address': '123 Technology Street, New York, NY 10001',
    'contact.info.hours': 'Mon-Fri: 9AM-6PM, Sat: 9AM-12PM',
    
    // FAQ Page
    'faq.page.title': 'Frequently Asked Questions',
    'faq.page.subtitle': 'Find answers to your smart home questions',
    'faq.q1.question': 'Does Home Assistant work without Internet?',
    'faq.q1.answer': 'Yes, Home Assistant works completely locally. Only some cloud integrations require Internet.',
    'faq.q2.question': 'Which devices are compatible?',
    'faq.q2.answer': 'Over 3000 integrations available: Philips Hue, Sonos, Nest, Ring, and all Zigbee/Z-Wave protocols.',
    'faq.q3.question': 'How much does a complete installation cost?',
    'faq.q3.answer': 'Between CAD $300 and CAD $1500 depending on complexity. Our packs include installation, configuration and maintenance.',
    'faq.q4.question': 'How long does installation take?',
    'faq.q4.answer': 'Basic installation: 2-4h. Complete configuration with many devices: 1-2 days.',
    'faq.q5.question': 'What hardware is needed?',
    'faq.q5.answer': 'A mini-PC (Raspberry Pi or NUC) and possibly a Zigbee/Z-Wave hub depending on your devices.',
    'faq.q6.question': 'Do you provide training?',
    'faq.q6.answer': 'Yes, training included in our Advanced and Pro packs. Custom sessions available separately.'
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
    'common.request_quote': 'Solicitar Presupuesto',
    'common.buy_now': 'Comprar Ahora',
    'common.contact_us': 'Contactanos',
    'common.upload_file': 'Subir Archivo',
    'common.send_message': 'Enviar Mensaje',
    'common.calculate_price': 'Calcular Precio',
    'common.features': 'Características',
    'common.included': 'Incluido',
    'theme.toggle': 'Cambiar tema',
    
    // Services Page
    'services.page.title': 'Nuestros Servicios Domóticos',
    'services.page.subtitle': 'Soluciones profesionales para tu hogar inteligente',
    'services.install.title': 'Instalación y Configuración',
    'services.install.description': 'Instalación completa de Home Assistant en tu servidor local o en la nube. Configuración básica, creación de cuentas de usuario y seguridad del sistema.',
    'services.install.features': 'Instalación servidor • Configuración red • Cuentas usuario • Seguridad SSL',
    'services.devices.title': 'Configuración de Dispositivos',
    'services.devices.description': 'Integración y configuración de todos tus dispositivos conectados: iluminación, calefacción, seguridad, multimedia. Optimización de comunicaciones y pruebas de funcionamiento.',
    'services.devices.features': 'Integración Zigbee/Z-Wave • Configuración WiFi • Pruebas funcionales • Optimización red',
    'services.dashboard.title': 'Paneles Personalizados',
    'services.dashboard.description': 'Creación de interfaces de usuario intuitivas y estéticas adaptadas a tus necesidades. Diseño responsive para todos tus dispositivos.',
    'services.dashboard.features': 'Diseño a medida • Interfaz responsive • Widgets personalizados • Temas adaptativos',
    'services.advice.title': 'Consultoría Tecnológica',
    'services.advice.description': 'Auditoría de tu instalación existente, recomendaciones de equipos compatibles y consejos de optimización para un hogar inteligente eficiente.',
    'services.advice.features': 'Auditoría técnica • Recomendaciones equipos • Guía de compra • Estrategia evolución',
    'services.maintenance.title': 'Mantenimiento y Soporte',
    'services.maintenance.description': 'Soporte técnico remoto, actualizaciones regulares, respaldo de configuración y asistencia en caso de problemas.',
    'services.maintenance.features': 'Soporte 24/7 • Actualizaciones automáticas • Respaldos nube • Diagnóstico remoto',
    
    // Packs Page
    'packs.page.title': 'Nuestros Paquetes Domóticos',
    'packs.page.subtitle': 'Elige la solución que se adapte a tus necesidades',
    'packs.starter.title': 'Paquete Inicial',
    'packs.starter.price': 'CAD $299.00',
    'packs.starter.features': 'Hasta 15 dispositivos • Panel básico • Instalación remota • Soporte email • 1 mes mantenimiento',
    'packs.advanced.title': 'Paquete Avanzado',
    'packs.advanced.price': 'CAD $599.00',
    'packs.advanced.features': 'Hasta 50 dispositivos • Paneles personalizados • Instalación en sitio • Soporte telefónico • 6 meses mantenimiento • Consejos optimización',
    'packs.pro.title': 'Paquete Profesional',
    'packs.pro.price': 'CAD $999.00',
    'packs.pro.features': 'Dispositivos ilimitados • Diseño personalizado • Formación usuario • Soporte prioritario • 12 meses mantenimiento • Auditoría completa',
    'packs.popular': 'Más Popular',
    
    // Portfolio Page
    'portfolio.page.title': 'Nuestro Trabajo',
    'portfolio.page.subtitle': 'Descubre nuestros proyectos de hogares inteligentes',
    'portfolio.dashboard.title': 'Panel Moderno',
    'portfolio.dashboard.desc': 'Interfaz limpia con control de iluminación, temperatura y seguridad',
    'portfolio.lighting.title': 'Iluminación Inteligente',
    'portfolio.lighting.desc': 'Sistema de iluminación automatizado con escenas personalizadas y control por voz',
    'portfolio.security.title': 'Seguridad Conectada',
    'portfolio.security.desc': 'Sistema de vigilancia con cámaras, detectores y notificaciones en tiempo real',
    'portfolio.climate.title': 'Control Climático',
    'portfolio.climate.desc': 'Gestión inteligente de calefacción y aire acondicionado con ahorro energético',
    'portfolio.automation.title': 'Automatizaciones',
    'portfolio.automation.desc': 'Escenarios automáticos basados en presencia, hora y hábitos',
    'portfolio.voice.title': 'Control por Voz',
    'portfolio.voice.desc': 'Integración Alexa y Google Assistant para control manos libres',
    
    // Quote Page
    'quote.page.title': 'Solicitar Presupuesto',
    'quote.page.subtitle': 'Obtén una estimación personalizada para tu proyecto',
    'quote.form.services': 'Servicios deseados',
    'quote.form.project': 'Descripción del proyecto',
    'quote.form.project.placeholder': 'Describe tu proyecto domótico, número de habitaciones, equipos existentes...',
    'quote.form.files': 'Documentos (planos, fotos)',
    'quote.form.estimate': 'Estimación',
    'quote.form.contact_info': 'Información de contacto',
    'quote.form.name': 'Nombre completo',
    'quote.form.email': 'Email',
    'quote.form.phone': 'Teléfono',
    
    // Contact Page
    'contact.page.title': 'Contáctanos',
    'contact.page.subtitle': 'Estamos aquí para responder tus preguntas',
    'contact.form.subject': 'Asunto de tu solicitud',
    'contact.form.message': 'Tu mensaje',
    'contact.form.message.placeholder': 'Describe tu solicitud o preguntas...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'contacto@smartdomotics.es',
    'contact.info.phone': '+34 912 345 678',
    'contact.info.address': '123 Calle Tecnología, 28001 Madrid',
    'contact.info.hours': 'Lun-Vie: 9h-18h, Sáb: 9h-12h',
    
    // FAQ Page
    'faq.page.title': 'Preguntas Frecuentes',
    'faq.page.subtitle': 'Encuentra respuestas a tus preguntas sobre domótica',
    'faq.q1.question': '¿Home Assistant funciona sin Internet?',
    'faq.q1.answer': 'Sí, Home Assistant funciona completamente en local. Solo algunas integraciones en la nube requieren Internet.',
    'faq.q2.question': '¿Qué dispositivos son compatibles?',
    'faq.q2.answer': 'Más de 3000 integraciones disponibles: Philips Hue, Sonos, Nest, Ring, y todos los protocolos Zigbee/Z-Wave.',
    'faq.q3.question': '¿Cuánto cuesta una instalación completa?',
    'faq.q3.answer': 'Entre CAD $300 y CAD $1500 según la complejidad. Nuestros paquetes incluyen instalación, configuración y mantenimiento.',
    'faq.q4.question': '¿Cuánto tiempo toma la instalación?',
    'faq.q4.answer': 'Instalación básica: 2-4h. Configuración completa con muchos dispositivos: 1-2 días.',
    'faq.q5.question': '¿Qué hardware se necesita?',
    'faq.q5.answer': 'Un mini-PC (Raspberry Pi o NUC) y posiblemente un hub Zigbee/Z-Wave según tus dispositivos.',
    'faq.q6.question': '¿Proporcionan formación?',
    'faq.q6.answer': 'Sí, formación incluida en nuestros paquetes Avanzado y Profesional. Sesiones personalizadas disponibles por separado.'
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