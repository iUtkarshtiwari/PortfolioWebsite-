
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">
              Utkarsh<span className="text-tech-light">.</span>
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="#home" 
              className="text-tech-light/70 hover:text-tech-light text-sm transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-tech-light/70 hover:text-tech-light text-sm transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-tech-light/70 hover:text-tech-light text-sm transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-tech-light/70 hover:text-tech-light text-sm transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/iUtkarshtiwari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-light/70 hover:text-tech-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/utkarsh-tiwari-b6544624a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-light/70 hover:text-tech-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:utkarshtiwari102005@gmail.com"
              className="text-tech-light/70 hover:text-tech-light transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-tech-light/50 text-sm">
          <p>© {currentYear} Utkarsh Tiwari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
