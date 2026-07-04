import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Users, Target, CheckCircle } from 'lucide-react';
import { Tab, Language, Project } from '../types';
import { PROJECTS, TRANSLATIONS } from '../data';

interface ProjectsViewProps {
  setActiveTab: (tab: Tab) => void;
  setDonationTarget: (target: string) => void;
  setDonationAmount: (amount: number) => void;
  language: Language;
}

export default function ProjectsView({ setActiveTab, setDonationTarget, setDonationAmount, language }: ProjectsViewProps) {
  const t = TRANSLATIONS[language];

  const handleContribute = (project: Project) => {
    setDonationTarget(project.title);
    // Suggest remaining amount or default to something custom
    const remaining = project.goal - project.raised;
    setDonationAmount(Math.min(2500, remaining));
    setActiveTab('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Projects Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Active Campaigns' : 'सक्रिय अभियान'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Transparency • Progress-Tracked Fundraisers
          </p>
        </div>
      </section>

      {/* Campaign cards container */}
      <section className="py-12 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));
            return (
              <motion.div 
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow-lvl1 border border-outline-variant/30 flex flex-col hover:ambient-shadow-lvl2 duration-300"
              >
                {/* Campaign Image */}
                <div className="h-52 overflow-hidden relative">
                  <img 
                    alt={language === 'en' ? project.title : project.titleHi} 
                    className="w-full h-full object-cover" 
                    src={project.image} 
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-on-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Campaign Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-primary leading-snug line-clamp-2">
                      {language === 'en' ? project.title : project.titleHi}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed line-clamp-3">
                      {language === 'en' ? project.description : project.descriptionHi}
                    </p>
                  </div>

                  {/* Progress Tracker Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold font-sans">
                      <span className="text-secondary uppercase">Raised: ₹{project.raised.toLocaleString()}</span>
                      <span className="text-outline uppercase">Goal: ₹{project.goal.toLocaleString()}</span>
                    </div>
                    
                    {/* Progress track */}
                    <div className="w-full h-2.5 bg-outline-variant/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary-container transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center text-xs font-bold font-sans">
                      <span className="text-primary-container bg-primary-fixed px-2 py-0.5 rounded">
                        {percent}% Funded
                      </span>
                      <span className="text-outline flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {project.donorCount} supporters
                      </span>
                    </div>
                  </div>

                  {/* Action triggers */}
                  <button
                    onClick={() => handleContribute(project)}
                    className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 rounded-xl font-bold text-xs tracking-wider uppercase font-sans transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current text-secondary-fixed" />
                    <span>Support Campaign</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Compliance statement info */}
      <section className="py-12 bg-surface-container-low border-t border-b border-outline-variant/20">
        <div className="max-w-[800px] mx-auto px-6 text-center space-y-4">
          <div className="p-2.5 bg-primary/5 rounded-full inline-block text-primary">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-heading text-primary">Audited & Fully Accountable</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
            HM Care Foundation maintains a completely transparent auditing structure. Monthly development report packets and utilization logs are sent out to all campaign patrons. All fundraisers are active on our portal and secured via PCI-compliant payment integrations.
          </p>
        </div>
      </section>

    </div>
  );
}
