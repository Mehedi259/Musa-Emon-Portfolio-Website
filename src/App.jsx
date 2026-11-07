import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Mail, ArrowUpRight, Globe, Users, Briefcase, Zap, 
  MessageCircle, ShieldCheck, LayoutDashboard, Radio, TrendingUp, 
  ShoppingBag, BookOpen, Building, MapPin, Sparkles, CheckCircle2,
  Layers, ChevronRight, Award
} from 'lucide-react';

// Custom SVG Icons for TikTok, Instagram, and Facebook
const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.88-4.48V8.71a8.28 8.28 0 0 0 4.89 1.58V6.85c-.34-.02-.67-.08-1-.16z"/>
  </svg>
);

// Musa Emon Official Social Channels
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1Gdt8hxZuN/?mibextid=wwXIfr',
    icon: FacebookIcon,
    colorClass: 'social-fb'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/musa___emon?rpxt=MTMyeG9kb3NwZHRpZg%3D%3D&utm_source=qr',
    icon: InstagramIcon,
    colorClass: 'social-insta'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@musa_emon',
    icon: TikTokIcon,
    colorClass: 'social-tiktok'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/96878147442?text=Hello%20Musa%20Emon',
    icon: MessageCircle,
    colorClass: 'social-wa'
  },
  {
    name: 'Email',
    url: 'mailto:musaemonn@gmail.com',
    icon: Mail,
    colorClass: 'social-mail'
  }
];

