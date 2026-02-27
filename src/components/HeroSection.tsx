import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiBackground from "@/assets/ai-neural-background.jpg";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center neural-background text-foreground relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 39, 66, 0.85), rgba(15, 23, 42, 0.9)), url(${aiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-6 section-fade-in relative z-10">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight px-2 py-1">
            Nagula Sai Sathvik
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            🧠 AI & ML Engineer • 🤖 AI Researcher 
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Exploring the frontiers of artificial intelligence through 
            cutting-edge <span className="cross-ref text-primary cursor-pointer hover:text-accent" 
            onClick={() => scrollToSection('projects')}>Projects</span> and 
            groundbreaking <span className="cross-ref text-primary cursor-pointer hover:text-accent"
            onClick={() => scrollToSection('research')}>Research publications</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="neural-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            onClick={() => scrollToSection('projects')}
          >
            Explore AI Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-3"
            onClick={() => scrollToSection('experience')}
          >
            Research Journey
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <a href="mailto:sathvik2210@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Mail size={24} />
          </a>
          <a href="https://github.com/Sathvik2210" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sathvik22/" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin size={24} />
          </a>
        </div>

        <div 
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          <ArrowDown size={32} className="mx-auto text-primary/60 hover:text-primary transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;