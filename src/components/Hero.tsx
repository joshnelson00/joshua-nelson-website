import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Semi-transparent overlay without blur */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center animate-fadeIn">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slideUp">
              Joshua Nelson
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Software Engineer & DevOps Specialist
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.4s' }}>
              Crafting scalable solutions and robust infrastructure with passion for innovation and clean code
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-black border-2 border-white text-white hover:bg-black hover:text-white hover:border-white hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16 animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:joshua@example.com"
               className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce cursor-pointer hover:text-accent transition-smooth"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;