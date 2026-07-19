import Nav from './components/Nav'
import SignalLine from './components/SignalLine'
import TickerBar from './components/TickerBar'
import SocialRow from './components/SocialRow'
import Hero from './sections/Hero'
import Offerings from './sections/Offerings'
import Highlights from './sections/Highlights'
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
        <TickerBar />
        <SocialRow />
        <Offerings />
        <Highlights />
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
      <footer className="border-t border-outline px-6 py-8 text-center text-xs text-on-surface-variant md:px-12">
        © {new Date().getFullYear()} Ashik Sharon M — built with React, Vite & Framer Motion.
      </footer>
    </div>
  )
}

export default App
