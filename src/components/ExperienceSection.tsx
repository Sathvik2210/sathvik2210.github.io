import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";

interface Experience {
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  achievements?: string[];
  researchRefs?: string[];
}

interface ExperienceSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ExperienceSection = ({ scrollToSection }: ExperienceSectionProps) => {
  const experiences: Experience[] = [
    {
      type: 'work',
      title: 'AI Research Intern',
      organization: 'Indian Space Research Organisation',
      location: 'Bengaluru, India',
      period: 'Winter 2024',
      description: [
        'Fine-tuned Graph Neural Networks (GNN) on matlab for satellite health anomaly detection, achieving 96.7% accuracy on domain-specific time-series data.',
        'Implemented Multivariate LSTM model for predictive health monitoring of satellites, reaching 93.7% accuracy under real-world constraints.',
        'Deployed YOLOv9 for object segmentation into graphical satellite health metrics, attaining a 55.3% mAP at IoU 0.50:0.95, enhancing real-time detection capabilities.',
        'Integrated DETR (52.0% mAP) and YOLOv5 (51.4% mAP) with YOLOv9 using ensemble methods, enhancing reliability of anomaly detection and supporting automated analysis of satellite graphical imagery data.',
        'Collaborated with domain experts at ISRO-ISTRAC to design, validate, and operationalize ML pipelines, improving satellite health diagnostics and system automation.'
      ],
      skills: ['Linux', 'TensorFlow', 'Pytorch','GNN','Satellite Health Parameters','Real-time AI monitoring'],
      //achievements: ['Internal Innovation Award', '2 Publications'],
      //projectRef: 'Research Collaboration Network'
    },
    {
      type: 'education',
      title: 'B.E(Hons) In Computer Science and Engineering',
      organization: 'Chandigarh University',
      location: 'Chandigarh, India',
      period: '2021 - 2025',
      description: [
        'Specialized in Artificial Intelligence and Machine Learning',
      ],
      skills: ['Foundations of AIML','Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
      //achievements: ['Dean\'s List', 'Graduate Research Fellowship'],
      researchRefs: [
        'Off-Road Terrain Identification and Analysis',
        'A Reliable V2V Communication: An Autonomous Perspective',
        'AI and ML in Vehicular Communication: A Cybersecurity Perspective']
              
    }
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My journey through academia and industry, connecting theoretical knowledge with 
            practical applications in my <span 
              className="cross-ref cursor-pointer"
              onClick={() => scrollToSection('projects')}
            >
              projects
            </span> and <span
              className="cross-ref cursor-pointer"
              onClick={() => scrollToSection('research')}
            >
              research
            </span>.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <Briefcase size={16} className="text-primary-foreground" />
                  ) : (
                    <GraduationCap size={16} className="text-primary-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <div className="portfolio-card p-6">
                    <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                      <MapPin size={16} className="ml-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{exp.organization}</p>

                    <div className="space-y-3 mb-4">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ArrowRight size={16} className="text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">{desc}</p>
                        </div>
                      ))}
                    </div>

                    {exp.achievements && (
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <div className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <p key={i} className="text-sm text-muted-foreground">• {achievement}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.researchRefs && exp.researchRefs.length > 0 && (
                      <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <div className="space-y-1">
                          <div className="text-sm">
                            <span className="font-medium">Related Research:</span>
                            <div className="mt-1 space-y-1">
                              {exp.researchRefs.map((ref, i) => (
                                <div key={i} className="flex items-start gap-1">
                                  <span className="text-muted-foreground">•</span>
                                  <span 
                                    className="cross-ref cursor-pointer hover:text-primary"
                                    onClick={() => scrollToSection('research')}
                                  >
                                    {ref}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;