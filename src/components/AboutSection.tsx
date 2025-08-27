import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Lightbulb, Target, Users } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {t('about.content')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.vision')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Cutting-edge technologies combined with practical engineering solutions
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Precision</h3>
              <p className="text-muted-foreground">
                Engineering excellence with attention to every technical detail
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together to maximize value in every project
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};