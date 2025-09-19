import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0b0e15' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss new opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-card/30 border-2 border-primary/30 hover:bg-card/50 hover:border-primary/50 transition-smooth shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:joshua.nelson@email.com" 
                         className="text-muted-foreground hover:text-primary transition-smooth">
                        joshua.nelson@email.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a href="tel:+1-555-123-4567" 
                         className="text-muted-foreground hover:text-primary transition-smooth">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                      <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Connect Online</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/joshuanelson" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-smooth group">
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a href="https://linkedin.com/in/joshuanelson" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-smooth group">
                      <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-card/30 border-2 border-accent/30 hover:bg-card/50 hover:border-accent/50 transition-smooth shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Ready to Work Together?</h3>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in discussing new opportunities, whether it's a 
                    full-time position, consulting project, or collaboration on innovative solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                      <h4 className="font-semibold text-primary mb-2">What I'm Looking For:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Senior DevOps/Infrastructure roles</li>
                        <li>• Full-stack development opportunities</li>
                        <li>• Cloud architecture consulting</li>
                        <li>• Open-source collaborations</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">Available For:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Full-time positions</li>
                        <li>• Contract/consulting work</li>
                        <li>• Technical interviews</li>
                        <li>• Mentoring sessions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                      <a href="mailto:joshua.nelson@email.com?subject=Let's work together!">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;