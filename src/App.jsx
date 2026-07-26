import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timetable from './components/Timetable';
import Documents from './components/Documents';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Hide WhatsApp button when contact section is in view
    const handleScroll = () => {
      const contactEl = document.getElementById('contact');
      if (!contactEl) return;
      const rect = contactEl.getBoundingClientRect();
      setShowWhatsApp(rect.top > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timetable />
      <Documents />
      <Videos />
      <Contact />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/94718115523"
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-float ${showWhatsApp ? 'show' : 'hide'}`}
      >
        <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.378L1.054 31.256l6.078-1.98A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.338 22.608c-.39 1.1-1.932 2.014-3.168 2.27-.84.176-1.936.316-5.626-1.208-4.724-1.95-7.762-6.76-7.996-7.076-.226-.316-1.896-2.524-1.896-4.814s1.2-3.41 1.63-3.882c.39-.426.926-.56 1.232-.56.31 0 .616.004.886.016.284.012.664-.106 1.034.788.39.948 1.332 3.24 1.448 3.472.116.232.194.504.038.82-.15.316-.226.512-.452.788-.226.276-.476.616-.678.828-.226.232-.46.484-.194.948.266.464 1.182 1.95 2.536 3.16 1.74 1.556 3.206 2.04 3.67 2.27.39.194.616.164.842-.098.232-.264.982-1.144 1.244-1.54.264-.39.53-.326.896-.196.366.13 2.326 1.096 2.724 1.296.39.2.652.296.748.462.096.164.096.952-.294 2.052z"/>
        </svg>
      </a>
    </>
  );
}
