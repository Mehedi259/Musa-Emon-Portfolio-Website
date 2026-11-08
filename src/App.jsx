import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Mail, ArrowUpRight, Globe, Users, Briefcase, Zap, 
  Radio, ShoppingBag, BookOpen, Building, MapPin, 
  Sparkles, Layers, Award, ChevronRight, Compass, Plane, Camera,
  User, Home
} from 'lucide-react';

// Custom SVG Icons for Facebook, TikTok, Instagram, and YouTube
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

const YouTubeIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Quick Links for Navbar & Footer
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1Gdt8hxZuN/?mibextid=wwXIfr',
    icon: FacebookIcon,
    colorClass: 'social-fb'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@musa_emon',
    icon: TikTokIcon,
    colorClass: 'social-tiktok'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/musa___emon?rpxt=MTMyeG9kb3NwZHRpZg%3D%3D&utm_source=qr',
    icon: InstagramIcon,
    colorClass: 'social-insta'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@musaemon',
    icon: YouTubeIcon,
    colorClass: 'social-yt'
  },
  {
    name: 'Email',
    url: 'mailto:musaemonn@gmail.com',
    icon: Mail,
    colorClass: 'social-mail'
  }
];

// Unseen Bangladesh Style: Social Media Spotlight Cards (4 Platforms: Facebook, TikTok, Instagram, YouTube)
const socialShowcaseCards = [
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'Musa Emon',
    metrics: '269K+ Followers',
    subMetrics: '153K+ Engagement',
    icon: FacebookIcon,
    theme: 'card-fb',
    url: 'https://www.facebook.com/share/1Gdt8hxZuN/?mibextid=wwXIfr',
    actionText: 'Connect on FB',
    image: '/social-fb.jpg',
    tag: 'Digital Creator'
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@musa_emon',
    metrics: '248.4K Followers',
    subMetrics: '7.1M+ Total Likes',
    icon: TikTokIcon,
    theme: 'card-tiktok',
    url: 'https://www.tiktok.com/@musa_emon',
    actionText: 'Watch on TikTok',
    image: '/social-tiktok.jpg',
    tag: 'Viral Creator'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@musa___emon',
    metrics: '920+ Followers',
    subMetrics: '189+ Travel Posts',
    icon: InstagramIcon,
    theme: 'card-insta',
    url: 'https://www.instagram.com/musa___emon?rpxt=MTMyeG9kb3NwZHRpZg%3D%3D&utm_source=qr',
    actionText: 'Follow on IG',
    image: '/social-insta.jpg',
    tag: 'Licensed Influencer'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@musaemon',
    metrics: '1K+ Subscribers',
    subMetrics: 'Official Channel',
    icon: YouTubeIcon,
    theme: 'card-yt',
    url: 'https://www.youtube.com/@musaemon',
    actionText: 'Subscribe on YT',
    image: '/social-musa-avatar.jpg',
    tag: 'Travel & Expat Vlogs'
  }
];

