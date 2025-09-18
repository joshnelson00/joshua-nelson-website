import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead DevOps initiatives for microservices architecture, implementing CI/CD pipelines and managing cloud infrastructure at scale.",
    technologies: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Python"],
    achievements: [
      "Reduced deployment time by 80% through automated CI/CD pipelines",
      "Managed infrastructure serving 1M+ daily active users",
      "Led migration from monolith to microservices architecture"
    ]
  },
  {
    title: "Full Stack Software Engineer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications using modern technologies, collaborated with product teams to deliver user-centric solutions.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
    achievements: [
      "Built scalable web applications handling 100k+ concurrent users",
      "Implemented real-time features using WebSocket connections",
      "Reduced API response time by 60% through optimization"
    ]
  },
  {
    title: "Software Developer",
    company: "Innovation Labs",
    location: "Remote",
    period: "2018 - 2020",
    description: "Developed enterprise software solutions and maintained legacy systems while implementing modern development practices.",
    technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Git", "Linux"],
    achievements: [
      "Modernized legacy codebase improving performance by 40%",
      "Introduced automated testing increasing code coverage to 85%",
      "Collaborated with cross-functional teams on product roadmap"
    ]
  }
];

const Experience = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
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
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-glow group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="lg:flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
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
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-2">•</span>
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