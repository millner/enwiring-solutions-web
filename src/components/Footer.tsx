import { Mail, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <img 
                  src="/lovable-uploads/abe7fbd9-991e-4807-9b61-8d256d89cdd3.png" 
                  alt="Enwiring Logo" 
                  className="h-10 w-auto filter brightness-0 invert"
                />
                <span className="ml-3 text-xl font-bold">Kft.</span>
              </div>
              <p className="text-primary-foreground/80">
                Engineering Excellence in Complex Solutions
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:info@enwiring.hu"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
                <span>info@enwiring.hu</span>
              </a>
              <a 
                href="#"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Enwiring Kft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};