// Ventures & Ecosystem Projects (10 Live Platforms with real banner screenshots)
const projects = [
  {
    id: 1,
    title: 'MusaFly',
    tagline: 'Modern Flight Booking & Aviation Ecosystem',
    category: 'Travel & Tech',
    description: 'A full-cycle travel and aviation tech platform offering live Sabre GDS flight search, real-time fare revalidation, instant PNR generation, and automated visa processing.',
    link: 'https://musafly.com/',
    domain: 'musafly.com',
    image: '/musafly.png',
    icon: Globe,
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
    domain: 'helloprobash.com',
    image: '/helloprobash.png',
    icon: Radio,
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
    domain: 'helloprobashsheba.com',
    image: '/helloprobashsheba.png',
    icon: Users,
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
    image: '/helloomantech.png',
    icon: Zap,
    tags: ['Software Studio', 'Cloud Systems', 'Full-Stack Apps', 'Digital Agency'],
    featured: true
  },
  {
    id: 5,
    title: 'ProbashMart',
    tagline: 'Cross-Border Marketplace & Ethnic Grocery Retail',
    category: 'Services & Education',
    description: 'A specialized international e-commerce marketplace delivering authentic homeland foods, ethnic groceries, and daily consumer essentials directly to diaspora doorsteps.',
    link: 'https://probashmart.com/',
    domain: 'probashmart.com',
    image: '/probashmart.png',
    icon: ShoppingBag,
    tags: ['E-Commerce', 'Online Grocery', 'Retail Logistics', 'B2C']
  },
  {
    id: 6,
    title: 'Probash Academy',
    tagline: 'Digital Skills & Vocational EdTech Platform',
    category: 'Services & Education',
    description: 'An online learning and vocational empowerment portal offering language proficiency, digital literacy, and career-advancement courses tailored for expatriates.',
    link: 'https://probashacademy.com/',
    domain: 'probashacademy.com',
    image: '/probashacademy.png',
    icon: BookOpen,
    tags: ['EdTech', 'Language Courses', 'Skill Development', 'E-Learning']
  },
  {
    id: 7,
    title: 'Hello Desh',
    tagline: 'National Media Network & Grassroots Portal',
    category: 'Media & News',
    description: 'A countrywide multimedia platform celebrating national heritage, grassroots development, local entrepreneurial stories, and socio-economic progress.',
    link: 'https://hellodesh.com/',
    domain: 'hellodesh.com',
    image: '/hellodesh.png',
    icon: Building,
    tags: ['National Portal', 'Grassroots Stories', 'Cultural Heritage', 'Publishing']
  },
  {
    id: 8,
    title: 'Hello Mirpur',
    tagline: 'Metropolitan Community Directory & Local Business Hub',
    category: 'Hyperlocal',
    description: 'A hyperlocal digital directory and commercial guide serving Dhaka’s Mirpur region with merchant listings, community events, civic announcements, and merchant discounts.',
    link: 'https://hellomirpur.com/',
    domain: 'hellomirpur.com',
    image: '/hellomirpur.png',
    icon: MapPin,
    tags: ['Hyperlocal Hub', 'City Directory', 'Local Commerce', 'Events']
  },
  {
    id: 9,
    title: 'Hello Nabiganj',
    tagline: 'Regional Diaspora Network & Community Hub',
    category: 'Hyperlocal',
    description: 'Uniting the passionate Nabiganj diaspora across the UK, Europe, and Middle East with regional developments, social welfare initiatives, and homeland projects.',
    link: 'https://hellonabiganj.com/',
    domain: 'hellonabiganj.com',
    image: '/hellonabiganj.png',
    icon: Users,
    tags: ['Regional Heritage', 'UK/EU Diaspora', 'Social Impact', 'Community Hub']
  },
  {
    id: 10,
    title: 'Hello Oman Bangla',
    tagline: 'The Founding Expat Media Outlet in Oman',
    category: 'Media & News',
    description: 'The foundation of the entire Hello Network—delivering dedicated Bengali news, lifestyle guides, and community solidarity across the Sultanate of Oman since 2019.',
    link: 'https://helloomanbangla.com/',
    domain: 'helloomanbangla.com',
    image: '/helloomanbangla.png',
    icon: Radio,
    tags: ['Founding Venture', 'Sultanate of Oman', 'Expat Voice', 'Community Pillar']
  }
];

// Real Travel & Expedition Photos
const travelDestinations = [
  {
    id: 'uae',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    location: 'Dubai Burj Khalifa',
    year: '2023',
    image: '/travel/uae.jpg'
  },
  {
    id: 'thailand',
    country: 'Thailand',
    flag: '🇹🇭',
    location: 'Thailand Pattaya Beach',
    year: '2026',
    image: '/travel/thailand.jpg'
  },
  {
    id: 'armenia',
    country: 'Armenia',
    flag: '🇦🇲',
    location: 'Armenia Yerevan',
    year: '2025',
    image: '/travel/armenia.jpg'
  },
  {
    id: 'georgia',
    country: 'Georgia',
    flag: '🇬🇪',
    location: 'Georgia Tbilisi',
    year: '2025',
    image: '/travel/georgia.jpg'
  },
  {
    id: 'oman',
    country: 'Sultanate of Oman',
    flag: '🇴🇲',
    location: 'Oman Al Suwaiq',
    year: '2019',
    image: '/travel/oman.jpg'
  },
  {
    id: 'srilanka',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    location: 'Sri Lanka Galle Face',
    year: '2025',
    image: '/travel/srilanka.jpg'
  }
];

