import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingNavigation from "@/components/FloatingNavigation";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Intersection Observer for section tracking
    const observers = new Map();
    const sections = ['hero', 'projects', 'research', 'experience', 'contact'];
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    };

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        }, observerOptions);

        observer.observe(element);
        observers.set(sectionId, observer);
      }
    });

    // Fade in sections on scroll
    const fadeElements = document.querySelectorAll('.section-fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    return () => {
      observers.forEach(observer => observer.disconnect());
      fadeObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection scrollToSection={scrollToSection} />
      <ProjectsSection scrollToSection={scrollToSection} />
      <ResearchSection scrollToSection={scrollToSection} />
      <ExperienceSection scrollToSection={scrollToSection} />
      <ContactSection scrollToSection={scrollToSection} />
      <ScrollToTop />
      <FloatingNavigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg mb-4">Ready to collaborate on groundbreaking research?</p>
          <p className="text-muted-foreground">
            © 2025 Nagula Sai Sathvik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;