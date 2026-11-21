import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ShieldCheck, Clock, CreditCard, ArrowRight, 
  ExternalLink, AlertCircle, Sparkles, Phone, MessageCircle, 
  Building2, Users, Award, HelpCircle, Send, ChevronDown, 
  ChevronUp, Download, ArrowLeft, FileText, Check, Briefcase,
  MapPin, Stamp, Scale, Star, Zap, Coffee, ShoppingCart, 
  Laptop, Hammer, Truck, ShieldAlert, ArrowUpRight
} from 'lucide-react';
import './business-setup.css';

const WHATSAPP_NUMBER = '96894578538';
const WHATSAPP_DISPLAY = '+968 94578538';

// Custom SVG Logo for Hello Founders Business Solutions
const HelloFoundersLogo = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#hfGrad)" />
    <path d="M14 15V33M34 15V33M14 24H34" stroke="#070C18" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="15" r="3" fill="#070C18" />
    <defs>
      <linearGradient id="hfGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

export default function OmanBusinessSetup({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    licenseType: 'SPC License (OMR 400) - 100% Sole Ownership',
    businessActivity: 'Coffee Shop / Specialty Cafe',
    targetCity: 'Muscat (Capital City)',
    additionalNotes: ''
  });

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "100% Foreign Ownership Oman Company Setup | Hello Founders & Musa Emon";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const createWhatsAppUrl = (customMessage) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Musa Emon & Hello Founders Team,
I would like to book a consultation for Oman Business Setup.

Here are my company formation details:
• Full Name: ${formData.fullName || 'Not provided'}
• Contact / WhatsApp: ${formData.whatsappNumber || 'Not provided'}
• Preferred License: ${formData.licenseType}
• Business Activity: ${formData.businessActivity}
• Target Location: ${formData.targetCity}
${formData.additionalNotes ? `• Notes / Questions: ${formData.additionalNotes}` : ''}

