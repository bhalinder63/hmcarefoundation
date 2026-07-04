import React from 'react';
import { Tab, Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: Tab) => void;
  language: Language;
}

export default function Footer({ setActiveTab, language }: FooterProps) {
  const t = TRANSLATIONS[language];

  const handleLinkClick = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-on-primary mt-auto border-t-4 border-secondary/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-16 max-w-[1440px] mx-auto">
        
        {/* Foundation Info */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              alt="HM Care Foundation Logo" 
              className="h-10 w-10 object-contain rounded-full bg-white p-0.5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRg9Fp0RNOaWEsA7A2g7a2AhspIC1-20FtBsboHIJKY_VZif_2CMJKZylte45mO3NXXVSOgURd3BP7TSyVHjq4NuaOeiYiyxiCwdpIK7PeXtmKsUkUtSlImuG1-aoEEgIC1uykTjDgXI4vIsB0UnA7lPSXwdQDZegRu9RRRdRY5BYF2AX9aqGKZKwq4I0V74qbJCOm75og0Fffp3U-zgmMRbbAUhui8RRdQeWLTjdhbrFuepNfrS-di4dO_PqpSZubSinIStYyK1_"
            />
            <span className="text-2xl font-bold font-heading text-on-primary">{t.title}</span>
          </div>
          <p className="text-sm font-sans text-on-primary/80 max-w-md leading-relaxed">
            {t.footerDesc}
          </p>
          <div className="space-y-2 pt-2 text-sm text-on-primary/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary-fixed-dim" />
              <span>Headquarters: Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary-fixed-dim" />
              <span>+91 22 5550 1948</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary-fixed-dim" />
              <span>info@hmcarefoundation.org</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold font-heading mb-4 uppercase tracking-wider text-secondary-fixed">
            {t.quickLinks}
          </h4>
          <ul className="space-y-3 text-sm font-sans">
            <li>
              <button 
                onClick={() => handleLinkClick('volunteer')}
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all text-left"
              >
                {t.volunteer}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('programs')}
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all text-left"
              >
                {t.programs}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('projects')}
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all text-left"
              >
                {t.projects}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('gallery')}
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all text-left"
              >
                {t.gallery}
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h4 className="text-sm font-bold font-heading mb-4 uppercase tracking-wider text-secondary-fixed">
            {t.legal}
          </h4>
          <ul className="space-y-3 text-sm font-sans">
            <li>
              <a 
                href="#privacy" 
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all flex items-center gap-1"
                onClick={(e) => { e.preventDefault(); alert("Privacy Policy: All donor and beneficiary data is fully secure. HM Care Foundation does not distribute any private telemetry or contact lists."); }}
              >
                {t.privacyPolicy}
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </li>
            <li>
              <a 
                href="#terms" 
                className="text-on-primary/80 hover:text-secondary-fixed-dim hover:underline transition-all flex items-center gap-1"
                onClick={(e) => { e.preventDefault(); alert("Terms of Service: By supporting HM Care Foundation, you commit to assisting local developmental targets and observing non-discriminatory aid distributions."); }}
              >
                {t.termsOfService}
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </li>
            <li className="pt-2">
              <span className="inline-block bg-primary-container px-3 py-1.5 rounded text-xs font-semibold text-secondary-fixed-dim border border-outline-variant/20">
                80G / 12A Tax Exempted
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-on-primary/10">
        <div className="px-6 py-4 max-w-[1440px] mx-auto text-center flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs font-sans text-on-primary/60">
            {t.allRightsReserved}
          </p>
          <p className="text-xs font-sans text-on-primary/40">
            Regd NGO Registration No. MH/2023/048122
          </p>
        </div>
      </div>
    </footer>
  );
}
