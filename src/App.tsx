import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
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
    <div className="min-h-screen bg-[#0B1020] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Fixed Header Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects onSelectProject={handleSelectProject} />
        <ArchitectureSection onOpenCaseStudy={handleSelectProject} />
        <Achievements />
        <Leadership />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Deep-Dive Technical Case Study & Architecture Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseCaseStudy}
      />

      {/* Curriculum Vitae / Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default App;
