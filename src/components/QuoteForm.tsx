import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Calculator } from 'lucide-react';

interface QuoteFormProps {
  onEstimateChange: (estimate: number) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onEstimateChange }) => {
  const { t, language } = useLanguage();
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    files: null as FileList | null
  });

  const services = [
    { id: 'installation', name: t('services.installation'), price: 200 },
    { id: 'devices', name: t('services.devices'), price: 150 },
    { id: 'dashboard', name: t('services.dashboard'), price: 300 },
    { id: 'advice', name: t('services.advice'), price: 100 },
    { id: 'maintenance', name: t('services.maintenance'), price: 50 }
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const newServices = checked 
      ? [...selectedServices, serviceId]
      : selectedServices.filter(id => id !== serviceId);
    
    setSelectedServices(newServices);
    
    const total = newServices.reduce((sum, id) => {
      const service = services.find(s => s.id === id);
      return sum + (service?.price || 0);
    }, 0);
    
    onEstimateChange(total);
  };

  const calculateEstimate = () => {
    return selectedServices.reduce((sum, id) => {
      const service = services.find(s => s.id === id);
      return sum + (service?.price || 0);
    }, 0);
  };

  const formatPrice = (price: number) => {
    const locale = language === 'fr-FR' ? 'fr-CA' : 'en-CA';
    const formatted = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
    return language === 'fr-FR' ? `${formatted} $ CAD` : `CAD $${formatted}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Services Selection */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="tech-card">
          <CardHeader>
            <CardTitle>{t('quote.form.services')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                />
                <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <span>{service.name}</span>
                    <span className="text-primary font-medium">{formatPrice(service.price)}</span>
                  </div>
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="tech-card">
          <CardHeader>
            <CardTitle>{t('quote.form.project')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder={t('quote.form.project.placeholder')}
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="tech-card">
          <CardHeader>
            <CardTitle>{t('quote.form.files')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {t('common.upload_file')}
              </p>
              <Input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, files: e.target.files })}
                className="max-w-xs mx-auto"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="tech-card">
          <CardHeader>
            <CardTitle>{t('quote.form.contact_info')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">{t('quote.form.name')}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">{t('quote.form.email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">{t('quote.form.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+33 1 23 45 67 89"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estimate Summary */}
      <div className="space-y-6">
        <Card className="tech-card sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              {t('quote.form.estimate')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedServices.length > 0 ? (
              <>
                <div className="space-y-2">
                  {selectedServices.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    return service ? (
                      <div key={serviceId} className="flex justify-between text-sm">
                        <span>{service.name}</span>
                        <span>{formatPrice(service.price)}</span>
                      </div>
                    ) : null;
                  })}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(calculateEstimate())}</span>
                  </div>
                </div>
                <Button variant="hero" className="w-full mt-6">
                  {t('common.request_quote')}
                </Button>
              </>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Select services to see estimate
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteForm;