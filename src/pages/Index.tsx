// src/pages/Index.tsx
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Hyperspeed, { hyperspeedPresets } from "@/components/Hyperspeed";

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      {isMounted && <Hyperspeed effectOptions={hyperspeedPresets.one} />}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="relative z-10 bg-background">
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;