Please guide me through the registration timeline and next steps. Thank you!`;

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Can foreign nationals own 100% of a company in Oman without an Omani sponsor?',
      a: 'Yes, absolutely. Under the Oman Foreign Capital Investment Law (FCIL - Royal Decree 50/2019), foreign investors and expatriates can own 100% of their commercial company (SPC or LLC) without requiring an Omani local partner, sponsor, or kafeel.'
    },
    {
      q: 'What is the processing timeline to obtain the Commercial Registration (CR)?',
      a: 'Once all required documents (passport copies, proposed company names, and activity selection) are verified and submitted to the Ministry portal, the entire registration process takes approximately 10 working days.'
    },
    {
      q: 'How does the milestone-based payment structure work?',
      a: 'We operate with 100% transparency: 50% initial payment upon submission of the government application, and the remaining 50% only after your official Commercial Registration (CR) has been issued and approved by the Ministry.'
    },
    {
      q: 'What is the primary difference between an SPC and an LLC license?',
      a: 'An SPC (Single Person Company) is designed for a single entrepreneur who holds 100% shares and directorship. An LLC (Limited Liability Company) is tailored for 2 or more foreign partners or corporate shareholders holding distributed equity shares.'
    },
    {
      q: 'Can I obtain an Investor Visa after the company CR is issued?',
      a: 'Yes. Once the Commercial Registration (CR) is officially generated, you are legally entitled to apply for Investor Residence Visas for yourself and partner/employment visas for your staff. We provide complete end-to-end guidance for medical clearance, residency cards, and visa processing.'
    },
    {
      q: 'What costs are NOT included in the OMR 400 / OMR 520 package?',
      a: 'To guarantee absolute honesty with no surprises: Investor Visas, physical office or retail space rent, lease agreement certification (Aqd Ejari), and Municipality licensing (Baladiya) are not included. However, our team provides full operational assistance to fulfill these requirements smoothly.'
    }
  ];

  const businessActivities = [
    { icon: Coffee, title: 'Cafes & Restaurants', desc: 'Specialty coffee shops, fine dining, quick service & cloud kitchens.' },
    { icon: ShoppingCart, title: 'General Trading & Retail', desc: 'Import, export, wholesale distribution, supermarkets & boutiques.' },
    { icon: Laptop, title: 'IT & Digital Services', desc: 'Software engineering, digital agencies, marketing & e-commerce.' },
    { icon: Hammer, title: 'Contracting & Maintenance', desc: 'Civil construction, interior fit-outs, MEP & property maintenance.' },
    { icon: Truck, title: 'Logistics & Tourism', desc: 'Freight forwarding, travel agencies, corporate transportation & tours.' },
    { icon: Briefcase, title: 'Consultancy & Facilities', desc: 'Management consulting, cleaning services & facility management.' }
  ];

  return (
    <div className="business-setup-page">
      {/* Top Navigation */}
      <nav className="obs-nav">
        <div className="obs-container obs-nav-container">
          <div className="obs-brand" onClick={onNavigateHome}>
            <HelloFoundersLogo />
            <div className="obs-brand-info">
              <h1>Hello Founders</h1>
              <span>BUSINESS SOLUTIONS • OMAN</span>
            </div>
          </div>

          <div className="obs-nav-menu">
            <a href="#packages">Pricing & Packages</a>
            <a href="#features">Inclusions</a>
            <a href="#requirements">Requirements</a>
            <a href="#process">Roadmap</a>
            <a href="#leadership">Leadership</a>
            <a href="#booking">Book Advisory</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="obs-nav-right">
            <button onClick={onNavigateHome} className="obs-btn-portfolio-back">
              <ArrowLeft size={16} /> <span>Musa Emon Portfolio</span>
            </button>
            <a 
              href={createWhatsAppUrl("Hello Musa Emon, I want to inquire about Oman Business Setup packages (SPC/LLC).")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="obs-btn-whatsapp-pill"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Advisory</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="obs-hero-section">
        <div className="obs-container">
          <div className="obs-hero-grid">
            {/* Left Column: Headlines & Actions */}
            <div className="obs-hero-left">
              <div className="obs-pill-tag">
                <Sparkles size={14} />
                <span>SULTANATE OF OMAN • 100% FOREIGN OWNERSHIP APPROVED</span>
              </div>

              <h1 className="obs-hero-headline">
                Establish Your Company in Oman with <span className="gold-gradient">100% Direct Ownership</span>
              </h1>

              <p className="obs-hero-description">
                Form your company in Oman under full legal independence without any local sponsor or Omani kafeel. Complete Commercial Registration (CR), Chamber of Commerce membership, tax card, and police clearance in <strong>just 10 working days</strong>.
              </p>

              <div className="obs-hero-trust-badges">
                <div className="obs-trust-item">
                  <ShieldCheck size={18} /> <span>100% Sole or Partner Ownership</span>
                </div>
                <div className="obs-trust-item">
                  <Clock size={18} /> <span>10 Business Days Turnaround</span>
                </div>
                <div className="obs-trust-item">
                  <CreditCard size={18} /> <span>All Government Fees Included</span>
                </div>
                <div className="obs-trust-item">
                  <CheckCircle2 size={18} /> <span>50% Advance & 50% on CR Delivery</span>
                </div>
              </div>

              <div className="obs-hero-actions">
                <a 
                  href={createWhatsAppUrl("Hello Musa Emon, I want to book a free consultation for starting my business in Oman.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="obs-btn-primary-wa"
                >
                  <MessageCircle size={20} />
                  <span>Book Free WhatsApp Advisory</span>
                </a>

                <a href="#packages" className="obs-btn-secondary-price">
                  <span>View All Packages</span>
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="obs-hero-direct-call">
                <Phone size={15} color="#fbbf24" />
                <span>Direct Advisory Helpline: <strong>{WHATSAPP_DISPLAY}</strong></span>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="obs-hero-showcase-card">
              <div className="obs-hero-img-wrap">
                <img 
                  src="/oman-skyline-hero.jpg" 
                  alt="Muscat Modern Financial District Skyline" 
                  className="obs-hero-img"
                />
                <div className="obs-hero-img-overlay"></div>
                <div className="obs-img-badge">
                  <span className="obs-img-badge-dot"></span>
                  <span>MOCIIP Government Verified</span>
                </div>
              </div>

              <div className="obs-showcase-body">
                <div className="obs-showcase-meta">
                  <h3 className="obs-showcase-title">Oman Corporate Formation</h3>
                  <span className="obs-showcase-origin">Muscat, Sultanate of Oman</span>
                </div>

                <div className="obs-showcase-stats-strip">
                  <div className="obs-stat-col">
                    <strong>100%</strong>
                    <span>Direct Shares</span>
                  </div>
                  <div className="obs-stat-col">
                    <strong>10 Days</strong>
                    <span>Fast Issuance</span>
                  </div>
                  <div className="obs-stat-col">
                    <strong>400 OMR</strong>
                    <span>Starting Price</span>
                  </div>
                </div>

                <p className="obs-showcase-quote">
                  "Streamlining international business entry into the Sultanate with zero middlemen markups and guaranteed legal clarity."
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Counter Strip */}
          <div className="obs-metrics-bar">
            <div className="obs-metric-box">
              <div className="obs-metric-number">100%</div>
              <div className="obs-metric-title">Foreign Ownership</div>
              <div className="obs-metric-sub">No Local Sponsor Needed</div>
            </div>

            <div className="obs-metric-box">
              <div className="obs-metric-number">10 Days</div>
              <div className="obs-metric-title">Standard Processing</div>
              <div className="obs-metric-sub">Fast Government Filing</div>
            </div>

            <div className="obs-metric-box">
              <div className="obs-metric-number">400 OMR</div>
              <div className="obs-metric-title">All-Inclusive Fee</div>
              <div className="obs-metric-sub">Zero Hidden Surcharges</div>
            </div>

            <div className="obs-metric-box">
              <div className="obs-metric-number">50 / 50</div>
              <div className="obs-metric-title">Milestone Payments</div>
              <div className="obs-metric-sub">Pay 50% upon CR Copy</div>
            </div>
          </div>
        </div>
      </header>

      {/* Packages & Pricing Section */}
      <section id="packages" className="obs-section" style={{ background: 'rgba(15, 23, 42, 0.45)' }}>
        <div className="obs-container">
          <div className="obs-section-head">
            <span className="obs-section-pill">FORMATION PACKAGES & PRICING</span>
            <h2 className="obs-section-title">All-Inclusive Government Licensing Packages</h2>
            <p className="obs-section-lead">
              Complete A-to-Z setup with all official government fees covered. Choose the corporate structure tailored to your business ambitions.
            </p>
          </div>

          <div className="obs-pricing-cards-grid">
            {/* Card 1: SPC License */}
            <div className="obs-card-plan">
              <span className="obs-plan-badge-top blue-badge">Solo Founders & Consultants</span>
              
              <div className="obs-plan-header">
                <h3 className="obs-plan-name">SPC License</h3>
                <p className="obs-plan-desc">Single Person Company · 100% Sole Individual Ownership</p>

                <div className="obs-plan-price-row">
                  <span className="obs-plan-currency">OMR</span>
                  <span className="obs-plan-amount">400</span>
                </div>
                <div className="obs-plan-all-inclusive-tag">
                  <Check size={16} /> All Official Government Fees Included
                </div>
              </div>

              <ul className="obs-plan-features-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>3-Year Commercial Registration (CR)</strong> from Ministry of Commerce</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>1-Year Oman Chamber of Commerce (OCCI)</strong> active membership</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Official Corporate <strong>Stamp & Registered Letterhead</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Tax Authority Registration</strong> & Corporate Tax Identification</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Royal Oman Police (ROP)</strong> clearance & electronic registry</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Ministry of Labour</strong> corporate portal account registration</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Processing Time: <strong>10 Business Days</strong> from document submission</span>
                </li>
                <li>
                  <CreditCard size={18} />
                  <span>Payment Terms: <strong>50% Advance</strong> + <strong>50% upon official CR issuance</strong></span>
                </li>
              </ul>

              <a 
                href={createWhatsAppUrl("Hello Musa Emon, I want to select the SPC License Package (OMR 400). Please share the setup requirements.")}
                target="_blank"
                rel="noopener noreferrer"
                className="obs-btn-card-action gold-action"
              >
                <MessageCircle size={20} />
                <span>Select SPC Package (OMR 400)</span>
              </a>
            </div>

            {/* Card 2: LLC License */}
            <div className="obs-card-plan highlighted">
              <span className="obs-plan-badge-top">Partnerships & Enterprises</span>
              
              <div className="obs-plan-header">
                <h3 className="obs-plan-name">LLC License</h3>
                <p className="obs-plan-desc">Limited Liability Company · Multi-Partner Corporate Entity</p>

                <div className="obs-plan-price-row">
                  <span className="obs-plan-currency">OMR</span>
                  <span className="obs-plan-amount">520</span>
                </div>
                <div className="obs-plan-all-inclusive-tag">
                  <Check size={16} /> All Official Government Fees Included
                </div>
              </div>

              <ul className="obs-plan-features-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>3-Year Commercial Registration (CR)</strong> for multi-shareholder entity</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>1-Year Oman Chamber of Commerce (OCCI)</strong> active membership</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Official Corporate <strong>Stamp & Registered Letterhead</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Tax Authority Registration</strong> & Corporate Tax Identification</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Royal Oman Police (ROP)</strong> clearance & partner registry</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Ministry of Labour</strong> corporate portal account registration</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Processing Time: <strong>10 Business Days</strong> from document submission</span>
                </li>
                <li>
                  <CreditCard size={18} />
                  <span>Payment Terms: <strong>50% Advance</strong> + <strong>50% upon official CR issuance</strong></span>
                </li>
              </ul>

              <a 
                href={createWhatsAppUrl("Hello Musa Emon, I want to select the LLC License Package (OMR 520). Please share the setup requirements.")}
                target="_blank"
                rel="noopener noreferrer"
                className="obs-btn-card-action green-action"
              >
                <MessageCircle size={20} />
                <span>Select LLC Package (OMR 520)</span>
              </a>
            </div>
          </div>

          {/* Payment Terms Strip */}
          <div className="obs-payment-milestone-bar">
            <div className="obs-milestone-item">
              <div className="obs-milestone-badge">50%</div>
              <div className="obs-milestone-text">
                <h4>Initial Advance Payment</h4>
                <p>Due upon initial engagement and formal government portal application filing.</p>
              </div>
            </div>
            <div className="obs-milestone-item">
              <div className="obs-milestone-badge">50%</div>
              <div className="obs-milestone-text">
                <h4>Final Settlement on Delivery</h4>
                <p>Due only after your Commercial Registration (CR) is officially approved and copy is in hand.</p>
              </div>
            </div>
          </div>

          {/* Exclusions Notice */}
          <div className="obs-exclusions-wrapper">
            <h4><AlertCircle size={20} /> Exclusions from Base Formation Package (Not Included):</h4>
            <ul className="obs-exclusions-list">
              <li><span className="cross-icon">✕</span> Investor & Employment Visa Application Fees</li>
              <li><span className="cross-icon">✕</span> Commercial Office or Retail Premises Rent</li>
              <li><span className="cross-icon">✕</span> Registered Tenancy Contract (Aqd Ejari)</li>
              <li><span className="cross-icon">✕</span> Municipality License (Baladiya Operations License)</li>
            </ul>
            <p className="obs-exclusions-note">
              * Regulatory Notice: Terms, statutory timelines, and government fee schedules are subject to adjustments in accordance with official Omani Ministerial decrees. Any regulatory amendments will be coordinated transparently.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Section */}
      <section id="leadership" className="obs-section obs-founder-section">
        <div className="obs-container">
          <div className="obs-founder-grid">
            {/* Founder Image with Glass Card */}
            <div className="obs-founder-media">
              <img 
                src="/musa-profile.webp" 
                alt="Musa Emon - Founder & Managing Director" 
                className="obs-founder-img"
              />
              <div className="obs-founder-overlay-card">
                <div className="obs-founder-name">Musa Emon</div>
                <div className="obs-founder-role">Founder & Managing Director • Hello Founders</div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="obs-founder-text-col">
              <span className="obs-section-pill">EXECUTIVE ADVISORY & EXPERTISE</span>
              <h2 className="obs-section-title" style={{ textAlign: 'left' }}>
                Backed by Real Ground Experience in the Omani Ecosystem
              </h2>
              <p>
                Navigating business setup in the GCC should be transparent, secure, and devoid of hidden middleman markups. As the founder of 10+ digital ventures across Oman and the GCC reaching an active network of 1.5M+ individuals, I lead Hello Founders Business Solutions with one core principle: <strong>uncompromising transparency</strong>.
              </p>
              <p>
                From initial name approvals to final bank accounts, we ensure your capital, legal equity, and commercial licenses remain 100% protected under your direct ownership.
              </p>

              <div className="obs-founder-points">
                <div className="obs-f-point">
                  <ShieldCheck size={20} />
                  <span>Direct advisory on business categorization, legal quotas, and shareholder agreements.</span>
                </div>
                <div className="obs-f-point">
                  <Award size={20} />
                  <span>Seamless connection to corporate banking, office space sourcing, and visa assistance.</span>
                </div>
                <div className="obs-f-point">
                  <Users size={20} />
                  <span>Multilingual communication support across English, Arabic, and Bengali.</span>
                </div>
              </div>

              <div>
                <a 
                  href={createWhatsAppUrl("Hello Musa Emon, I would like to consult directly with you regarding starting my business in Oman.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="obs-btn-primary-wa"
                  style={{ marginTop: '10px' }}
                >
                  <MessageCircle size={20} />
                  <span>Consult Directly with Musa Emon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="obs-section">
        <div className="obs-container">
          <div className="obs-section-head">
            <span className="obs-section-pill">SIMPLE CHECKLIST</span>
            <h2 className="obs-section-title">What We Require From You</h2>
            <p className="obs-section-lead">
              You only need basic personal identification and commercial preferences. We handle all intricate government paperwork and portal filings.
            </p>
          </div>

          <div className="obs-req-cards-grid">
            <div className="obs-req-card-box">
              <div className="obs-req-step-num">1</div>
              <div className="obs-req-step-info">
                <h4>Valid Passport Copies</h4>
                <p>High-resolution clear scan copies of passports for all partners/shareholders (minimum 6 months validity).</p>
              </div>
            </div>

            <div className="obs-req-card-box">
              <div className="obs-req-step-num">2</div>
              <div className="obs-req-step-info">
                <h4>Official Email Address</h4>
                <p>Active corporate or personal email for ministry notifications and registration credentials.</p>
              </div>
            </div>

            <div className="obs-req-card-box">
              <div className="obs-req-step-num">3</div>
              <div className="obs-req-step-info">
                <h4>Active Mobile Number</h4>
                <p>Omani or international phone number with active WhatsApp for continuous real-time progress updates.</p>
              </div>
            </div>

            <div className="obs-req-card-box">
              <div className="obs-req-step-num">4</div>
              <div className="obs-req-step-info">
                <h4>3 Preferred Trade Names</h4>
                <p>Three unique company name choices (in English and Arabic) in order of preference for ministerial reservation.</p>
              </div>
            </div>

            <div className="obs-req-card-box">
              <div className="obs-req-step-num">5</div>
              <div className="obs-req-step-info">
                <h4>Target Business Location</h4>
                <p>Designated Willayat and Governorate in Oman (e.g., Muscat, Seeb, Ruwi, Salalah, Sohar, Nizwa).</p>
              </div>
            </div>

            <div className="obs-req-card-box">
              <div className="obs-req-step-num">6</div>
              <div className="obs-req-step-info">
                <h4>Ownership Structure</h4>
                <p>Sole proprietorship details (for SPC) or partner shareholder names and respective equity ratios (for LLC).</p>
              </div>
            </div>

            <div className="obs-req-card-box wide">
              <div className="obs-req-step-num">7</div>
              <div className="obs-req-step-info">
                <h4>Intended Business Activities & Sector</h4>
                <p>Specific commercial activities to be registered under the Commercial Registration (e.g., Specialty Coffee Shop, General Trading, IT Software Engineering, Facilities Management, Construction, Logistics, etc.).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Roadmap */}
      <section id="process" className="obs-section" style={{ background: 'rgba(15, 23, 42, 0.45)' }}>
        <div className="obs-container">
          <div className="obs-section-head">
            <span className="obs-section-pill">STREAMLINED ROADMAP</span>
            <h2 className="obs-section-title">From Concept to Commercial License in 4 Steps</h2>
            <p className="obs-section-lead">
              Our proven procedural roadmap ensures fast execution, full statutory compliance, and zero wasted time.
            </p>
          </div>

          <div className="obs-process-timeline-grid">
            <div className="obs-timeline-card-step">
              <div className="obs-step-icon-circle">
                <FileText size={26} />
              </div>
              <span className="obs-step-tag-pill">STEP 01</span>
              <h4>Consultation & Papers</h4>
              <p>Discuss your business vision on WhatsApp, review required documentation, and finalize your proposed company names.</p>
            </div>

            <div className="obs-timeline-card-step">
              <div className="obs-step-icon-circle">
                <CreditCard size={26} />
              </div>
              <span className="obs-step-tag-pill">STEP 02</span>
              <h4>50% Initial Payment</h4>
              <p>Confirm engagement with a 50% advance to initiate ministerial name reservation and electronic portal application.</p>
            </div>

            <div className="obs-timeline-card-step">
              <div className="obs-step-icon-circle">
                <Scale size={26} />
              </div>
              <span className="obs-step-tag-pill">STEP 03</span>
              <h4>Ministry Filing & Approval</h4>
              <p>Ministry processing, Chamber of Commerce registration, Tax card filing, and ROP clearance within 10 working days.</p>
            </div>

            <div className="obs-timeline-card-step">
              <div className="obs-step-icon-circle">
                <CheckCircle2 size={26} />
              </div>
              <span className="obs-step-tag-pill">STEP 04</span>
              <h4>Final 50% & Handover</h4>
              <p>Inspect your approved Commercial Registration (CR), complete final payment settlement, and receive official stamp and papers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Business Verticals */}
      <section className="obs-section">
        <div className="obs-container">
          <div className="obs-section-head">
            <span className="obs-section-pill">OPPORTUNITIES IN OMAN</span>
            <h2 className="obs-section-title">High-Growth Sectors for Foreign Investors</h2>
            <p className="obs-section-lead">
              Oman's strategic position, modern infrastructure, and business-friendly policies offer immense growth potential across diverse commercial industries.
            </p>
          </div>

          <div className="obs-activities-grid">
            {businessActivities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="obs-activity-item">
                  <div className="obs-activity-icon">
                    <Icon size={22} />
                  </div>
                  <div className="obs-activity-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Consultation / Booking Form */}
      <section id="booking" className="obs-section" style={{ background: 'rgba(15, 23, 42, 0.45)' }}>
        <div className="obs-container">
          <div className="obs-consultation-form-wrap">
            <div className="obs-form-intro">
              <span className="obs-section-pill">DIRECT ADVISORY BOOKING</span>
              <h3>Book Your Free Oman Business Advisory</h3>
              <p>Fill out your initial preferences below to connect instantly with Musa Emon on WhatsApp for tailored corporate advice.</p>
            </div>

            <form onSubmit={handleConsultationSubmit}>
              <div className="obs-inputs-grid">
                <div className="obs-field-item">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    className="obs-custom-input" 
                    placeholder="e.g. Johnathan Miller" 
                    required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="obs-field-item">
                  <label>Active WhatsApp / Phone Number *</label>
                  <input 
                    type="text" 
                    className="obs-custom-input" 
                    placeholder="e.g. +968 94578538 or +1 (555) 012-3456" 
                    required 
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                  />
                </div>

                <div className="obs-field-item">
                  <label>Target License Package</label>
                  <select 
                    className="obs-custom-select"
                    value={formData.licenseType}
                    onChange={(e) => setFormData({...formData, licenseType: e.target.value})}
                  >
                    <option value="SPC License (OMR 400) - 100% Sole Ownership">SPC License (OMR 400) - 100% Sole Ownership</option>
                    <option value="LLC License (OMR 520) - Multi-Partner Entity">LLC License (OMR 520) - Multi-Partner Entity</option>
                    <option value="Need Professional Recommendation">Undecided / Need Professional Recommendation</option>
                  </select>
                </div>

                <div className="obs-field-item">
                  <label>Target Business Activity / Industry</label>
                  <select 
                    className="obs-custom-select"
                    value={formData.businessActivity}
                    onChange={(e) => setFormData({...formData, businessActivity: e.target.value})}
                  >
                    <option value="Coffee Shop / Specialty Cafe">Coffee Shop / Specialty Cafe</option>
                    <option value="Restaurant / Food & Beverage">Restaurant / Food & Beverage</option>
                    <option value="General Trading / Retail / Supermarket">General Trading / Retail / Supermarket</option>
                    <option value="IT, Software Development & Digital Media">IT, Software Development & Digital Media</option>
                    <option value="Cleaning, Facilities & Property Services">Cleaning, Facilities & Property Services</option>
                    <option value="Construction, Interior Fit-Out & MEP">Construction, Interior Fit-Out & MEP</option>
                    <option value="Tourism, Travel, Logistics & Transport">Tourism, Travel, Logistics & Transport</option>
                    <option value="Other Commercial Vertical">Other Commercial Vertical</option>
                  </select>
                </div>

                <div className="obs-field-item full-col">
                  <label>Preferred City in Oman or Specific Queries (Optional)</label>
                  <input 
                    type="text" 
                    className="obs-custom-input" 
                    placeholder="e.g. Muscat, Seeb, Salalah, or any initial questions regarding banking/visas..." 
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="obs-btn-submit-booking">
                <Send size={20} />
                <span>Submit & Connect with Musa Emon on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Official Documentation Sheet Banner */}
      <section className="obs-section" style={{ padding: '40px 0' }}>
        <div className="obs-container">
          <div className="obs-official-doc-strip">
            <div className="obs-doc-left">
              <div className="obs-doc-icon-wrap">
                <FileText size={28} />
              </div>
              <div className="obs-doc-details">
                <h4>Hello Founders Official Oman Business Setup Document (PDF)</h4>
                <p>Inspect our official company formation package specification and pricing brochure.</p>
              </div>
            </div>

            <div className="obs-doc-buttons">
              <a 
                href="/Hello_Founders_Oman_Business_Setup.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="obs-btn-doc-view"
              >
                <ExternalLink size={16} /> <span>Preview Document</span>
              </a>
              <a 
                href="/Hello_Founders_Oman_Business_Setup.pdf" 
                download="Hello_Founders_Oman_Business_Setup.pdf"
                className="obs-btn-doc-download"
              >
                <Download size={16} /> <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="obs-section">
        <div className="obs-container">
          <div className="obs-section-head">
            <span className="obs-section-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="obs-section-title">Answers to Essential Questions</h2>
            <p className="obs-section-lead">
              Clear legal and operational clarity before launching your corporate enterprise in the Sultanate.
            </p>
          </div>

          <div className="obs-faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="obs-faq-row">
                  <button 
                    className="obs-faq-toggle-btn" 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="obs-faq-panel-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Sticky Action Bar */}
      <div className="obs-floating-bar-wrap">
        <a 
          href={createWhatsAppUrl("Hello Musa Emon, I want to book a free consultation for starting my business in Oman.")}
          target="_blank"
          rel="noopener noreferrer"
          className="obs-floating-wa-link"
        >
          <MessageCircle size={22} />
          <span>Book Free WhatsApp Consultation | {WHATSAPP_DISPLAY}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="obs-footer-wrap">
        <div className="obs-container">
          <div className="obs-footer-inner">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <HelloFoundersLogo />
            </div>
            <h3>Hello Founders Business Solutions</h3>
            <p>
              Your trusted bridge to business success in the Sultanate of Oman. Established on principles of 100% legal integrity, transparency, and entrepreneurial excellence.
            </p>
            <p>
              Official Website: <a href="https://www.founderbs.com" target="_blank" rel="noopener noreferrer">www.founderbs.com</a> • Direct WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
            </p>
            <p style={{ marginTop: '28px', fontSize: '0.82rem', color: '#475569' }}>
              © {new Date().getFullYear()} Musa Emon & Hello Founders Business Solutions. All rights reserved. Technology powered by <a href="https://probashtech.com" target="_blank" rel="noopener noreferrer">Probash Tech</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