// Ventures & Ecosystem Projects
const projects = [
  {
    id: 1,
    title: 'MusaFly',
    tagline: 'Modern Flight Booking & Aviation Ecosystem',
    category: 'Travel & Tech',
    description: 'A full-cycle travel and aviation tech platform offering live Sabre GDS flight search, real-time fare revalidation, instant PNR generation, and automated visa processing.',
    link: 'https://musafly.com/',
    adminLink: 'https://admin.musafly.com/',
    domain: 'musafly.com',
    image: '/musafly.png',
    icon: Globe,
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    tags: ['Aviation Tech', 'Flight Booking', 'Sabre GDS', 'Visa Services'],
    featured: true
  },
  {
    id: 2,
    title: 'Hello Probash',
    tagline: 'Global Expat News & Community Network',
    category: 'Media & News',
    description: 'The premier digital news and diaspora publication serving millions of expatriate Bangladeshis worldwide with verified daily journalism, policy guides, and expat welfare initiatives.',
    link: 'https://helloprobash.com/',
    adminLink: 'https://admin.helloprobash.com/',
    domain: 'helloprobash.com',
    icon: Radio,
    gradient: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    tags: ['Global Diaspora', 'News Media', 'Community Hub', 'Publishing'],
    featured: true
  },
  {
    id: 3,
    title: 'Hello Probash Sheba',
    tagline: 'Expat Services & Emergency Assistance',
    category: 'Services & Education',
    description: 'A comprehensive multi-service citizen portal connecting expatriates with emergency helplines, legal aid, document processing, and community assistance overseas.',
    link: 'https://helloprobashsheba.com/',
    adminLink: 'https://admin.helloprobashsheba.com/',
    domain: 'helloprobashsheba.com',
    image: '/helloomansheba.png',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)',
    tags: ['Expat Care', 'Emergency Helpline', 'Legal Support', 'Community'],
    featured: true
  },
  {
    id: 4,
    title: 'Hello Oman Tech',
    tagline: 'Enterprise Digital Agency & Engineering Studio',
    category: 'Travel & Tech',
    description: 'Full-cycle software engineering and digital transformation studio architecting high-performance web applications, mobile platforms, and cloud systems across the GCC and South Asia.',
    link: 'https://helloomantech.com/',
    altLink: 'https://probashtech.com',
    domain: 'helloomantech.com',
    icon: Zap,
    gradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 100%)',
    tags: ['Software Studio', 'Cloud Systems', 'Full-Stack Apps', 'Digital Agency'],
    featured: true
  },
  {
    id: 5,
    title: 'Probash Today',
    tagline: 'Real-Time Digital News & Investigative Media',
    category: 'Media & News',
    description: 'Fast-moving digital news daily covering international remittances, diplomatic relations, migrant worker rights, and in-depth investigative reports.',
    link: 'https://probashtoday.com/',
    adminLink: 'https://probash-today-news-dashboard.vercel.app/login',
    domain: 'probashtoday.com',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 100%)',
    tags: ['Breaking News', 'Remittance', 'Investigative', 'Journalism']
  },
  {
    id: 6,
    title: 'ProbashMart',
    tagline: 'Cross-Border Marketplace & Ethnic Grocery Retail',
    category: 'Travel & Tech',
    description: 'A specialized international e-commerce marketplace delivering authentic homeland foods, ethnic groceries, and daily consumer essentials directly to diaspora doorsteps.',
    link: 'https://probashmart.com/',
    adminLink: 'https://admin.probashmart.com/',
    domain: 'probashmart.com',
    icon: ShoppingBag,
    gradient: 'linear-gradient(135deg, #115e59 0%, #14b8a6 100%)',
    tags: ['E-Commerce', 'Online Grocery', 'Retail Logistics', 'B2C']
  },
  {
    id: 7,
    title: 'Probash Academy',
    tagline: 'Digital Skills & Vocational EdTech Platform',
    category: 'Services & Education',
    description: 'An online learning and vocational empowerment portal offering language proficiency, digital literacy, and career-advancement courses tailored for expatriates.',
    link: 'https://probashacademy.com/',
    domain: 'probashacademy.com',
    icon: BookOpen,
    gradient: 'linear-gradient(135deg, #581c87 0%, #a855f7 100%)',
    tags: ['EdTech', 'Language Courses', 'Skill Development', 'E-Learning']
  },
  {
    id: 8,
    title: 'Hello Desh',
    tagline: 'National Media Network & Grassroots Portal',
    category: 'Media & News',
    description: 'A countrywide multimedia platform celebrating national heritage, grassroots development, local entrepreneurial stories, and socio-economic progress.',
    link: 'https://hellodesh.com/',
    adminLink: 'https://admin.hellodesh.com/',
    domain: 'hellodesh.com',
    icon: Building,
    gradient: 'linear-gradient(135deg, #881337 0%, #f43f5e 100%)',
    tags: ['National Portal', 'Grassroots Stories', 'Cultural Heritage', 'Publishing']
  },
  {
    id: 9,
    title: 'Hello Mirpur',
    tagline: 'Metropolitan Community Directory & Local Business Hub',
    category: 'Hyperlocal',
    description: 'A hyperlocal digital directory and commercial guide serving Dhaka’s Mirpur region with merchant listings, community events, civic announcements, and merchant discounts.',
    link: 'https://hellomirpur.com/',
    adminLink: 'https://admin.hellomirpur.com/',
    domain: 'hellomirpur.com',
    icon: MapPin,
    gradient: 'linear-gradient(135deg, #075985 0%, #0ea5e9 100%)',
    tags: ['Hyperlocal Hub', 'City Directory', 'Local Commerce', 'Events']
  },
  {
    id: 10,
    title: 'Hello Nabiganj',
    tagline: 'Regional Diaspora Network & Community Hub',
    category: 'Hyperlocal',
    description: 'Uniting the passionate Nabiganj diaspora across the UK, Europe, and Middle East with regional developments, social welfare initiatives, and homeland projects.',
    link: 'https://hellonabiganj.com/',
    adminLink: 'https://admin.hellonabiganj.com/',
    domain: 'hellonabiganj.com',
    icon: Users,
    gradient: 'linear-gradient(135deg, #155e75 0%, #06b6d4 100%)',
    tags: ['Regional Heritage', 'UK/EU Diaspora', 'Social Impact', 'Community Hub']
  },
  {
    id: 11,
    title: 'Hello Oman Bangla',
    tagline: 'The Founding Expat Media Outlet in Oman',
    category: 'Media & News',
    description: 'The foundation of the entire Hello Network—delivering dedicated Bengali news, lifestyle guides, and community solidarity across the Sultanate of Oman since 2019.',
    link: 'https://helloomanbangla.com/',
    domain: 'helloomanbangla.com',
    image: '/helloomanbangla.png',
    icon: Radio,
    gradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 100%)',
    tags: ['Founding Venture', 'Sultanate of Oman', 'Expat Voice', 'Community Pillar']
  }
];

const experiences = [
  {
    id: 1,
    date: '2024 - Present',
    title: 'Founder & Group Ecosystem Architect',
    company: 'Hello Global Network & MusaFly',
    description: 'Steering an interconnected ecosystem of 11+ digital platforms across travel tech, journalism, cross-border e-commerce, EdTech, and citizen service networks.'
  },
  {
    id: 2,
    date: '2023 - Present',
    title: 'Founder & CEO',
    company: 'MusaFly (musafly.com)',
    description: 'Architected and scaled a modern travel platform with real-time Sabre GDS integration, automated PNR generation, and seamless visa processing.'
  },
  {
    id: 3,
    date: '2021 - Present',
    title: 'Founder & Managing Director',
    company: 'Hello Probash & Hello Sheba Group',
    description: 'Built global expat support portals, digital technology agency (Hello Oman Tech), and specialized hyperlocal directories connecting hundreds of thousands.'
  },
  {
    id: 4,
    date: '2019 - Present',
    title: 'Founder & Publisher',
    company: 'Hello Oman Media Network',
    description: 'Pioneered dedicated digital media channels for Bengali expatriates in Oman, establishing a trusted voice and strong grassroots presence.'
  }
];

