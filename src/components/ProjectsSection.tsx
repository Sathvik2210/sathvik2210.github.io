import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  year: string;
  researchRef?: string;
}

interface ProjectsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ProjectsSection = ({ scrollToSection }: ProjectsSectionProps) => {
  const projects: Project[] = [
    {
      title: "Early Detection of Diabetic Retinopathy using Computer Vision",
      description: "Developed a web application for early detection of diabetic retinopathy using SOTA CNN architectures. Fine-tuned and trained the SOTA yolov11 CNN archieture with mAP@0.50:0.95 of 59.0% for instance segmenting the diabetic retinopathic charecteristics from a fundus image. Implemented a cloud-based deployment of the YOLOv11 model on AWS EC2, utilizing S3 for storing model artifacts and enabling scalable inference",
      technologies: [ "Python", "pytorch", "flask","ultralytics","AWS EC2 and S3"],
      githubUrl: "https://github.com/Sathvik2210/Diabetic-Retinopathy",
      year: "2025",
     // researchRef: "In Press"
    },
    {
      title: "NAVBOT: Environment Awareness for Indian Roads",
      description: "Integrated advanced Deep Learning and Computer Vision models to detect drivable regions in complex on-road scenarios across India. Leveraged the YOLOv9 model, achieving a mAP of 53.4%, for robust segmentation in challenging real-world traffic conditions. Built a working prototype utilizing a cascaded CNN architecture and replicated real-world on-road scenarios within a custom indoor track for controlled testing and evaluation.",
      technologies: ["Python", "Pytorch", "tf-lite", "Keras","OpenCV","CCNN(Cascaded CNN"],
      githubUrl: "https://github.com/Sathvik2210/On-road-Environment-Awareness",
      year: "2024",
      //researchRef: "In Press"
    },
    {
      title: "Terrain Classification and Identification for Autonomous Vehicles",
      description: "Identified terrain types ahead of an unmanned vehicle to support better maneuvering in diverse operational conditions. Employed a state-of-the-art YOLOv8 model, achieving a mean Average Precision (mAP) of 46.2% for precise terrain detection.",
      technologies: ["Python", "Pytorch", "YOLOv8", "Keras","OpenCV"],
      githubUrl: "https://github.com/Sathvik2210/Off-Road-Terrain-Recognition",
      year: "2023",
      researchRef: "Off-Road Terrain Identification and Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions that bridge the gap between research and practical applications, 
            each project cross-referenced with my <span 
            className="cross-ref cursor-pointer"
            onClick={() => scrollToSection('research')}>
            published research
            </span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-primary transition-colors p-1">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.researchRef && (
                <div className="mb-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm">
                    <span className="font-medium">Related Research:</span>{" "}
                    <span 
                      className="cross-ref cursor-pointer"
                      onClick={() => scrollToSection('research')}
                    >
                      {project.researchRef}
                    </span>
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;