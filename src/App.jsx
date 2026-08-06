import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, ArrowUpRight, Globe, Users, Briefcase, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hello Oman Sheba',
    description: 'A comprehensive service platform designed for the expat and local community in Oman, providing essential services, information, and community support.',
    link: 'https://helloomansheba.com/',
    image: '/helloomansheba.png',
    tags: ['Community', 'Service Platform']
  },
  {
    id: 2,
    title: 'Hello Oman Bangla',
    description: 'A dedicated news and community platform catering to the Bengali-speaking population in Oman, bringing latest updates and connecting people.',
    link: 'https://helloomanbangla.com/',
    image: '/helloomanbangla.png',
    tags: ['Media', 'Networking']
  },
  {
    id: 3,
    title: 'MusaFly',
    description: 'A modern, seamless travel and ticketing platform providing flight booking experiences, visa processing, and curated travel solutions.',
    link: 'https://musafly.com/',
    image: '/musafly.png',
    tags: ['Travel', 'E-commerce']
  }
];

const experiences = [
  {
    id: 1,
    date: '2023 - Present',
    title: 'Founder & CEO',
    company: 'MusaFly',
    description: 'Launched a modern travel platform to simplify flight bookings and travel arrangements for expats and travelers.'
  },
  {
    id: 2,
    date: '2021 - Present',
    title: 'Founder',
    company: 'Hello Oman Sheba',
    description: 'Established a comprehensive service and community platform to help expats settle and thrive in Oman.'
  },
  {
    id: 3,
    date: '2019 - Present',
    title: 'Founder & Editor',
    company: 'Hello Oman Bangla',
    description: 'Created a news and media portal dedicated to the Bengali-speaking community in Oman, fostering connection and awareness.'
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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
          <div className="logo">Musa Emon.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Ventures</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero container">
          <div className="hero-bg-shape"></div>
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ color: 'var(--accent-highlight)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}
              >
                Serial Entrepreneur & Visionary
              </motion.span>
              <h1>
                Hi, I'm <span className="text-gradient">Musa Emon</span>
              </h1>
              <p>
                I build and scale platforms that connect communities and simplify lives. From dedicated media portals for expats to seamless travel booking experiences, my mission is to drive impact through innovation.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  Explore My Ventures <ArrowUpRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">Get in Touch</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/musa-emon.png" 
                alt="Musa Emon" 
                className="hero-image"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Musa+Emon&size=500&background=f1f5f9&color=0f172a' }}
              />
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Expertise Section */}
        <section id="expertise" className="section bg-light">
          <div className="container">
            <div className="section-header">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                Core <span className="text-gradient">Expertise</span>
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                Leveraging years of experience in community building and business strategy to create meaningful digital platforms.
              </motion.p>
            </div>

            <motion.div 
              className="bento-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="bento-item large" variants={fadeUpVariant}>
                <div className="bento-icon"><Globe size={28} /></div>
                <h3>Community Leadership</h3>
                <p>Establishing digital spaces that unite expats, providing them with essential resources, news, and a platform to voice their experiences in a foreign land.</p>
              </motion.div>
              
              <motion.div className="bento-item" variants={fadeUpVariant}>
                <div className="bento-icon"><Zap size={28} /></div>
                <h3>Business Strategy</h3>
                <p>Identifying market gaps and launching scalable ventures tailored to specific demographic needs.</p>
              </motion.div>
              
              <motion.div className="bento-item" variants={fadeUpVariant}>
                <div className="bento-icon"><Briefcase size={28} /></div>
                <h3>Travel & Tourism</h3>
                <p>Streamlining the ticketing and visa process to make international travel effortless and accessible.</p>
              </motion.div>
              
              <motion.div className="bento-item large" variants={fadeUpVariant}>
                <div className="bento-icon"><Users size={28} /></div>
                <h3>Digital Ecosystems</h3>
                <p>Building interconnected platforms (Sheba, Bangla, Fly) that serve a singular community through multiple vital touchpoints, creating a holistic support system.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="journey" className="section container">
          <div className="section-header">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              Entrepreneurial <span className="text-gradient">Journey</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              The milestones of building platforms from the ground up.
            </motion.p>
          </div>

          <motion.div 
            className="timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp) => (
              <motion.div key={exp.id} className="timeline-item" variants={fadeUpVariant}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <h3 className="timeline-title">{exp.title} - {exp.company}</h3>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-light">
          <div className="container">
            <div className="section-header">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                My <span className="text-gradient">Ventures</span>
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                Live platforms currently serving thousands of users daily.
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
                <motion.div key={project.id} className="project-card" variants={fadeUpVariant}>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Let's Build Together</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.1rem' }}>
            Whether it's a partnership, consultation, or just saying hello, I'm always open to connecting with like-minded individuals.
          </p>
          
          <div className="social-links" style={{ marginTop: '1rem' }}>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              IN
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              X
            </a>
            <a href="mailto:contact@musa-emon.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="copyright" style={{ marginTop: '2rem' }}>© {new Date().getFullYear()} Musa Emon. Designed with precision.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
