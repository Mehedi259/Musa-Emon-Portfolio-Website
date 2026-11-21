import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ShieldCheck, Clock, CreditCard, ArrowRight, 
  ExternalLink, AlertCircle, Sparkles, Phone, MessageCircle, 
  Building2, Users, Award, HelpCircle, Send, ChevronDown, 
  ChevronUp, Download, ArrowLeft, FileText, Check, Briefcase,
  MapPin, Stamp, Scale, Star, Zap
} from 'lucide-react';
import './business-setup.css';

const WHATSAPP_NUMBER = '96894578538';
const WHATSAPP_DISPLAY = '+968 94578538';

export default function OmanBusinessSetup({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    licenseType: 'SPC License (OMR 400)',
    businessType: 'Coffee Shop / Restaurant',
    location: 'Muscat (মাস্কাট)',
    customNote: ''
  });

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ওমানে বিজনেস সেটআপ | 100% Own Ownership Company Setup in Oman - Musa Emon & Hello Founders";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const createWhatsAppLink = (message) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const leadMessage = `হ্যালো মুসা ইমন (Hello Founders),
আমি ওমানে বিজনেস সেটআপ করার জন্য আগ্রহী। আমার বিবরণ:
• নাম: ${formData.name || 'উল্লেখ নেই'}
• ফোন / হোয়াটসঅ্যাপ: ${formData.phone || 'উল্লেখ নেই'}
• কাঙ্ক্ষিত লাইসেন্স: ${formData.licenseType}
• ব্যবসার ধরন: ${formData.businessType}
• কাঙ্ক্ষিত লোকেশন: ${formData.location}
${formData.customNote ? `• বাড়তি প্রশ্ন: ${formData.customNote}` : ''}

