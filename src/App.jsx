import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hello Oman Sheba',
    description: 'A comprehensive service platform designed for the expat and local community in Oman, providing essential services and information.',
    link: 'https://helloomansheba.com/',
    image: '/helloomansheba.png'
  },
  {
    id: 2,
    title: 'Hello Oman Bangla',
    description: 'A dedicated platform catering to the Bengali-speaking community in Oman, bringing news, updates, and community support.',
    link: 'https://helloomanbangla.com/',
    image: '/helloomanbangla.png'
  },
  {
    id: 3,
    title: 'MusaFly',
    description: 'A modern travel and ticketing platform providing seamless flight booking experiences and travel solutions.',
    link: 'https://musafly.com/',
    image: '/musafly.png'
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo text-gradient">Musa Emon</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero container">
          <div className="glow-circle"></div>
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
            >
              <h1>
                Hi, I'm <span className="text-gradient">Musa Emon</span>
              </h1>
              <p>
                Founder & Entrepreneur behind innovative platforms connecting communities and simplifying travel. Passionate about creating digital experiences that make a difference.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image-wrapper glass"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/musa-emon.png" 
                alt="Musa Emon" 
                className="hero-image"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Musa+Emon&size=500&background=121217&color=6366f1' }}
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <div className="section-header">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              My <span className="text-gradient">Ventures</span>
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            >
              Explore the platforms I have founded and built to solve real-world problems.
            </motion.p>
          </div>

          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} className="project-card glass" variants={fadeUpVariant}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit Website <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <h2 className="text-gradient" style={{ fontSize: '2rem', fontWeight: 700 }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Interested in collaborating or want to say hi?</p>
          
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@musa-emon.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="copyright">© {new Date().getFullYear()} Musa Emon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
