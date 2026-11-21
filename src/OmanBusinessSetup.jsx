import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ShieldCheck, Clock, ArrowRight, 
  ExternalLink, MessageCircle, Building2, Download, 
  ArrowLeft, FileText, Check, Phone, ChevronDown, ChevronUp,
  UserCheck, Send
} from 'lucide-react';
import './business-setup.css';

const WHATSAPP_NUMBER = '96894578538';
const WHATSAPP_DISPLAY = '+968 94578538';

export default function OmanBusinessSetup({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    businessActivity: 'General Trading / Retail'
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

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Musa Emon & Hello Founders,
I am interested in setting up a business in Oman with 100% foreign ownership.

• Name: ${formData.fullName || 'Not provided'}
• WhatsApp: ${formData.whatsappNumber || 'Not provided'}
• Business Activity: ${formData.businessActivity}

Please share the consultation and registration details. Thank you!`;

    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Can foreign nationals own 100% of a company in Oman without an Omani sponsor?',
      a: 'Yes. Under the Oman Foreign Capital Investment Law (FCIL), foreign entrepreneurs and expatriates can own 100% of an SPC (Single Person Company) or LLC without needing a local Omani sponsor or partner.'
    },
    {
      q: 'How long does the entire registration process take?',
      a: 'Once your passport copies, proposed trade names, and activity selection are submitted, the official registration and Commercial Registration (CR) issuance takes approximately 10 working days.'
    },
    {
      q: 'Can I apply for an Investor Visa after receiving the company CR?',
      a: 'Yes. Once your Commercial Registration (CR) is officially issued, you are legally eligible to apply for Investor Residence Visas for yourself and employment visas for your team.'
    },
    {
      q: 'What types of business activities are permitted?',
      a: 'Most commercial sectors are open to 100% foreign ownership, including cafes and restaurants, general trading, IT and digital services, contracting, maintenance, logistics, and management consulting.'
    }
  ];

  return (
    <div className="obs-clean-page">
      {/* Top Navbar */}
      <nav className="obs-navbar">
        <div className="obs-container obs-navbar-inner">
          <div className="obs-logo-wrap" onClick={onNavigateHome}>
            <img 
              src="/hello-founders-logo.png" 
              alt="Hello Founders Business Solutions" 
              className="obs-brand-logo" 
            />
          </div>

          <div className="obs-nav-actions">
            <button onClick={onNavigateHome} className="obs-btn-back">
              <ArrowLeft size={16} /> <span>Musa Emon Portfolio</span>
            </button>
            <a 
              href={createWhatsAppUrl("Hello Musa Emon, I want to inquire about Oman Business Setup.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="obs-btn-wa-header"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Advisory</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="obs-hero">
        <div className="obs-container">
          <div className="obs-hero-content">
            <div className="obs-tag">
              <span className="obs-tag-dot"></span>
              <span>SULTANATE OF OMAN • 100% FOREIGN OWNERSHIP APPROVED</span>
            </div>

            <h1 className="obs-title">
              Start Your Business in Oman with <span className="obs-highlight">100% Direct Ownership</span>
            </h1>

            <p className="obs-subtitle">
              Form your company in Oman with complete legal independence and zero local sponsor (kafeel) requirement. We manage your Commercial Registration (CR), Chamber of Commerce membership, tax registration, and government approvals in just 10 working days.
            </p>

            <div className="obs-hero-points">
              <div className="obs-h-point">
                <ShieldCheck size={20} className="obs-icon-green" />
                <span>100% Sole (SPC) or Partner (LLC) Ownership</span>
              </div>
              <div className="obs-h-point">
                <Clock size={20} className="obs-icon-green" />
                <span>Fast 10 Working Days Registration</span>
              </div>
              <div className="obs-h-point">
                <CheckCircle2 size={20} className="obs-icon-green" />
                <span>Direct Legal Registration under MOCIIP</span>
              </div>
              <div className="obs-h-point">
                <UserCheck size={20} className="obs-icon-green" />
                <span>Direct Ground Guidance by Musa Emon</span>
              </div>
            </div>

            <div className="obs-hero-cta-group">
              <a 
                href={createWhatsAppUrl("Hello Musa Emon, I would like to book a free consultation for starting my business in Oman.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="obs-btn-primary"
              >
                <MessageCircle size={20} />
                <span>Book Free WhatsApp Consultation</span>
              </a>

              <a 
                href="/Hello_Founders_Oman_Business_Setup.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="obs-btn-outline"
              >
                <Download size={18} />
                <span>Download Official PDF Brochure</span>
              </a>
            </div>

            <p className="obs-helpline">
              Direct Helpline: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a> (WhatsApp / Call)
            </p>
          </div>
        </div>
      </section>

      {/* Services Included Section (No Prices) */}
      <section className="obs-section obs-section-alt">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-sub-tag">COMPREHENSIVE SERVICES</span>
            <h2>What We Handle For Your Setup</h2>
            <p>End-to-end commercial licensing and statutory compliance from start to finish.</p>
          </div>

          <div className="obs-services-grid">
            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <Building2 size={24} />
              </div>
              <h3>Commercial Registration (CR)</h3>
              <p>Official 3-year commercial registration certificate issued directly by the Ministry of Commerce, Industry and Investment Promotion (MOCIIP).</p>
            </div>

            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Oman Chamber of Commerce</h3>
              <p>1-year active Chamber of Commerce and Industry (OCCI) certificate required for official trade, banking, and commercial tenders.</p>
            </div>

            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <FileText size={24} />
              </div>
              <h3>Official Stamp & Letterhead</h3>
              <p>Certified corporate seal and government-aligned letterhead template for contracts, invoices, and bank correspondence.</p>
            </div>

            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3>Tax Authority Registration</h3>
              <p>Official registration with the Oman Tax Authority (OTA) and issuance of your corporate tax identification number.</p>
            </div>

            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <UserCheck size={24} />
              </div>
              <h3>ROP & Ministry of Labour</h3>
              <p>Electronic portal setup and security clearance registration with the Royal Oman Police (ROP) and Ministry of Labour.</p>
            </div>

            <div className="obs-service-card">
              <div className="obs-svc-icon">
                <ArrowRight size={24} />
              </div>
              <h3>Banking & Visa Assistance</h3>
              <p>Complete procedural guidance for corporate bank account opening, partner/investor residency visas, and local municipal approvals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="obs-section">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-sub-tag">SIMPLE ROADMAP</span>
            <h2>How It Works in 3 Clear Steps</h2>
            <p>A fast, structured process to get your company up and running in 10 working days.</p>
          </div>

          <div className="obs-steps-grid">
            <div className="obs-step-card">
              <div className="obs-step-number">01</div>
              <h3>Submit Basic Details</h3>
              <p>Share your passport copy, proposed company names (3 choices), and desired business activity with our team.</p>
            </div>

            <div className="obs-step-card">
              <div className="obs-step-number">02</div>
              <h3>Ministry Filing & Approvals</h3>
              <p>We submit the government filings, secure name reservation, Chamber of Commerce certificate, and police clearance.</p>
            </div>

            <div className="obs-step-card">
              <div className="obs-step-number">03</div>
              <h3>License Delivery & Launch</h3>
              <p>Receive your official Commercial Registration (CR), corporate stamp, and begin operating your business in Oman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="obs-section obs-section-alt">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-sub-tag">CHECKLIST</span>
            <h2>Requirements From Your Side</h2>
            <p>You only need to provide basic identity information. We manage all paperwork.</p>
          </div>

          <div className="obs-req-grid">
            <div className="obs-req-item">
              <Check className="obs-icon-green" size={20} />
              <div>
                <strong>Valid Passport Copy</strong>
                <p>Clear scan of passport (minimum 6 months validity) for all partners.</p>
              </div>
            </div>

            <div className="obs-req-item">
              <Check className="obs-icon-green" size={20} />
              <div>
                <strong>3 Preferred Company Names</strong>
                <p>Unique trade names in order of preference for ministerial reservation.</p>
              </div>
            </div>

            <div className="obs-req-item">
              <Check className="obs-icon-green" size={20} />
              <div>
                <strong>Selected Business Activity</strong>
                <p>E.g. Coffee shop, general trading, IT software, contracting, or logistics.</p>
              </div>
            </div>

            <div className="obs-req-item">
              <Check className="obs-icon-green" size={20} />
              <div>
                <strong>Contact Details</strong>
                <p>Email address and active WhatsApp phone number for ministry notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Musa Emon Trust Section */}
      <section className="obs-section">
        <div className="obs-container">
          <div className="obs-founder-box">
            <div className="obs-founder-photo">
              <img 
                src="/musa-profile.webp" 
                alt="Musa Emon - Managing Director" 
              />
            </div>
            <div className="obs-founder-details">
              <span className="obs-sub-tag">LEADERSHIP & ADVISORY</span>
              <h2>Led by Musa Emon</h2>
              <p className="obs-founder-title">Managing Director • Hello Founders Business Solutions</p>
              <p className="obs-founder-bio">
                Founder of 10+ digital and commercial ventures across Oman and the GCC. Musa Emon and the Hello Founders team provide transparent, hands-on guidance to help entrepreneurs and foreign investors establish compliant, thriving businesses in Oman without unnecessary middlemen or delays.
              </p>
              <a 
                href={createWhatsAppUrl("Hello Musa Emon, I would like to speak directly with you regarding starting a business in Oman.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="obs-btn-primary"
              >
                <MessageCircle size={18} />
                <span>Chat Directly with Musa Emon</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Quick Inquiry Form */}
      <section className="obs-section obs-section-alt">
        <div className="obs-container">
          <div className="obs-form-box">
            <div className="obs-section-header" style={{ marginBottom: '24px' }}>
              <span className="obs-sub-tag">FREE CONSULTATION</span>
              <h2>Get in Touch Today</h2>
              <p>Leave your details and we'll reply on WhatsApp within minutes.</p>
            </div>

            <form onSubmit={handleInquirySubmit} className="obs-clean-form">
              <div className="obs-form-row">
                <input 
                  type="text" 
                  className="obs-input" 
                  placeholder="Your Full Name *" 
                  required 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
                <input 
                  type="text" 
                  className="obs-input" 
                  placeholder="WhatsApp Number (with country code) *" 
                  required 
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                />
              </div>

              <div className="obs-form-row">
                <input 
                  type="text" 
                  className="obs-input" 
                  placeholder="Intended Business Activity (e.g. Cafe, Trading, IT, etc.)" 
                  value={formData.businessActivity}
                  onChange={(e) => setFormData({...formData, businessActivity: e.target.value})}
                />
              </div>

              <button type="submit" className="obs-btn-submit">
                <Send size={18} />
                <span>Submit & Connect on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="obs-section">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-sub-tag">FAQ</span>
            <h2>Common Questions</h2>
          </div>

          <div className="obs-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="obs-faq-card">
                  <button 
                    className="obs-faq-header" 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    type="button"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="obs-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="obs-footer">
        <div className="obs-container">
          <div className="obs-footer-content">
            <img 
              src="/hello-founders-logo.png" 
              alt="Hello Founders" 
              className="obs-footer-logo"
            />
            <p className="obs-footer-desc">
              <strong>Hello Founders Business Solutions</strong> — Trusted company formation in the Sultanate of Oman.
            </p>
            <p className="obs-footer-links">
              Website: <a href="https://www.founderbs.com" target="_blank" rel="noopener noreferrer">www.founderbs.com</a> • WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
            </p>
            <p className="obs-footer-copy">
              © {new Date().getFullYear()} Musa Emon & Hello Founders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Sticky WhatsApp Button */}
      <div className="obs-floating-wa">
        <a 
          href={createWhatsAppUrl("Hello Musa Emon, I want to inquire about Oman Business Setup.")} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="obs-floating-btn"
        >
          <MessageCircle size={22} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
