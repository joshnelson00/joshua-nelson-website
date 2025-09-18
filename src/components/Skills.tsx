import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Monitor, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Bash", "SQL"]
  },
  {
    icon: Database,
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Heroku", "Vercel"]
  },
  {
    icon: Settings,
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions"]
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "DataDog", "New Relic", "ELK Stack", "Jaeger"]
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    skills: ["Git", "VS Code", "Linux", "Nginx", "Apache", "Postman"]
  }
];

const frameworks = [
  "React", "Node.js", "Express", "Next.js", "Spring Boot", "FastAPI", 
  "Django", "Vue.js", "Tailwind CSS", "Bootstrap"
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2022"
  },
  {
    name: "Google Cloud Professional DevOps Engineer",
    issuer: "Google Cloud",
    year: "2022"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2021"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
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
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-glow group">
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

        {/* Frameworks Section */}
        <div className="mb-16">
          <Card className="bg-card/50 border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-center flex items-center justify-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {frameworks.map((framework, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/20 text-muted-foreground hover:bg-primary/10 hover:border-primary/40 transition-smooth cursor-default text-sm py-2 px-4"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-accent group">
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