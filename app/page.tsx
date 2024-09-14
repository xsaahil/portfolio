import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimateOnScroll from './components/AnimateOnScroll'
import ScrollArrow from './components/ScrollArrow'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <AnimateOnScroll>
          <section id="about">
            <About />
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <section id="skills">
            <Skills />
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <section id="projects">
            <Projects />
          </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <section id="contact">
            <Contact />
          </section>
        </AnimateOnScroll>
      </main>
      <Footer />
      <ScrollArrow />
    </div>
  )
}