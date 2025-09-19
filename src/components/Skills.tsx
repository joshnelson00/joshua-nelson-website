import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Monitor, GitBranch, Layout } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Go", "Java", "Bash", "SQL", "C++"]
  },
  {
    icon: Database,
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "DynamoDB"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "Atlantic.net"]
  },
  {
    icon: Settings,
    title: "DevOps & Infrastructure",
    skills: ["Docker", "GitHub Actions", "Kubernetes", "Jenkins", ]
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    skills: ["Git", "VS Code", "Linux/Unix", "Nginx"]
  },
  {
    icon: Layout,
    title: "Frameworks",
    skills: ["Django", "FastAPI", "Flask"]
  }
];


const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2025"
  },
  {
    name: "Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#0b0e15' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full development and infrastructure lifecycle
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-card/30 border-2 border-primary/30 hover:bg-card/50 hover:border-primary/50 transition-smooth shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary/10 transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/30 border-2 border-accent/30 hover:bg-card/50 hover:border-accent/50 transition-smooth shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-accent font-medium">
                        {cert.year}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      Certified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;