// Milestones of Building Platforms from the Ground Up (Developed by Probash Tech)
const experiences = [
  {
    id: 1,
    date: '2021',
    title: 'Founder & CEO',
    company: 'MusaFly (musafly.com)',
    description: 'Launched a modern aviation tech and flight reservation platform featuring Sabre GDS flight search, automated fare revalidation, and instant visa processing.'
  },
  {
    id: 2,
    date: '2022',
    title: 'Founder & Publisher',
    company: 'Hello Probash (helloprobash.com)',
    description: 'Pioneered the leading digital media publication and diaspora news portal serving hundreds of thousands of expatriates across Oman and worldwide.'
  },
  {
    id: 3,
    date: '2026',
    title: 'Founder & Director',
    company: 'Hello Probash Sheba (helloprobashsheba.com)',
    description: 'Established an expat emergency helpline, legal aid network, document processing, and classified community services portal.'
  },
  {
    id: 4,
    date: '2026',
    title: 'Founder',
    company: 'Hello Probash Mart (probashmart.com)',
    description: 'Launched an international e-commerce marketplace delivering authentic homeland foods, ethnic groceries, and daily consumer essentials.'
  },
  {
    id: 5,
    date: '2026',
    title: 'Founder',
    company: 'Hello Carry',
    description: 'Pioneered an expatriate logistics, passenger luggage delivery, and cross-border diaspora courier support network.'
  },
  {
    id: 6,
    date: '2026',
    title: 'Founder & Managing Director',
    company: 'Hello Probash Tech (probashtech.com)',
    description: 'Full-cycle enterprise software engineering studio, mobile application development, and cloud systems architect behind the entire Hello ecosystem.'
  },
  {
    id: 7,
    date: '2026',
    title: 'Founder',
    company: 'Booking Sylhet (bookingsylhet.com)',
    description: 'Dedicated regional travel, resort reservation, and domestic tourism guide portal celebrating the natural beauty of greater Sylhet.'
  }
];

