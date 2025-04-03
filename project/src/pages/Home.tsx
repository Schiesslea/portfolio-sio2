import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import TechWatch from '../components/TechWatch';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <TechWatch />
            <Footer />
        </div>
    );
}