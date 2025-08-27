import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@enwiring.hu',
      href: 'mailto:info@enwiring.hu',
      color: 'text-accent'
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Enwiring Kft.',
      href: '#',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hungary',
      href: null,
      color: 'text-industrial'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 hover:scale-105 group cursor-pointer h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow duration-300">
                    <IconComponent className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                    {info.label}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {info.value}
                  </p>
                </Card>
              );

              return info.href ? (
                <a key={index} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'mailto:info@enwiring.hu'}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              {t('contact.email')} Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};