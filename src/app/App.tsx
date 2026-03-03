import { ThemeProvider } from './providers/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { QuotesPanel } from './components/QuotesPanel';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <div className="size-full">
        <Navbar />
        <Hero />
        <About />
        <QuotesPanel />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}