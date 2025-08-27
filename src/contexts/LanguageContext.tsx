import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Engineering Excellence in Complex Solutions',
    'hero.subtitle': 'Enwiring Kft. is an engineering company delivering complex industrial, environmental, and technological solutions. Our broad technical expertise enables the seamless integration of multiple engineering disciplines.',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'About Enwiring',
    'about.content': 'Enwiring Ltd. is an engineering and project delivery company specialized in the design, development, and execution of complex industrial, environmental, and technological systems. Our experienced professionals combine cutting-edge technologies with a practical approach to deliver projects that are efficient, sustainable, and customized.',
    'about.vision': 'Our work is driven by collaboration, engineering precision, and a commitment to maximizing the value of every project – both technologically and strategically.',
    
    // Services
    'services.title': 'Our Services',
    'services.env.title': 'Environmental Technology Design',
    'services.env.desc': 'Aerobic and anaerobic remediation systems, pump-and-treat technologies, and automated contamination treatment solutions.',
    'services.automation.title': 'Industrial Automation',
    'services.automation.desc': 'Design, deployment, and commissioning of custom control and monitoring systems, including remote supervision capabilities.',
    'services.engineering.title': 'Engineering Design',
    'services.engineering.desc': 'Design of complex electrical and mechanical systems, as well as explosion-proof technologies for industrial applications.',
    'services.maintenance.title': 'Maintenance & Operation',
    'services.maintenance.desc': 'Regular servicing, fault management, and optimization of groundwater treatment systems and specialized technologies.',
    'services.digital.title': 'Digital Solutions',
    'services.digital.desc': 'Development of tailored websites and interactive applications, with a focus on technical and educational content.',
    'services.special.title': 'Special Projects',
    'services.special.desc': 'Design and implementation of custom installations, interactive exhibition tools, and experience-driven technologies.',
    
    // Projects
    'projects.title': 'Selected References',
    'projects.industrial': 'Industrial & Environmental',
    'projects.special': 'Special Projects',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Interested in working with us or have questions about your project? Get in touch – we are happy to help you find the best technical solution.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
  },
  hu: {
    // Navigation
    'nav.about': 'Bemutatkozás',
    'nav.services': 'Szolgáltatások',
    'nav.projects': 'Referenciák',
    'nav.contact': 'Kapcsolat',
    
    // Hero
    'hero.title': 'Mérnöki kiválóság komplex megoldásokban',
    'hero.subtitle': 'Az Enwiring Kft. mérnöki és kivitelező vállalat, amely komplex ipari, környezetvédelmi és technológiai megoldások tervezésével, fejlesztésével és megvalósításával foglalkozik.',
    'hero.cta': 'Tudjon meg többet',
    
    // About
    'about.title': 'Az Enwiring bemutatkozása',
    'about.content': 'Cégünk magyar tulajdonú mérnöki és kivitelező vállalat, amely komplex ipari, környezetvédelmi és technológiai megoldások tervezésére, fejlesztésére és kivitelezésére specializálódott. Tapasztalt szakértőink a legújabb technológiákat ötvözik gyakorlati megközelítéssel.',
    'about.vision': 'Munkánk alapja az együttműködés, a mérnöki gondolkodás és az a törekvés, hogy minden projektből a lehető legtöbbet hozzuk ki – technológiailag és üzletileg egyaránt.',
    
    // Services
    'services.title': 'Szolgáltatásaink',  
    'services.env.title': 'Környezetvédelmi technológiák',
    'services.env.desc': 'Aerob és anaerob bontótechnológiák, pump and treat rendszerek, automata szennyezéskezelő rendszerek.',
    'services.automation.title': 'Ipari automatizálás',
    'services.automation.desc': 'Egyedi vezérlő- és monitoring rendszerek fejlesztése, üzembe helyezése, valamint távfelügyeleti megoldások kiépítése.',
    'services.engineering.title': 'Műszaki tervezés',
    'services.engineering.desc': 'Komplex villamos- és gépészeti rendszerek, robbanásbiztos technológiák tervezése ipari alkalmazásokhoz.',
    'services.maintenance.title': 'Karbantartás és üzemeltetés',
    'services.maintenance.desc': 'Talajvíztisztító rendszerek, biofilterek, gázutóégetők, speciális ipari technológiák rendszeres szervizelése.',
    'services.digital.title': 'Digitális megoldások',
    'services.digital.desc': 'Egyedi arculattal rendelkező webes megjelenések és interaktív alkalmazások fejlesztése.',
    'services.special.title': 'Speciális projektek',
    'services.special.desc': 'Egyedi installációk, interaktív kiállítási eszközök, fesztivál- és élményelemek tervezése és kivitelezése.',
    
    // Projects
    'projects.title': 'Referenciamunkáink',
    'projects.industrial': 'Ipari és környezetvédelmi',
    'projects.special': 'Különleges projektek',
    
    // Contact
    'contact.title': 'Kapcsolat',
    'contact.subtitle': 'Szeretne velünk együttműködni, vagy kérdése van projektje kapcsán? Vegye fel velünk a kapcsolatot – szívesen segítünk megtalálni a legjobb műszaki megoldást.',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefon',
    'contact.linkedin': 'LinkedIn',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};