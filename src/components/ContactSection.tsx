import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ContactSection = ({ scrollToSection }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sathvik2210@gmail.com',
      href: 'mailto:sathvik2210@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9059517456',
      href: 'tel:+919059517456'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Sathvik2210',
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sathvik22/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to collaborate on innovative AI projects or discuss research opportunities? 
            Let's connect and explore the possibilities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-6">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  // You can add resume download functionality here
                  window.open('/Nagula Sai Sathvik.pdf', '_blank');
                }}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you're looking for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Machine Learning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Applied AI and Robotics</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Data Science</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Generative AI</span>
              </li>
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              onClick={() => window.open('mailto:sathvik2210@gmail.com', '_blank')}
            >
              <Mail size={20} className="mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
