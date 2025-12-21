import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Web Infrastructure Engineer",
    company: "KCMusicStudio",
    location: "Kansas City, MO",
    period: "May 2025 - July 2025",
    description:
      "Led infrastructure upgrades and migrations for a live e-commerce platform and associated WordPress sites, ensuring stability, performance, and security.",
    technologies: [ "Linux", "Backups", "Staging Environments", "PHP 8.2", "WordPress 6.6", "WooCommerce"],
    achievements: [
      "Upgraded PHP 8.2 / WordPress 6.6 with < 1 hour downtime and zero data loss for 100+ active users",
      "Deployed staging environments across 3 WordPress sites, reducing production deployment issues by 90%",
      "Implemented daily offsite backups with 30-day retention and tested restore procedures for 100% recovery success"
    ]
  },
  {
    title: "President",
    company: "Canyon Artificial Intelligence Research",
    location: "Phoenix, AZ",
    period: "April 2025 - Present",
    description:
      "Oversaw organizational growth, research project launches, and strategic planning for a university AI research group.",
    technologies: ["Leadership", "AI Research", "Strategic Planning", "Agile Workflows"],
    achievements: [
      "Facilitated monthly standups and coordinated workflows across multiple research projects",
      "Led strategic planning driving a 135% membership increase (20 → 47 members)",
      "Launched 5 new research project initiatives expanding exploration and technical learning opportunities"
    ]
  },
  {
    title: "Research Intern Project Lead",
    company: "Canyon Artificial Intelligence Research",
    location: "Phoenix, AZ",
    period: "Oct 2024 - April 2025",
    description:
      "Led a team of engineers developing AI-powered object detection solutions and feasibility studies for edge deployment.",
    technologies: ["Computer Vision", "Python", "ESP-32", "Agile", ],
    achievements: [
      "Implemented YOLO v4 object detection to recognize hand gestures at 25 ft distance",
      "Analyzed feasibility of object detection on ESP-32 with low-memory optimization",
      "Led a cross-functional team of 4 engineers with bi-weekly standups and workflow optimization"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: '#0b0e15' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through innovative technologies and challenging projects that shaped my expertise
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/30 border-2 border-primary/30 hover:bg-card/50 hover:border-primary/50 transition-smooth shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="lg:flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-purple-400 transition-smooth">
                      {exp.title}
                    </h3>
                    <p className="text-xl font-semibold text-foreground mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-accent">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-primary/10 transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;