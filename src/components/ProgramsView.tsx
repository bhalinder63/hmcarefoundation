import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Heart, GraduationCap, Users } from 'lucide-react';
import { Tab, Language, Program } from '../types';
import { PROGRAMS, TRANSLATIONS } from '../data';

interface ProgramsViewProps {
  setActiveTab: (tab: Tab) => void;
  setDonationTarget: (target: string) => void;
  language: Language;
}

export default function ProgramsView({ setActiveTab, setDonationTarget, language }: ProgramsViewProps) {
  const t = TRANSLATIONS[language];
  const [activeProgId, setActiveProgId] = useState<string>('prog-health');

  const selectedProgram = PROGRAMS.find(p => p.id === activeProgId) || PROGRAMS[0];

  const handleSponsorClick = (progId: string) => {
    let targetLabel = '';
    if (progId === 'prog-health') targetLabel = 'Healthcare';
    else if (progId === 'prog-education') targetLabel = 'Education';
    else if (progId === 'prog-empowerment') targetLabel = 'Empowerment';

    setDonationTarget(targetLabel);
    setActiveTab('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'medical_services':
        return <Heart className="w-6 h-6" />;
      case 'school':
        return <GraduationCap className="w-6 h-6" />;
      case 'group':
        return <Users className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Sector Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Our Core Programs' : 'हमारे मुख्य कार्यक्रम'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Three Sectors • Structured For Long-Term Change
          </p>
        </div>
      </section>

      {/* Program selector tabs */}
      <section className="py-12 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 border-b border-outline-variant/30 pb-6 mb-10 justify-center">
          {PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveProgId(prog.id)}
              className={`px-6 py-4 rounded-xl font-bold text-sm tracking-wide font-sans transition-all flex items-center gap-3 border ${
                activeProgId === prog.id
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border-outline-variant/40'
              }`}
            >
              {getProgramIcon(prog.icon)}
              <span>{language === 'en' ? prog.title : prog.titleHi}</span>
            </button>
          ))}
        </div>

        {/* Detailed Program view panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant/30 shadow-sm"
          >
            {/* Visual Callout block */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-secondary uppercase tracking-widest block font-sans">
                  Current Sector Focus
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary leading-tight">
                  {language === 'en' ? selectedProgram.title : selectedProgram.titleHi}
                </h2>
                <p className="text-base font-medium text-on-surface-variant font-sans italic leading-relaxed">
                  "{language === 'en' ? selectedProgram.tagline : selectedProgram.taglineHi}"
                </p>
                <p className="text-sm md:text-base text-outline font-sans leading-relaxed">
                  {language === 'en' ? selectedProgram.description : selectedProgram.descriptionHi}
                </p>
              </div>

              {/* Dynamic Action Block */}
              <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tertiary-fixed rounded-xl text-on-tertiary-fixed font-bold font-heading text-lg">
                    {selectedProgram.impactMetric}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-outline uppercase font-sans">Verified Sector Impact</h4>
                    <p className="text-sm font-semibold text-primary font-heading">
                      {language === 'en' ? selectedProgram.impactMetricLabel : selectedProgram.impactMetricLabelHi}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSponsorClick(selectedProgram.id)}
                  className="w-full bg-secondary text-on-secondary py-3.5 rounded-xl font-bold text-sm tracking-wide font-sans hover:bg-secondary-container transition-all hover:ambient-shadow-lvl2 active:scale-95 duration-150 flex items-center justify-center gap-2"
                >
                  <span>Sponsor {language === 'en' ? selectedProgram.title : selectedProgram.titleHi}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Core Initiatives checklist */}
            <div className="lg:col-span-7 bg-surface-container-low/50 p-6 md:p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-heading text-primary mb-6">
                  {language === 'en' ? 'Core Initiatives We Support' : 'मुख्य पहलें जिन्हें हम समर्थन देते हैं'}
                </h3>
                <div className="space-y-4">
                  {(language === 'en' ? selectedProgram.initiatives : selectedProgram.initiativesHi).map((init, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-tertiary-container mt-0.5 shrink-0" />
                      <p className="text-sm text-on-surface-variant font-sans font-medium leading-relaxed">
                        {init}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container shrink-0 animate-ping"></div>
                <p className="text-xs text-on-surface-variant font-sans">
                  Active field operations currently running in district clusters. Verified in July 2026.
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </section>

    </div>
  );
}
