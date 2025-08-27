import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { 
  Leaf, 
  Settings, 
  Wrench, 
  Shield, 
  Monitor,
  Lightbulb
} from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Leaf,
      title: t('services.env.title'),
      description: t('services.env.desc'),
      color: 'text-accent'
    },
    {
      icon: Settings,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      color: 'text-industrial'
    },
    {
      icon: Wrench,
      title: t('services.engineering.title'),
      description: t('services.engineering.desc'),
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      color: 'text-muted-foreground'
    },
    {
      icon: Monitor,
      title: t('services.digital.title'),
      description: t('services.digital.desc'),
      color: 'text-primary-glow'
    },
    {
      icon: Lightbulb,
      title: t('services.special.title'),
      description: t('services.special.desc'),
      color: 'text-accent'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-elevated transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                        <IconComponent className="text-primary-foreground" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};