const stats = [
  { value: '11+', label: 'Live Digital Platforms', icon: Layers },
  { value: '500K+', label: 'Global Expat Reach', icon: Users },
  { value: '100%', label: 'Cloud & Containerized Systems', icon: Zap },
  { value: '7+ Years', label: 'Ecosystem Leadership', icon: Award }
];

const filterCategories = ['All', 'Travel & Tech', 'Media & News', 'Services & Education', 'Hyperlocal'];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            Musa Emon<span className="logo-dot">.</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#ventures">Ventures (11)</a>
            <a href="#expertise">Expertise</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-social-desktop">
            <a href="https://www.facebook.com/share/1Gdt8hxZuN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/musa___emon?rpxt=MTMyeG9kb3NwZHRpZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.tiktok.com/@musa_emon" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="TikTok">
              <TikTokIcon size={18} />
            </a>
            <a href="https://wa.me/96878147442?text=Hello%20Musa%20Emon" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="WhatsApp">
              <MessageCircle size={18} />
            </a>
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
              <div className="hero-badge-wrap">
                <span className="hero-badge">
                  <Sparkles size={14} className="sparkle-icon" /> Serial Tech Entrepreneur & Ecosystem Founder
                </span>
              </div>
              
              <h1>
                Hi, I'm <span className="text-gradient">Musa Emon</span>
              </h1>
              
              <p>
                I architect and scale digital ecosystems that connect global diaspora communities, streamline travel tech with Sabre GDS, and empower millions of expats across the GCC and South Asia.
              </p>
              
              <div className="hero-buttons">
                <a href="#ventures" className="btn btn-primary">
                  Explore 11 Ventures <ArrowUpRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Connect & Partner
                </a>
              </div>

              {/* Social Channels Pill Bar */}
              <div className="hero-social-bar">
                <span className="hero-social-label">Follow & Connect:</span>
                <div className="hero-social-pills">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a 
                        key={item.name} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`hero-social-pill ${item.colorClass}`}
                        title={item.name}
                      >
                        <Icon size={16} />
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="hero-image-badge">
                <span className="badge-pulse"></span>
                <span>Active Founder • 11+ Live Ventures</span>
              </div>
              <img 
                src="/musa-emon.jpeg" 
                alt="Musa Emon" 
                className="hero-image"
                onError={(e) => { e.target.src = '/musa-emon.png'; }}
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Metrics Bar */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="stat-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ventures / Portfolio Section */}
        <section id="ventures" className="section bg-light">
          <div className="container">
            <div className="section-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                <span className="section-subtitle">PORTFOLIO & VENTURES</span>
                <h2>
                  Built & Scaled <span className="text-gradient">Platforms</span>
                </h2>
                <p>
                  A cohesive digital empire of 11 live web applications, travel engines, and community platforms with dedicated admin dashboards.
                </p>
              </motion.div>

              {/* Category Filter Pills */}
              <div className="filter-bar">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                    {cat === 'All' && ` (${projects.length})`}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              className="projects-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <motion.div 
                      key={project.id} 
                      className="project-card" 
                      variants={fadeUpVariant}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card Header Media */}
                      {project.image ? (
                        <div className="project-image-container">
                          <img src={project.image} alt={project.title} className="project-image" />
                          <div className="project-image-overlay">
                            <span className="live-pill">
                              <span className="dot-pulse"></span> Live System
                            </span>
                            <span className="category-pill">{project.category}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="project-mock-header" style={{ background: project.gradient }}>
                          <div className="mock-window-bar">
                            <div className="mock-dots">
                              <span className="mock-dot red"></span>
                              <span className="mock-dot yellow"></span>
                              <span className="mock-dot green"></span>
                            </div>
                            <div className="mock-url">
                              <Globe size={11} />
                              <span>{project.domain}</span>
                            </div>
                            <span className="live-pill-sm">
                              <span className="dot-pulse"></span>
                            </span>
                          </div>
                          <div className="mock-brand-center">
                            <div className="mock-brand-icon">
                              <Icon size={32} />
                            </div>
                            <div className="mock-brand-title">{project.title}</div>
                          </div>
                          <Icon size={120} className="mock-watermark-icon" />
                        </div>
                      )}

                      {/* Card Body Content */}
                      <div className="project-content">
                        <div className="project-top-meta">
                          <span className="project-category-badge">{project.category}</span>
                          {project.featured && (
                            <span className="featured-badge">★ Flagship</span>
                          )}
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-tagline">{project.tagline}</p>
                        <p className="project-desc">{project.description}</p>

                        <div className="project-tags">
                          {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="project-actions">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-project-link"
                          >
                            <span>Live Website</span>
                            <ExternalLink size={15} />
                          </a>

                          {project.adminLink && (
                            <a 
                              href={project.adminLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn-project-admin"
                              title="Live Admin Portal"
                            >
                              <LayoutDashboard size={14} />
                              <span>Admin Portal</span>
                            </a>
                          )}

                          {project.altLink && (
                            <a 
                              href={project.altLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn-project-alt"
                              title="Alternative Gateway"
                            >
                              <ExternalLink size={14} />
                              <span>ProbashTech</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Expertise Section */}
        <section id="expertise" className="section">
          <div className="container">
            <div className="section-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                <span className="section-subtitle">STRATEGIC CAPABILITIES</span>
                <h2>
                  Core <span className="text-gradient">Expertise</span>
                </h2>
                <p>
                  Combining deep domain knowledge in aviation technology, expatriate community building, and cloud scalability.
                </p>
              </motion.div>
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
                <h3>Global Diaspora Ecosystems</h3>
                <p>Created and operated media channels, service hubs, and community resources uniting over half a million expatriates in the GCC, Europe, and Asia with homeland news and support.</p>
                <div className="bento-footer-tags">
                  <span>Hello Probash</span>
                  <span>Hello Sheba</span>
                  <span>Hello Desh</span>
                </div>
              </motion.div>
              
              <motion.div className="bento-item" variants={fadeUpVariant}>
                <div className="bento-icon"><Briefcase size={28} /></div>
                <h3>Travel & Aviation Tech</h3>
                <p>Pioneering modern flight booking engines with live Sabre GDS BFM v7 integration, dynamic fare markup, and instant ticketing in MusaFly.</p>
              </motion.div>
              
              <motion.div className="bento-item" variants={fadeUpVariant}>
                <div className="bento-icon"><Zap size={28} /></div>
                <h3>Full-Stack Product Scale</h3>
                <p>Architecting containerized microservices, high-throughput REST APIs, and responsive mobile/web frontends with 99.9% uptime.</p>
              </motion.div>
              
              <motion.div className="bento-item large" variants={fadeUpVariant}>
                <div className="bento-icon"><Users size={28} /></div>
                <h3>Hyperlocal & E-Commerce Operations</h3>
                <p>Bridging local city hubs (Mirpur, Nabiganj) and building cross-border ethnic retail e-commerce (ProbashMart) alongside digital vocational academies (Probash Academy).</p>
                <div className="bento-footer-tags">
                  <span>ProbashMart</span>
                  <span>Probash Academy</span>
                  <span>Hyperlocal Networks</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="journey" className="section bg-light">
          <div className="container">
            <div className="section-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                <span className="section-subtitle">TRACK RECORD</span>
                <h2>
                  Entrepreneurial <span className="text-gradient">Journey</span>
                </h2>
                <p>
                  From a single community media portal in Oman to a multifaceted international conglomerate.
                </p>
              </motion.div>
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
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer & Direct Contact */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <span className="section-subtitle" style={{ color: 'var(--accent-highlight)' }}>GET IN TOUCH</span>
          <h2 className="text-gradient footer-headline">Let's Build & Partner</h2>
          <p className="footer-lead">
            Whether exploring advertising across our 11 platforms, strategic partnerships, tech consulting, or global travel collaborations, I look forward to connecting.
          </p>
          
          {/* Social Channels in Footer */}
          <div className="footer-social-wrapper">
            <div className="social-links">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.name}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`social-icon ${item.colorClass}`}
                    aria-label={item.name}
                    title={item.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Direct WhatsApp Advertisement & Partnership Box */}
          <div className="advertisement-contact">
            <span className="ad-badge">Direct Business & Inquiries</span>
            <h4>Advertise Across 11 Ecosystem Platforms</h4>
            <p>Reach over 500,000+ targeted expatriates and localized audiences across Oman, the GCC, and Bangladesh.</p>
            <a 
              href="https://wa.me/96878147442?text=I%20want%20to%20discuss%20advertising%20or%20partnership%20with%20Musa%20Emon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp: +968 78147442</span>
            </a>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Musa Emon. All rights reserved.</p>
            <p className="developer-credit">
              Engineered & Maintained by <a href="https://helloomantech.com" target="_blank" rel="noopener noreferrer">Hello Oman Tech</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
