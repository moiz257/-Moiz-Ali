import About from "./components/About"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
    <Navbar />
    <HeroSection />
    <About />
    <Project />
    <Skills />
    <Testimonials />
    <ContactForm />
    <Footer />
   </main>
  )
}

export default App