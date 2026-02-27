import { FileText, Calendar, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string[];
  abstract: string;
  doi: string;
  citations: number;
  projectRef?: string;
}

interface ResearchSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ResearchSection = ({ scrollToSection }: ResearchSectionProps) => {
  const publications: Publication[] = [
    {
      title: "Off-Road Terrain Identification and Analysis",
      journal: "Journal of Electrical Systems",
      year: "2023",
      authors: ["Nagula Sai Sathvik", "Dr. Mohit Lalit", "Dr. Mohit Angurala","Sai Varshith","Pudi Manikanta","Sai Praneeth"],
      abstract: "This work focuses on enhancing autonomous vehicle safety by enabling reliable terrain detection and identification. Using instance segmentation with the YOLOv8 deep learning architecture, the model was trained on an off-road terrain dataset to classify and segment various surfaces. The model achieved a maximum confidence of 0.92, demonstrating high accuracy in terrain recognition. The study highlights the potential for integrating such computer vision models with advanced sensors to develop robust hardware systems for real-world terrain adaptation in autonomous vehicles.",
      doi: "https://doi.org/10.52783/jes.636",
      citations: 0,
      projectRef: "Terrain Classification and Identification for Autonomous Vehicles"
    },
    {
      title: "A Reliable V2V Communication: An Autonomous Perspective",
      journal: "IEEE",
      year: "2023",
      authors: ["Nagula Sai Sathvik", "Dr. Mohit Lalit","Sai Varshith","Pudi Manikanta","Sai Praneeth"],
      abstract: "The focus of the future of automobiles is the accuracy of input data provided to the driver, or sporadically, the vehicle itself. The upcoming generation of cars will have autonomous capabilities that will let them take you places without requiring any contact from a person. This, however, raises concerns about how reliable the data sent to the vehicle for autonomous driving is and whether it would result in accidents. In this work, the V2V (vehicle-to-vehicle) format for data communication between cars is investigated. The data will be analyzed based on several variables, including the topography, traffic, travel time, vehicle communication latency, and package delivery ratio, which is a dire need for the autonomous system.",
      doi: "10.1109/ICAC3N60023.2023.10541590",
      citations: 0,
     },
    {
      title: "AI and ML in Vehicular Communication: A Cybersecurity Perspective",
      journal: "IEEE",
      year: "2022",
      authors: ["Nagula Sai Sathvik", "Dr. Suniti Dutt", "Sujay Singh","Nalin Sood","Nikhil Sai"],
      abstract: "The new era of vehicular communication is expecting a transition to the Internet of Vehicles (IoV) from traditional Vehicular Ad-hoc Networks and this paper briefly explores the reasons behind this shift. The vehicular networks in this era have been completely influenced directly or indirectly by Artificial Intelligence (AI) and Machine Learning (ML). This paper gives the knowledge of different types of vehicular networks, and the cybersecurity challenges faced by them. This paper not only focuses on the security challenges faced by vehicular networks but also provides information about the countermeasures to such security attacks, with special mention of the AI/ML techniques for security.",
      doi: "10.1109/ICCES54183.2022.9835791",
      citations: 9
    }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Peer-reviewed research contributions that advance the field and inform my 
            <span 
              className="cross-ref cursor-pointer"
              onClick={() => scrollToSection('projects')}
            >
               practical projects
            </span> and professional <span
              className="cross-ref cursor-pointer" 
              onClick={() => scrollToSection('experience')}
            >
              experience
            </span>.
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="portfolio-card p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{pub.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText size={16} />
                      <span className="text-sm">{pub.citations} citations</span>
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-foreground leading-tight">
                    {pub.title}
                  </h3>

                  <div className="mb-3">
                    <p className="text-primary font-medium">{pub.journal}</p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Users size={16} />
                      <span className="text-sm">{pub.authors.join(", ")}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {pub.projectRef && (
                    <div className="mb-4 p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                      <p className="text-sm">
                        <span className="font-medium">Related Project:</span>{" "}
                        <span 
                          className="cross-ref cursor-pointer"
                          onClick={() => scrollToSection('projects')}
                        >
                          {pub.projectRef}
                        </span>
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-all duration-300">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Paper
                      </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="hover:scale-105 transition-all duration-300">
                      <a href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`} 
                         target="_blank" rel="noopener noreferrer">
                        <FileText size={16} className="mr-2" />
                        Citations
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="lg:w-48 flex lg:flex-col gap-2 text-sm text-muted-foreground bg-secondary/30 p-4 rounded-lg">
                  <div>
                    <span className="font-medium">DOI:</span>
                    <br />
                    <span className="break-all">{pub.doi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;