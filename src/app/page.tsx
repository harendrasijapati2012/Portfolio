// src/app/page.tsx
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}