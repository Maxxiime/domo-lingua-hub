import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  const { t } = useLanguage();

  return (
    <div className="tech-card group p-6">
      <div className="mb-4">
        <div className="feature-icon">
          {icon}
        </div>
      </div>
      
      <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
        {title}
      </h3>
      
      <p className="mb-4 text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {href && (
        <Button 
          variant="ghost" 
          className="group/btn p-0 h-auto text-primary hover:text-primary-glow"
        >
          <span className="mr-2">{t('common.learn_more')}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;