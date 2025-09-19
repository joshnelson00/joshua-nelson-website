import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "CloudOps Dashboard",
    description: "A comprehensive monitoring and management platform for multi-cloud infrastructure with real-time metrics, alerting, and automated scaling capabilities.",
    image: "/images/WebAppSS.png",
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
    <section id="projects" className="py-12 md:py-16 bg-[hsl(220,27%,12%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced vignette/shader effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(220,27%,12%)] via-[hsl(220,27%,12%)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(220,27%,12%)] via-[hsl(220,27%,12%)] to-transparent z-10 pointer-events-none"></div>
          
          {/* Additional inner vignette for shader effect */}
          <div className="absolute left-8 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-8 top-0 bottom-0 w-20 bg-gradient-to-l from-transparent via-black/10 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel 
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-2 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-glow overflow-hidden h-full">
                    <div className="aspect-video relative overflow-hidden bg-muted/20" style={{ aspectRatio: '16/10' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain scale-90"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-primary">
                              <div class="text-center">
                                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                                  <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                </div>
                                <p class="text-primary font-medium text-sm">Project Image</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-3 pt-0">
                      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-primary mb-1">Key Features:</h4>
                        <ul className="space-y-0.5">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-1 text-xs">
                              <span className="text-accent text-xs">•</span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs px-2 py-0 border-primary/20 text-muted-foreground hover:bg-primary/10 transition-smooth">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs px-2 py-0 border-primary/20 text-muted-foreground">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" asChild className="flex-1 text-xs h-8 border-primary/20 hover:bg-primary/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                        {project.live && (
                          <Button size="sm" asChild className="flex-1 text-xs h-8 bg-gradient-primary hover:shadow-accent">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 bg-card/80 border-primary/20 hover:bg-primary/10" />
            <CarouselNext className="right-2 h-8 w-8 bg-card/80 border-primary/20 hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;