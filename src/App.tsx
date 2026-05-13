import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border text-center">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Nikita // Web Developer // System Online
        </p>
      </footer>
    </div>
  );
}

export default App;
