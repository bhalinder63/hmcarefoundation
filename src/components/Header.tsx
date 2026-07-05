import React, { useState } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Tab, Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ activeTab, setActiveTab, language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems: { id: Tab; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.aboutUs },
    { id: 'programs', label: t.programs },
    { id: 'projects', label: t.projects },
    { id: 'gallery', label: t.gallery },
    { id: 'contact', label: t.contactUs }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const handleNavClick = (tabId: Tab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-surface-container-lowest sticky top-0 z-50 shadow-sm w-full transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto">
        
        {/* Logo & Brand Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick('home')}
        >
          <img 
            alt="HM Care Foundation Logo" 
            className="h-10 w-10 object-contain rounded-full border border-outline-variant/30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRg9Fp0RNOaWEsA7A2g7a2AhspIC1-20FtBsboHIJKY_VZif_2CMJKZylte45mO3NXXVSOgURd3BP7TSyVHjq4NuaOeiYiyxiCwdpIK7PeXtmKsUkUtSlImuG1-aoEEgIC1uykTjDgXI4vIsB0UnA7lPSXwdQDZegRu9RRRdRY5BYF2AX9aqGKZKwq4I0V74qbJCOm75og0Fffp3U-zgmMRbbAUhui8RRdQeWLTjdhbrFuepNfrS-di4dO_PqpSZubSinIStYyK1_"
          />
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight font-heading">
            {t.title}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-semibold tracking-wide transition-all pb-1 border-b-2 font-sans ${
                activeTab === item.id
                  ? 'text-primary border-secondary font-bold'
                  : 'text-on-surface-variant hover:text-primary border-transparent hover:border-outline-variant/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA & Language Selector */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={toggleLanguage}
            className="text-primary hover:bg-surface-container-low transition-all px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 border border-outline-variant/30 bg-surface-container-lowest"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>
          <button
            onClick={() => handleNavClick('donate')}
            className="bg-secondary text-on-secondary px-5 py-2.5 rounded-lg font-bold hover:bg-secondary-container transition-all hover:ambient-shadow-lvl2 active:opacity-90 active:scale-95 duration-150 text-sm font-sans flex items-center gap-1.5"
          >
            <Heart className="w-4 h-4 fill-current" />
            {t.donateNow}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Button */}
          <button
            onClick={toggleLanguage}
            className="text-primary p-2 rounded-lg text-xs font-semibold flex items-center gap-1 border border-outline-variant/20 bg-surface-container-lowest"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2 hover:bg-surface-container-low rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface-container-lowest px-6 py-4 animate-fade-in shadow-inner">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base py-2 font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'text-secondary border-l-4 border-secondary pl-3'
                    : 'text-on-surface-variant pl-3 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-outline-variant/30 pt-4 mt-2 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold hover:bg-secondary-container transition-all hover:ambient-shadow-lvl2 active:scale-95 text-center text-sm flex justify-center items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                {t.donateNow}
              </button>
              <button
                onClick={() => handleNavClick('volunteer')}
                className="w-full border-2 border-primary text-primary hover:bg-surface-container-low py-2.5 rounded-lg font-bold transition-all text-center text-sm"
              >
                {t.volunteer}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