দয়া করে কনসালটেশন ও পরবর্তী প্রসেস সম্পর্কে বিস্তারিত জানান। ধন্যবাদ!`;

    window.open(createWhatsAppLink(leadMessage), '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'ওমানে ১০০% নিজের নামে কোম্পানি খুলতে কি কোনো ওমানি কাফিল বা স্পনসর লাগবে?',
      a: 'না, কোনো ওমানি কাফিল বা লোকাল স্পনসরের প্রয়োজন নেই। ওমান সরকারের ফরেন ক্যাপিটাল ইনভেস্টমেন্ট ল (FCIL) অনুযায়ী বিদেশি উদ্যোক্তারা ১০০% একক বা পার্টনারশিপ মালিকানায় সম্পূর্ণ বৈধভাবে SPC বা LLC কোম্পানি প্রতিষ্ঠা করতে পারেন।'
    },
    {
      q: 'কোম্পানি লাইসেন্স ও সিআর পেতে কতদিন সময় লাগে?',
      a: 'পাসপোর্ট ও প্রয়োজনীয় সকল কাগজপত্র জমা দেওয়ার পর থেকে সরকারি প্রক্রিয়াকরণ সম্পন্ন হতে আনুমানিক ১০ কার্যদিবস (10 Working Days) সময় লাগে।'
    },
    {
      q: 'পেমেন্ট কীভাবে পরিশোধ করতে হবে? কোনো গোপন খরচ আছে কি?',
      a: 'পেমেন্ট একদম নিরাপদ ও কিস্তিতে: ৫০% কাজ শুরুর সময় (Advance) এবং বাকি ৫০% কমার্শিয়াল রেজিস্ট্রেশন (CR) অনুমোদন হয়ে অফিশিয়াল কপি হাতে পাওয়ার পর। সরকারি ফি সহ প্যাকেজের প্রাইস সম্পূর্ণ ফিক্সড, কোনো হিডেন বা সারপ্রাইজ চার্জ নেই।'
    },
    {
      q: 'SPC এবং LLC লাইসেন্সের মধ্যে মূল পার্থক্য কী?',
      a: 'SPC (Single Person Company) হলো একক মালিকানাধীন কোম্পানি, যেখানে আপনি নিজেই কোম্পানির ১০০% একক মালিক ও পরিচালক। আর LLC (Limited Liability Company) হলো ২ বা ততোধিক শেয়ারহোল্ডার/পার্টনারদের যৌথ কোম্পানি। আপনি যদি পার্টনার নিয়ে শুরু করতে চান তবে LLC আদর্শ।'
    },
    {
      q: 'সিআর (CR) পাওয়ার পর কি ইনভেস্টর ভিসা আবেদন করা যাবে?',
      a: 'হ্যাঁ, সিআর বের হওয়ার পর আপনি আপনার নিজের জন্য ইনভেস্টর ভিসা এবং আপনার প্রতিষ্ঠানের অধীনে পার্টনার বা এমপ্লয়ি ভিসা প্রসেস করতে পারবেন। ভিসা প্রসেসিং ও অন্যান্য ধাপেও আমরা আপনাকে সম্পূর্ণ গাইড করব।'
    },
    {
      q: 'প্যাকেজে কোন কোন খরচ অন্তর্ভুক্ত নয়?',
      a: 'স্বচ্ছতার স্বার্থে স্পষ্ট করে বলা আছে: ভিসা ফি, অফিস/দোকানের ভাড়া (Office Rent), রেন্ট এগ্রিমেন্ট (Tenancy Contract), এবং মিউনিসিপ্যালিটি লাইসেন্স (Municipality/Baladiya License) এই প্যাকেজ ফি-এর অন্তর্ভুক্ত নয়। তবে এগুলো সম্পন্ন করার প্রতিটি ধাপে আমরা সার্বক্ষণিক সহায়তা করব।'
    }
  ];

  return (
    <div className="business-setup-page">
      {/* Top Navbar */}
      <nav className="obs-nav">
        <div className="obs-nav-container">
          <div className="obs-brand" onClick={onNavigateHome}>
            <div className="obs-brand-logo">HF</div>
            <div className="obs-brand-text">
              <h1>Hello Founders</h1>
              <span>BUSINESS SOLUTIONS • OMAN</span>
            </div>
          </div>

          <div className="obs-nav-links">
            <a href="#packages" className="obs-nav-link">প্যাকেজ ও খরচ</a>
            <a href="#features" className="obs-nav-link">যা যা পাচ্ছেন</a>
            <a href="#requirements" className="obs-nav-link">প্রয়োজনীয় পেপারস</a>
            <a href="#process" className="obs-nav-link">প্রসেসিং ধাপ</a>
            <a href="#booking" className="obs-nav-link">কনসালটেশন ফর্ম</a>
            <a href="#faq" className="obs-nav-link">FAQ</a>
          </div>

          <div className="obs-nav-actions">
            <button onClick={onNavigateHome} className="obs-back-btn" title="মুসা ইমনের পোর্টফোলিওতে ফিরে যান">
              <ArrowLeft size={16} /> <span>Portfolio</span>
            </button>
            <a 
              href={createWhatsAppLink("হ্যালো মুসা ইমন, আমি ওমানে বিজনেস সেটআপ (SPC/LLC) সম্পর্কিত কনসালটেশন চাই।")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="obs-whatsapp-nav-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp চ্যাট</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="obs-hero">
        <div className="obs-container">
          <div className="obs-pill-badge">
            <Sparkles size={15} />
            <span>🇴🇲 ওমানে শতভাগ নিজের মালিকানায় কোম্পানি সেটআপ • কাফিলমুক্ত ব্যবসা</span>
          </div>

          <h1 className="obs-hero-title">
            ওমানে নিজের নামে <span className="gold-text">১০০% মালিকানায়</span> কোম্পানি শুরু করুন
          </h1>

          <p className="obs-hero-subtitle">
            কোনো ওমানি কাফিল বা লোকাল স্পনসর ছাড়া সম্পূর্ণ নিজের একক বা পার্টনারশিপ মালিকানায় ওমানে বৈধ Commercial Registration (CR), চেম্বার অব কমার্স ও সরকারি অনুমোদন নিন মাত্র ১০ কার্যদিবসে।
          </p>

          <div className="obs-hero-features-strip">
            <div className="obs-hero-feat-item">
              <ShieldCheck size={18} /> <span>১০০% একক বা পার্টনারশিপ মালিকানা</span>
            </div>
            <div className="obs-hero-feat-item">
              <Clock size={18} /> <span>মাত্র ১০ কার্যদিবসে ডেলিভারি</span>
            </div>
            <div className="obs-hero-feat-item">
              <CreditCard size={18} /> <span>A to Z সরকারি ফি সহ (নো হিডেন চার্জ)</span>
            </div>
            <div className="obs-hero-feat-item">
              <CheckCircle2 size={18} /> <span>৫০% শুরুতে, ৫০% CR পাওয়ার পর</span>
            </div>
          </div>

          <div className="obs-hero-cta-group">
            <a 
              href={createWhatsAppLink("হ্যালো মুসা ইমন, আমি ওমানে বিজনেস সেটআপ করার জন্য ফ্রি কনসালটেশন বুক করতে চাই।")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="obs-btn-primary-wa"
            >
              <MessageCircle size={22} />
              <span>হোয়াটসঅ্যাপে ফ্রি কনসালটেশন নিন</span>
            </a>
            
            <a href="#packages" className="obs-btn-secondary-price">
              <span>প্যাকেজ ও মূল্য তালিকা</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="obs-call-direct">
            <Phone size={16} color="#fbbf24" />
            <span>সরাসরি কল বা হোয়াটসঅ্যাপ করুন: <strong>{WHATSAPP_DISPLAY}</strong></span>
          </div>

          {/* Key Metrics Grid */}
          <div className="obs-metrics-grid">
            <div className="obs-metric-card">
              <div className="obs-metric-val">100%</div>
              <div className="obs-metric-label">নিজের নামে একক মালিকানা (No Local Sponsor)</div>
            </div>
            <div className="obs-metric-card">
              <div className="obs-metric-val">10 Days</div>
              <div className="obs-metric-label">দ্রুত সরকারি প্রসেসিং সময়সীমা</div>
            </div>
            <div className="obs-metric-card">
              <div className="obs-metric-val">400 OMR</div>
              <div className="obs-metric-label">সব সরকারি ফি সহ শুরু প্যাকেজ মূল্য</div>
            </div>
            <div className="obs-metric-card">
              <div className="obs-metric-val">50 / 50</div>
              <div className="obs-metric-label">নিরাপদ স্টেপ পেমেন্ট মেথড</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages & Pricing Section */}
      <section id="packages" className="obs-section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-section-tag">TRANSPARENT PRICING · প্যাকেজ ও ফি</span>
            <h2 className="obs-section-title">সরকারি ফি সহ A to Z সম্পূর্ণ খরচ</h2>
            <p className="obs-section-desc">
              কোনো লুকানো বা সারপ্রাইজ চার্জ নেই। আপনার ব্যবসার ধরন অনুযায়ী সেরা প্যাকেজটি বেছে নিন।
            </p>
          </div>

          <div className="obs-pricing-grid">
            {/* Card 1: SPC License */}
            <div className="obs-price-card">
              <span className="obs-badge-featured" style={{ background: '#3b82f6' }}>একক উদ্যোক্তাদের জন্য</span>
              <h3 className="obs-package-type">SPC License</h3>
              <p className="obs-package-sub">Single Person Company · ১০০% একক মালিকানা</p>

              <div className="obs-price-box">
                <span className="obs-currency">OMR</span>
                <span className="obs-amount">400</span>
              </div>
              <p className="obs-price-note">✓ সকল সরকারি ফি অন্তর্ভুক্ত (All Govt Fees Included)</p>

              <ul className="obs-features-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Commercial Registration (CR)</strong> – ৩ বছর মেয়াদি</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Oman Chamber of Commerce</strong> মেম্বারশিপ – ১ বছর</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>কোম্পানির অফিশিয়াল <strong>Stamp ও Letterhead</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Tax Authority-তে</strong> কোম্পানির রেজিস্ট্রেশন ও ট্যাক্স কার্ড</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Royal Oman Police (ROP)</strong>-এ রেজিস্ট্রেশন</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Ministry of Labour</strong>-এ কোম্পানি রেজিস্ট্রেশন</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>প্রসেসিং সময়: <strong>১০ কার্যদিবস</strong> (ডকুমেন্টস জমার পর থেকে)</span>
                </li>
                <li>
                  <CreditCard size={18} />
                  <span>পেমেন্ট: <strong>৫০% অগ্রিম</strong> + <strong>৫০% CR পাওয়ার পর</strong></span>
                </li>
              </ul>

              <a 
                href={createWhatsAppLink("হ্যালো মুসা ইমন, আমি ওমানে SPC License (OMR 400) প্যাকেজের জন্য আবেদন করতে চাই। বিস্তারিত প্রসেস জানান।")}
                target="_blank"
                rel="noopener noreferrer"
                className="obs-card-cta btn-wa-gold"
              >
                <MessageCircle size={20} />
                <span>SPC প্যাকেজ বেছে নিন</span>
              </a>
            </div>

            {/* Card 2: LLC License */}
            <div className="obs-price-card featured">
              <span className="obs-badge-featured">পার্টনারশিপ ও গ্রোথ</span>
              <h3 className="obs-package-type">LLC License</h3>
              <p className="obs-package-sub">Limited Liability Company · পার্টনারশিপ বা বড় কোম্পানি</p>

              <div className="obs-price-box">
                <span className="obs-currency">OMR</span>
                <span className="obs-amount">520</span>
              </div>
              <p className="obs-price-note">✓ সকল সরকারি ফি অন্তর্ভুক্ত (All Govt Fees Included)</p>

              <ul className="obs-features-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Commercial Registration (CR)</strong> – ৩ বছর মেয়াদি</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Oman Chamber of Commerce</strong> মেম্বারশিপ – ১ বছর</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>কোম্পানির অফিশিয়াল <strong>Stamp ও Letterhead</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Tax Authority-তে</strong> কোম্পানির রেজিস্ট্রেশন ও ট্যাক্স কার্ড</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Royal Oman Police (ROP)</strong>-এ রেজিস্ট্রেশন</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Ministry of Labour</strong>-এ কোম্পানি রেজিস্ট্রেশন</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>প্রসেসিং সময়: <strong>১০ কার্যদিবস</strong> (ডকুমেন্টস জমার পর থেকে)</span>
                </li>
                <li>
                  <CreditCard size={18} />
                  <span>পেমেন্ট: <strong>৫০% অগ্রিম</strong> + <strong>৫০% CR পাওয়ার পর</strong></span>
                </li>
              </ul>

              <a 
                href={createWhatsAppLink("হ্যালো মুসা ইমন, আমি ওমানে LLC License (OMR 520) প্যাকেজের জন্য আবেদন করতে চাই। বিস্তারিত প্রসেস জানান।")}
                target="_blank"
                rel="noopener noreferrer"
                className="obs-card-cta btn-wa-green"
              >
                <MessageCircle size={20} />
                <span>LLC প্যাকেজ বেছে নিন</span>
              </a>
            </div>
          </div>

          {/* Payment Terms Strip */}
          <div className="obs-terms-banner">
            <div className="obs-term-item">
              <div className="obs-term-badge">50%</div>
              <div className="obs-term-content">
                <h4>অগ্রিম পেমেন্ট (Advance)</h4>
                <p>কাজ শুরুর সময় এবং সরকারি পোর্টালে অ্যাপ্লিকেশন দাখিলের সময় প্রদেয়।</p>
              </div>
            </div>
            <div className="obs-term-item">
              <div className="obs-term-badge">50%</div>
              <div className="obs-term-content">
                <h4>বাকি পেমেন্ট (Final Payment)</h4>
                <p>CR (Commercial Registration) সরকারিভাবে অনুমোদন হয়ে কপি হাতে পাওয়ার পর প্রদেয়।</p>
              </div>
            </div>
          </div>

          {/* Exclusions Box */}
          <div className="obs-exclusions-box">
            <h4><AlertCircle size={20} /> প্যাকেজে যা যা অন্তর্ভুক্ত নয় (Not Included):</h4>
            <ul>
              <li><span className="tag-cross">✕</span> ভিসা ফি (Investor / Employment Visa)</li>
              <li><span className="tag-cross">✕</span> অফিস / দোকান ভাড়া (Office Rent)</li>
              <li><span className="tag-cross">✕</span> অফিসের চুক্তিপত্র (Tenancy Agreement)</li>
              <li><span className="tag-cross">✕</span> মিউনিসিপ্যালিটি লাইসেন্স (Municipality License)</li>
            </ul>
            <p className="note">
              * গুরুত্বপূর্ণ নোট: ওমানের সরকারি নিয়মকানুন, ফি এবং প্রক্রিয়া সময়ে সময়ে পরিবর্তন হতে পারে। কোনো নিয়ম বা সরকারি ফি পরিবর্তিত হলে সেই অনুযায়ী প্রক্রিয়া, সময় বা খরচ সমন্বয় করা হবে, যা গ্রাহক মেনে নিতে বাধ্য থাকবেন।
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="obs-section">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-section-tag">SIMPLE CHECKLIST · কি কি লাগবে</span>
            <h2 className="obs-section-title">আপনার কাছ থেকে যা যা প্রয়োজন</h2>
            <p className="obs-section-desc">
              খুবই সাধারণ কিছু তথ্য ও ডকুমেন্টস দিয়ে শুরু করা যায়। জটিল কোনো পেপারওয়ার্কের ঝামেলা নেই।
            </p>
          </div>

          <div className="obs-req-grid">
            <div className="obs-req-card">
              <div className="obs-req-num">1</div>
              <div className="obs-req-text">
                <h4>পাসপোর্টের কপি</h4>
                <p>পার্টনার থাকলে সবার বৈধ পাসপোর্টের পরিষ্কার স্ক্যান কপি।</p>
              </div>
            </div>

            <div className="obs-req-card">
              <div className="obs-req-num">2</div>
              <div className="obs-req-text">
                <h4>ইমেইল অ্যাড্রেস</h4>
                <p>অফিশিয়াল যোগাযোগ ও নোটিফিকেশনের জন্য ভ্যালিড ইমেইল।</p>
              </div>
            </div>

            <div className="obs-req-card">
              <div className="obs-req-num">3</div>
              <div className="obs-req-text">
                <h4>মোবাইল নম্বর</h4>
                <p>সচল ওমানি বা আন্তর্জাতিক হোয়াটসঅ্যাপ/মোবাইল নম্বর।</p>
              </div>
            </div>

            <div className="obs-req-card">
              <div className="obs-req-num">4</div>
              <div className="obs-req-text">
                <h4>পছন্দের কোম্পানির নাম</h4>
                <p>ইংরেজি ও আরবিতে কমপক্ষে ৩টি পছন্দের নাম ক্রমানুসারে।</p>
              </div>
            </div>

            <div className="obs-req-card">
              <div className="obs-req-num">5</div>
              <div className="obs-req-text">
                <h4>ওমানে ব্যবসার লোকেশন</h4>
                <p>যে উইলায়াত বা অঞ্চলে করতে চান (যেমন: মাস্কাট, সালালাহ, সোহাড়)।</p>
              </div>
            </div>

            <div className="obs-req-card">
              <div className="obs-req-num">6</div>
              <div className="obs-req-text">
                <h4>মালিক / পার্টনারদের বিবরণ</h4>
                <p>একক হলে নিজের নাম, পার্টনারশিপ হলে সবার নাম ও শেয়ারের অনুপাত।</p>
              </div>
            </div>

            <div className="obs-req-card" style={{ gridColumn: '1 / -1' }}>
              <div className="obs-req-num">7</div>
              <div className="obs-req-text">
                <h4>ব্যবসার ধরন ও ক্যাটাগরি (Activities)</h4>
                <p>যেমন: কফি শপ, রেস্তোরাঁ, জেনারেল ট্রেডিং, ক্লিনিং সার্ভিস, আইটি ও সফটওয়্যার, কনস্ট্রাকশন, লজিস্টিকস ইত্যাদি।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section id="process" className="obs-section" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-section-tag">HOW IT WORKS · প্রসেসিং ধাপ</span>
            <h2 className="obs-section-title">সহজ ৪ ধাপে ওমানে লাইসেন্স হাতে পান</h2>
            <p className="obs-section-desc">
              সম্পূর্ণ প্রক্রিয়াটি আমরা সরকারি গাইডলাইন অনুযায়ী পেশাদারিত্বের সাথে দ্রুত সম্পন্ন করি।
            </p>
          </div>

          <div className="obs-timeline-grid">
            <div className="obs-step-card">
              <div className="obs-step-icon-wrap">
                <FileText size={26} />
              </div>
              <span className="obs-step-badge">STEP 01</span>
              <h4>পরামর্শ ও পেপারস জমা</h4>
              <p>হোয়াটসঅ্যাপে আমাদের সাথে কথা বলে প্রয়োজনীয় ডকুমেন্ট ও পছন্দের নাম জমা দিন।</p>
            </div>

            <div className="obs-step-card">
              <div className="obs-step-icon-wrap">
                <CreditCard size={26} />
              </div>
              <span className="obs-step-badge">STEP 02</span>
              <h4>৫০% অগ্রিম পেমেন্ট</h4>
              <p>কাজ শুরু করার জন্য ৫০% পেমেন্ট সম্পন্ন করে সরকারি আবেদন প্রক্রিয়া নিশ্চিত করুন।</p>
            </div>

            <div className="obs-step-card">
              <div className="obs-step-icon-wrap">
                <Scale size={26} />
              </div>
              <span className="obs-step-badge">STEP 03</span>
              <h4>সরকারি ভেরিফিকেশন ও CR অনুমোদন</h4>
              <p>মন্ত্রণালয় ও সরকারি অনুমোদন সম্পন্ন হয়ে মাত্র ১০ কার্যদিবসে CR ও চেম্বার ইস্যু হবে।</p>
            </div>

            <div className="obs-step-card">
              <div className="obs-step-icon-wrap">
                <CheckCircle2 size={26} />
              </div>
              <span className="obs-step-badge">STEP 04</span>
              <h4>বাকি ৫০% ও হ্যান্ডওভার</h4>
              <p>অনুমোদিত CR কপি যাচাই করে বাকি ৫০% পেমেন্ট দিয়ে স্ট্যাম্প ও মূল পেপারস বুঝে নিন।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation / Booking Form */}
      <section id="booking" className="obs-section">
        <div className="obs-container">
          <div className="obs-booking-box">
            <div className="obs-booking-header">
              <span className="obs-section-tag">INSTANT CONSULTATION · পরামর্শ নিন</span>
              <h3>ওমানে বিজনেস সেটআপ কনসালটেশন বুক করুন</h3>
              <p>আপনার তথ্য দিলে সরাসরি মুসা ইমনের হোয়াটসঅ্যাপে কানেক্ট হয়ে বিশেষজ্ঞ পরামর্শ পাবেন।</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="obs-form-grid">
                <div className="obs-form-group">
                  <label>আপনার নাম (Name) *</label>
                  <input 
                    type="text" 
                    className="obs-form-input" 
                    placeholder="উদা: মোহাম্মদ রহিম" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="obs-form-group">
                  <label>হোয়াটসঅ্যাপ বা মোবাইল নম্বর *</label>
                  <input 
                    type="text" 
                    className="obs-form-input" 
                    placeholder="উদা: +968 94578538 বা +880 17..." 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="obs-form-group">
                  <label>কাঙ্ক্ষিত লাইসেন্স প্যাকেজ</label>
                  <select 
                    className="obs-form-select"
                    value={formData.licenseType}
                    onChange={(e) => setFormData({...formData, licenseType: e.target.value})}
                  >
                    <option value="SPC License (OMR 400)">SPC License (OMR 400) - একক মালিকানা</option>
                    <option value="LLC License (OMR 520)">LLC License (OMR 520) - পার্টনারশিপ কোম্পানি</option>
                    <option value="Not Decided Yet / দরকার পরামর্শ">এখনো নিশ্চিত নই (পরামর্শ চাই)</option>
                  </select>
                </div>

                <div className="obs-form-group">
                  <label>কাঙ্ক্ষিত ব্যবসার ধরন (Business Activity)</label>
                  <select 
                    className="obs-form-select"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option value="Coffee Shop / Restaurant / Cafeteria">কফি শপ / রেস্তোরাঁ / ক্যাফে</option>
                    <option value="General Trading / Retail Shop">ট্রেডিং / সুপারমার্কেট / রিটেইল শপ</option>
                    <option value="IT, Software & Digital Services">আইটি, সফটওয়্যার ও ডিজিটাল মিডিয়া</option>
                    <option value="Cleaning & Facility Management">ক্লিনিং ও ফ্যাসিলিটি ম্যানেজমেন্ট</option>
                    <option value="Construction & Maintenance">কনস্ট্রাকশন ও রক্ষণাবেক্ষণ</option>
                    <option value="Travel, Tourism & Logistics">ট্রাভেল, ট্যুরিজম ও ট্রান্সপোর্ট</option>
                    <option value="Other / অন্যান্য">অন্যান্য ক্যাটাগরি</option>
                  </select>
                </div>

                <div className="obs-form-group full-width">
                  <label>ওমানে কাঙ্ক্ষিত ব্যবসার লোকেশন বা কোনো বিশেষ জিজ্ঞাসা (ঐচ্ছিক)</label>
                  <input 
                    type="text" 
                    className="obs-form-input" 
                    placeholder="উদা: মাস্কাট শহর, রুই, সিপ, অথবা কোনো প্রশ্ন থাকলে লিখুন..." 
                    value={formData.customNote}
                    onChange={(e) => setFormData({...formData, customNote: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="obs-submit-wa-btn">
                <Send size={20} />
                <span>হোয়াটসঅ্যাপে মুসা ইমনের কাছে পাঠান (Instant WhatsApp)</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Official Sheet Reference & Download */}
      <section className="obs-section" style={{ padding: '30px 0' }}>
        <div className="obs-container">
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(217, 119, 6, 0.15)',
                color: '#fbbf24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>
                  Hello Founders Official Business Setup Offer Sheet (PDF)
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 0' }}>
                  অফিশিয়াল প্যাকেজ ও ডকুমেন্টেশন সামারি সরাসরি ডাউনলোড বা প্রিভিউ করুন।
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="/Hello_Founders_Oman_Business_Setup.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="obs-back-btn"
                style={{ padding: '10px 18px', background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <ExternalLink size={16} /> <span>পিডিএফ দেখুন</span>
              </a>
              <a 
                href="/Hello_Founders_Oman_Business_Setup.pdf" 
                download="Hello_Founders_Oman_Business_Setup.pdf"
                className="obs-back-btn"
                style={{ padding: '10px 18px', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#fff', border: 'none' }}
              >
                <Download size={16} /> <span>ডাউনলোড করুন</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="obs-section">
        <div className="obs-container">
          <div className="obs-section-header">
            <span className="obs-section-tag">COMMON QUESTIONS · সাধারণ প্রশ্ন ও উত্তর</span>
            <h2 className="obs-section-title">সচরাচর জানতে চাওয়া প্রশ্নসমূহ</h2>
            <p className="obs-section-desc">
              ওমানে ব্যবসা শুরু করার আগে যা জানা আপনার জন্য অত্যন্ত জরুরি।
            </p>
          </div>

          <div className="obs-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="obs-faq-item">
                  <button 
                    className="obs-faq-question" 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="obs-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Sticky WhatsApp Bar */}
      <div className="obs-sticky-bar">
        <a 
          href={createWhatsAppLink("হ্যালো মুসা ইমন, আমি ওমানে বিজনেস সেটআপ করার জন্য ফ্রি কনসালটেশন বুক করতে চাই।")}
          target="_blank"
          rel="noopener noreferrer"
          className="obs-floating-wa-btn"
        >
          <MessageCircle size={22} />
          <span>হোয়াটসঅ্যাপে ফ্রি কনসালটেশন বুক করুন | {WHATSAPP_DISPLAY}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="obs-footer">
        <div className="obs-container">
          <div className="obs-footer-content">
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '10px' }}>
              Hello Founders Business Solutions
            </h3>
            <p>
              আপনার ব্যবসার যাত্রা শুরু হোক আমাদের সাথে। শতভাগ সততা, পেশাদারিত্ব ও আইনি নিশ্চয়তায় ওমানে কোম্পানি সেটআপ।
            </p>
            <p>
              অফিশিয়াল ওয়েবসাইট: <a href="https://www.founderbs.com" target="_blank" rel="noopener noreferrer">www.founderbs.com</a> • হোয়াটসঅ্যাপ: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
            </p>
            <p style={{ marginTop: '24px', fontSize: '0.8rem', color: '#475569' }}>
              © {new Date().getFullYear()} Musa Emon & Hello Founders. All rights reserved. Powered by <a href="https://probashtech.com" target="_blank" rel="noopener noreferrer">Probash Tech</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
