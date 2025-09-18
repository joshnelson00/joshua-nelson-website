import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    gpa: "3.9/4.0",
    specialization: "Distributed Systems & Cloud Computing",
    coursework: [
      "Advanced Database Systems",
      "Distributed Computing",
      "Machine Learning",
      "Software Engineering",
      "Cloud Infrastructure"
    ],
    achievements: [
      "Dean's List - 4 consecutive semesters",
      "Graduate Research Assistant",
      "Published paper on distributed system optimization"
    ]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of Texas at Austin",
    location: "Austin, TX", 
    period: "2012 - 2016",
    gpa: "3.7/4.0",
    specialization: "Software Architecture & Development",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Design Patterns",
      "Agile Development"
    ],
    achievements: [
      "Summa Cum Laude graduate",
      "Computer Science Honor Society",
      "ACM Programming Competition - Regional Finalist"
    ]
  }
];

const additionalCertifications = [
  {
    title: "Certified Jenkins Engineer",
    issuer: "CloudBees",
    date: "2023"
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2022"
  },
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    date: "2021"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning in cutting-edge technologies
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-glow group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="lg:flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
                          {edu.degree}
                        </h3>
                        <p className="text-xl font-semibold text-foreground mb-2">
                          {edu.school}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            GPA: {edu.gpa}
                          </Badge>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {edu.specialization}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Relevant Coursework:</h4>
                    <ul className="space-y-2">
                      {edu.coursework.map((course, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-accent">•</span>
                          <span className="text-muted-foreground">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Additional Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalCertifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-smooth shadow-card hover:shadow-accent group text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-smooth">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {cert.date}
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

export default Education;