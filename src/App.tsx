import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Divider = () => <hr className="border-0 border-t border-border" />

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
      </main>
      <div id="contact" className="min-h-[calc(100vh-4rem)] flex flex-col scroll-mt-16">
        <div className="flex-1 flex items-center justify-center">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  )
}
