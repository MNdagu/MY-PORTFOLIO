import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

