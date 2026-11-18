import { useReveal } from './hooks'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Education from './components/Education'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Header />
      <main id="top" tabIndex={-1}>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Publications />
        <Education />
        <Resume />
      </main>
      <Footer />
    </>
  )
}
