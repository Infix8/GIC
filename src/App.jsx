import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Themes from './components/Themes';
import Structure from './components/Structure';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import './index.css';

function App() {
  // Init scroll animations observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add animate-in styles dynamically if not in CSS (or we can add to CSS)
    // Actually better to have in CSS or just assume the class does the job if CSS has it?
    // The legacy script added style tag. The legacy CSS didn't have .animate-in probably? 
    // Wait, let's add the style here or in index.css.
    // I will add it via JS for now to match legacy behavior, or better, add to index.css in next step.

    const animateElements = document.querySelectorAll(
      '.pillar-card, .theme-card, .timeline-item, .glass-card, .tech-tag'
    );

    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <BackgroundEffects />
      <main className="main-container">
        <Navbar />
        <Hero />
        <About />
        <Pillars />
        <Themes />
        <Structure />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
