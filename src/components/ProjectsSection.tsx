import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Droplets, 
  Shield, 
  Globe,
  Palette,
  Music
} from 'lucide-react';

export const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const industrialProjects = [
    {
      title: language === 'en' ? 'Tiszaújváros Refinery – Biobarrier' : 'Tiszaújváros finomító - biobarrier',
      description: language === 'en' 
        ? 'Installation of an aerobic and anaerobic pilot-scale biological hydrocarbon degradation system in a contaminated area.'
        : 'Aerob és anaerob kísérleti biológiai szénhidrogénbontó technológia injektálásának kiépítése szennyezett területen.',
      icon: Droplets,
      tags: ['Environmental', 'Biotech']
    },
    {
      title: language === 'en' ? 'Gárdony – MOL Pipeline Incident' : 'Gárdony - MOL termékvezeték-sérülés',
      description: language === 'en'
        ? 'Design, deployment, and operation of an automated, explosion-proof subsurface contamination extraction system.'
        : 'Automata robbanásbiztos földalatti szennyezéskitermelő rendszer tervezése, telepítése és üzemeltetése',
      icon: Shield,
      tags: ['Automation', 'Safety']
    },
    {
      title: language === 'en' ? 'Hajduhadház – Hungarian Defence Training Base' : 'Hajdúhadház HM kiképzőbázis',
      description: language === 'en'
        ? 'Full design and implementation of an automated pump-and-treat groundwater remediation system.'
        : 'Automata talajvíz-tisztító pump and treat rendszer teljes körű tervezése és kivitelezése.',
      icon: Building2,
      tags: ['Water Treatment', 'Automation']
    },
    {
      title: language === 'en' ? 'Győr – Serfőződombi Area' : 'Győr – Serfőződombi dűlő',
      description: language === 'en'
        ? 'Aerobic biological remediation system with subsurface air and nutrient injection.'
        : 'Aerob biológiai kármentesítő rendszer talajszondás levegő és tápanyag injektálás.',
      icon: Droplets,
      tags: ['Environmental', 'Remediation']
    }
  ];

  const specialProjects = [
    {
      title: language === 'en' ? 'GEAC – Website Development' : 'Gödöllői Egyetemi Atlétikai Club – Weboldalfejlesztés',
      description: language === 'en'
        ? 'Design and implementation of a functional, clean web identity.'
        : 'Funkcionális és letisztult webes arculat kialakítása.',
      icon: Globe,
      tags: ['Web Development', 'Design']
    },
    {
      title: language === 'en' ? 'District XI Municipality – Art and Tech Center' : '11. kerület Önkormányzata – Art and Tech Center',
      description: language === 'en'
        ? 'Engineering concept and technical implementation for an innovative community space.'
        : 'Innovatív közösségi tér műszaki koncepcióinak tervezése és műszaki megvalósítása.',
      icon: Palette,
      tags: ['Innovation', 'Community']
    },
    {
      title: language === 'en' ? 'Space Exhibition – Interactive Stand' : 'Űrkiállítás – Interaktív stand',
      description: language === 'en'
        ? 'Development of a custom digital information system to enhance visitor experience.'
        : 'Látogatói élményt fokozó, testre szabott digitális információs rendszer fejlesztése.',
      icon: Globe,
      tags: ['Interactive', 'Exhibition']
    },
    {
      title: language === 'en' ? 'Sziget Festival' : 'Sziget Fesztivál',
      description: language === 'en'
        ? 'Hardware and software implementation of immersive experience technology elements.'
        : 'Élménytechnológiai elemek hardveres és szoftveres kivitelezése.',
      icon: Music,
      tags: ['Entertainment', 'Technology']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('projects.title')}
            </h2>
          </div>

          {/* Industrial Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              {t('projects.industrial')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {industrialProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                          <IconComponent className="text-primary-foreground" size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Special Projects */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              {t('projects.special')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specialProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                          <IconComponent className="text-primary-foreground" size={20} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};