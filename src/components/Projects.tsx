import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CloudOps Dashboard",
    description: "A comprehensive monitoring and management platform for multi-cloud infrastructure with real-time metrics, alerting, and automated scaling capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Prometheus"],
    github: "https://github.com",
    live: "https://demo.com",
    highlights: [
      "Real-time infrastructure monitoring",
      "Automated scaling and alerting",
      "Multi-cloud support (AWS, GCP, Azure)"
    ]
  },
  {
    title: "DevOps Toolkit",
    description: "Open-source collection of DevOps tools and scripts for automated deployment, monitoring, and infrastructure management across different environments.",
    image: "/api/placeholder/600/400", 
    technologies: ["Python", "Bash", "Ansible", "Terraform", "Kubernetes", "Git"],
    github: "https://github.com",
    live: null,
    highlights: [
      "Infrastructure as Code templates", 
      "Automated CI/CD pipeline scripts",
      "Container orchestration utilities"
    ]
  },
  {
    title: "Microservices Platform",
    description: "Scalable microservices architecture with service mesh, distributed tracing, and comprehensive logging for enterprise-grade applications.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Istio", "PostgreSQL", "Redis"],
    github: "https://github.com", 
    live: "https://demo.com",
    highlights: [
      "Service mesh implementation",
      "Distributed tracing with Jaeger", 
      "Auto-scaling and load balancing"
    ]
  },
  {
    title: "AI-Powered Log Analytics",
    description: "Machine learning platform for analyzing application logs, detecting anomalies, and predicting potential system failures before they occur.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana", "Docker", "FastAPI"],
    github: "https://github.com",
    live: "https://demo.com", 
    highlights: [
      "Anomaly detection algorithms",
      "Predictive failure analysis",
      "Real-time log processing"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[hsl(220,27%,12%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-glow overflow-hidden">
              <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-glow">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-primary font-semibold">Project Preview</p>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-primary/20 text-muted-foreground hover:bg-primary/10 transition-smooth">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild className="flex-1 border-primary/20 hover:bg-primary/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" asChild className="flex-1 bg-gradient-primary hover:shadow-accent">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;