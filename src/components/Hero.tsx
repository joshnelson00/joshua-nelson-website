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
              Site Reliability Engineer & DevOps Specialist
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.4s' }}>
              Crafting scalable solutions and robust infrastructure with passion for innovation and solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Button asChild variant="outline" size="lg" className="px-4 bg-[#0b0e15] border border-gray-400 text-white hover:bg-[#0b0e15] hover:text-white hover:border-gray-400 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <a href="https://github.com/joshnelson00" className="flex items-center">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-[#0A66C2] border border-[#0A66C2] text-white hover:bg-[#004182] hover:text-white hover:border-[#004182] hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 ease-in-out">
              <a href="https://www.linkedin.com/in/joshnelson00/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
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