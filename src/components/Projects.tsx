import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Full Stack Web App",
    description: "A full functional RAID attribute manager for project managers looking to stay organized and efficient.",
    image: "/images/WebAppSS.png",
    technologies: ["Python", "Django", "Docker", "AWS"],
    github: "https://github.com/joshnelson00/raidlogix-app",
    live: null,
    highlights: [
      "Gathered user stories and requirements", 
      "Autoscaling via AWS ELB (up to 1000 concurrent users)",
    ]
  },
  {
    title: "AI Leetcode Discord Bot",
    description: "Discord bot for servers that serve real leetcode questions and generate new ones on request.",
    image: "/images/DiscordBotSS.png", 
    technologies: ["Python", "Leetcode API", "Redis", "Ollama"],
    github: "https://github.com/joshnelson00/dsa-discord-bot",
    live: null,
    highlights: [
      "Utilized Leetcode API to fetch real questions", 
      "Generated new questions using Kaggle Leetcode Question Dataset",
      "Utilized Redis for caching and rate limiting"
    ]
  },
  {
    title: "AI LinkedIn Job Scout",
    description: "Job and resumé comparison tool for job seekers looking to find the best job opportunities aligned with their resumé.",
    image: "/images/ResumeScoutSS.png",
    technologies: ["Golang", "Redis", "Ollama", "Scrapingdog API"],
    github: "https://github.com/joshnelson00/linkedin-job-scout", 
    live: null,
    highlights: [
      "Concurrent job description processing with Goroutines",
      "Implemented 3rd party API to address LinkedIn Scraping policies", 
      "Implemented CRON job to send SMTP email with relevant job/resumé matches"
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16" style={{ backgroundColor: '#0b0e15' }}>
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
          {/* Enhanced vignette/shader effects - adjusted for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[hsl(220,31%,6%)] via-[hsl(220,31%,6%)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[hsl(220,31%,6%)] via-[hsl(220,31%,6%)] to-transparent z-10 pointer-events-none"></div>
          
          {/* Additional inner vignette for shader effect - mobile optimized */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-transparent via-black/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-4 md:right-8 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-transparent via-black/10 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel 
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-2">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-2 basis-full sm:basis-[85%] md:basis-[70%] lg:basis-[60%]">
                  <Card className="group bg-card/30 border-2 border-primary/30 hover:bg-card/50 hover:border-primary/50 transition-smooth shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 overflow-hidden h-full mx-0 md:mx-0">
                    <div className="aspect-video relative overflow-hidden bg-muted/20 md:aspect-video" style={{ aspectRatio: '16/10' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
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
                      
                      <div className="min-h-[4.5rem]">
                        <h4 className="text-xs font-semibold text-primary mb-1">Key Features:</h4>
                        <ul className="space-y-0.5">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-1 text-xs">
                              <span className="text-accent text-xs">•</span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-primary/20 text-muted-foreground hover:bg-primary/10 transition-smooth">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs px-2 py-1 border-primary/20 text-muted-foreground">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" asChild className="flex-1 text-xs h-9 md:h-8 bg-[#0b0e15] border border-gray-400 text-white hover:bg-[#0b0e15] hover:text-white hover:border-gray-400 hover:translate-y-[-2px] transition-all duration-300 ease-in-out">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <Github className="mr-1 h-3 w-3 md:h-3 md:w-3" />
                            <span className="text-xs md:text-xs">Code</span>
                          </a>
                        </Button>
                        {project.live && (
                          <Button size="sm" asChild className="flex-1 text-xs h-9 md:h-8 bg-gradient-primary hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              <ExternalLink className="mr-1 h-3 w-3 md:h-3 md:w-3" />
                              <span className="text-xs md:text-xs">Demo</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 md:left-4 h-12 w-12 md:h-12 md:w-12 bg-card/90 border-2 border-primary/40 hover:bg-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-200 shadow-lg shadow-primary/10 hover:shadow-primary/20 z-20 rounded-full" />
            <CarouselNext className="right-1 md:right-4 h-12 w-12 md:h-12 md:w-12 bg-card/90 border-2 border-primary/40 hover:bg-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-200 shadow-lg shadow-primary/10 hover:shadow-primary/20 z-20 rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;