import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Leadership } from './components/sections/Leadership';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CaseStudyModal } from './components/common/CaseStudyModal';
import { ResumeModal } from './components/common/ResumeModal';
import type { ProjectData } from './types/portfolio';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  const handleSelectProject = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] flex flex-col font-sans selection:bg-[#B9A0FF]/25 selection:text-[#F5F5F7]">
      {/* Compact Top Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero: name, headline, concise intro, primary actions */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. About: short professional introduction and education */}
        <About />

        {/* 3. Selected projects: NAARISHIELD, GATIMAAN, KRISHILINK */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 4. Technical expertise: grouped text-based skill lists */}
        <Skills />

        {/* 5. Achievements: MUJ HACX 4.0 first-place award & verified honors */}
        <Achievements />

        {/* 6. Leadership & Experience: coding club coordination & activities */}
        <Leadership />

        {/* 7. Contact: email copy, GitHub, LinkedIn, closing CTA */}
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Detailed Technical Case Study & Architecture Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseCaseStudy}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default App;