const stats = [
  { value: '10+', label: 'Live Digital Platforms', icon: Layers },
  { value: '1M+', label: 'Global Audience Reach', icon: Users },
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
    transition: { staggerChildren: 0.08 }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = ['about', 'social', 'travel', 'ventures', 'journey'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <a href="#social">Social</a>
            <a href="#travel">Travel</a>
            <a href="#ventures">Ventures (10)</a>
            <a href="#expertise">Expertise</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-social-desktop">
            <a href="https://www.facebook.com/share/1Gdt8hxZuN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.tiktok.com/@musa_emon" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="TikTok">
              <TikTokIcon size={18} />
            </a>
            <a href="https://www.instagram.com/musa___emon?rpxt=MTMyeG9kb3NwZHRpZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.youtube.com/@musaemon" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="YouTube">
              <YouTubeIcon size={18} />
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
                  Explore 10 Ventures <ArrowUpRight size={18} />
                </a>
                <a href="#social" className="btn btn-secondary">
                  Social Spotlight
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
                <span>Active Founder • 10+ Live Ventures</span>
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

        {/* Unseen Bangladesh Style: Social Media Spotlight Section (Compact & Swipeable) */}
        <section id="social" className="social-showcase-section">
          <div className="container">
            <div className="social-header-wrap">
              <div className="social-title-left">
                <span className="section-subtitle">SOCIAL SPOTLIGHT</span>
                <h2 className="social-main-title">
                  Connect with <span className="text-gradient">Musa Emon</span>
                </h2>
              </div>
              <div className="social-scroll-hint">
                <span>Scroll or swipe to explore</span>
                <ChevronRight size={15} className="hint-arrow" />
              </div>
            </div>

            <div className="social-cards-track">
              {socialShowcaseCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a 
                    key={card.id}
                    href={card.url}
                    target={card.url.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`social-showcase-card ${card.theme}`}
                  >
                    {/* Background image & gradient overlay */}
                    <div className="social-card-bg">
                      <img src={card.image} alt={card.handle} className="social-card-img" />
                      <div className="social-card-overlay"></div>
                      <div className="social-card-platform-glow"></div>
                    </div>

                    {/* Card Content Overlay */}
                    <div className="social-card-inner">
                      <div className="social-card-top">
                        <div className="platform-badge">
                          <Icon size={14} />
                          <span>{card.platform}</span>
                        </div>
                        <span className="status-dot-pill" title="Verified Active">
                          <span className="status-dot"></span>
                        </span>
                      </div>

                      <div className="social-card-middle">
                        <div className="social-card-handle">{card.handle}</div>
                        <div className="social-card-tag">{card.tag}</div>
                        <div className="social-stat-badge">
                          <span className="stat-primary">{card.metrics}</span>
                          <span className="stat-secondary">{card.subMetrics}</span>
                        </div>
                      </div>

                      <div className="social-card-bottom">
                        <div className="social-card-action">
                          <span>{card.actionText}</span>
                          <ArrowUpRight size={13} className="action-arrow" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Travel & Expeditions Section */}
        <section id="travel" className="section travel-section">
          <div className="container">
            <div className="section-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
                <span className="section-subtitle">GLOBAL EXPEDITIONS & WANDERLUST</span>
                <h2>
                  World Traveler & <span className="text-gradient">Explorer</span>
                </h2>
                <p>
                  Capturing international horizons, expat lifestyles, and cultural crossroads across the Middle East, Southeast Asia, and Eurasia.
                </p>
                <div className="travel-header-stats">
                  <span className="travel-stat-pill">
                    <Compass size={14} /> 10+ Countries Explored
                  </span>
                  <span className="travel-stat-pill">
                    <Camera size={14} /> Licensed Influencer (L2644114)
                  </span>
                  <span className="travel-stat-pill">
                    <Plane size={14} /> Travel & Aviation Specialist
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="travel-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {travelDestinations.map((dest) => (
                <motion.div 
                  key={dest.id} 
                  className="travel-card"
                  variants={fadeUpVariant}
                >
                  <div className="travel-card-bg">
                    <img src={dest.image} alt={dest.country} className="travel-card-img" loading="lazy" />
                    <div className="travel-card-overlay"></div>
                  </div>

                  <div className="travel-card-inner">
                    <div className="travel-card-top">
                      <div className="travel-country-pill">
                        <span className="country-flag">{dest.flag}</span>
                        <span>{dest.country}</span>
                      </div>
                      <span className="travel-year-badge">{dest.year}</span>
                    </div>

                    <div className="travel-card-bottom">
                      <h3 className="travel-location">{dest.location}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                  A cohesive digital empire of 10 live platforms, travel engines, e-commerce, and community networks serving users daily.
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
                      {/* Card Header Banner Image */}
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-image" 
                          loading="lazy"
                        />
                        <div className="project-image-overlay">
                          <span className="live-pill">
                            <span className="dot-pulse"></span> Live Platform
                          </span>
                          <span className="domain-pill">
                            <Globe size={11} />
                            <span>{project.domain}</span>
                          </span>
                        </div>
                      </div>

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

                        {/* Direct Action Links (No Admin Portal buttons) */}
                        <div className="project-actions">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-project-link"
                          >
                            <span>Visit Live Website</span>
                            <ExternalLink size={15} />
                          </a>

                          {project.altLink && (
                            <a 
                              href={project.altLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn-project-alt"
                              title="Alternative Gateway"
                            >
                              <ExternalLink size={14} />
                              <span>ProbashTech.com</span>
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
                <span className="section-subtitle">BUILDING PLATFORMS FROM THE GROUND UP</span>
                <h2>
                  The Milestones of <span className="text-gradient">Building Platforms</span>
                </h2>
                <p>
                  Musa Emon — Architecting and scaling ventures from grassroots ideas into resilient global ecosystems.
                </p>
                <div className="journey-dev-badge-wrap">
                  <span className="journey-dev-badge">
                    <Sparkles size={14} className="sparkle-icon" /> Developed by <strong>Probash Tech</strong>
                  </span>
                </div>
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
            Whether exploring advertising across our 10 platforms, strategic partnerships, tech consulting, or global travel collaborations, I look forward to connecting.
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
          

          
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Musa Emon. All rights reserved.</p>
            <p className="developer-credit">
              Developed by <a href="https://probashtech.com" target="_blank" rel="noopener noreferrer"><strong>Probash Tech</strong></a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modern Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <a 
          href="#about" 
          className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}
        >
          <User size={19} />
          <span>About</span>
        </a>
        <a 
          href="#social" 
          className={`mobile-nav-item ${activeSection === 'social' ? 'active' : ''}`}
          onClick={() => setActiveSection('social')}
        >
          <Sparkles size={19} />
          <span>Social</span>
        </a>
        <a 
          href="#travel" 
          className={`mobile-nav-item ${activeSection === 'travel' ? 'active' : ''}`}
          onClick={() => setActiveSection('travel')}
        >
          <Compass size={19} />
          <span>Travel</span>
        </a>
        <a 
          href="#ventures" 
          className={`mobile-nav-item ${activeSection === 'ventures' ? 'active' : ''}`}
          onClick={() => setActiveSection('ventures')}
        >
          <Layers size={19} />
          <span>Ventures</span>
        </a>
        <a 
          href="#journey" 
          className={`mobile-nav-item ${activeSection === 'journey' ? 'active' : ''}`}
          onClick={() => setActiveSection('journey')}
        >
          <Award size={19} />
          <span>Journey</span>
        </a>
      </nav>
    </>
  );
}

export default App;
