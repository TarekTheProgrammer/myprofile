import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Education } from '@/components/sections/education';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Certificates } from '@/components/sections/certificates';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}
