import Nav from './components/Nav'
import SignalLine from './components/SignalLine'
import Hero from './sections/Hero'
import StatsStrip from './sections/StatsStrip'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import FeaturedProjects from './sections/FeaturedProjects'
import ProjectArchive from './sections/ProjectArchive'
import Patents from './sections/Patents'
import OpenSource from './sections/OpenSource'
import Certifications from './sections/Certifications'
import Achievements from './sections/Achievements'
import OutsideEngineering from './sections/OutsideEngineering'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <SignalLine />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <ProjectArchive />
        <Patents />
        <OpenSource />
        <Certifications />
        <Achievements />
        <OutsideEngineering />
        <Contact />
      </main>
      <footer className="border-t border-outline/10 px-6 py-8 text-center text-xs text-on-surface-variant md:px-12">
        © {new Date().getFullYear()} Ashik Sharon M — built with React, Vite & Framer Motion.
      </footer>
    </div>
  )
}

export default App
