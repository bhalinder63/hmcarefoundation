import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Users, FileText, TrendingUp, Award } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  const t = TRANSLATIONS[language];

  const milestones = [
    { year: '2019', title: 'The Genesis', titleHi: 'स्थापना', desc: 'HM Care Foundation started as a small local medical aid program supporting 20 families.', descHi: 'एचएम केयर फाउंडेशन की शुरुआत 20 परिवारों को सहायता देने वाले छोटे स्थानीय चिकित्सा सहायता कार्यक्रम के रूप में हुई।' },
    { year: '2021', title: 'Education Launch', titleHi: 'शिक्षा कार्यक्रम', desc: 'Introduced academic scholarships and stationery drives, enabling over 1,000 students.', descHi: 'शैक्षणिक छात्रवृत्तियां और स्टेशनरी अभियान शुरू किया गया, जिससे 1,000 से अधिक छात्र लाभांवित हुए।' },
    { year: '2023', title: 'Empowerment centers', titleHi: 'सशक्तिकरण केंद्र', desc: 'Established our primary vocational tailoring and computers labs across district clusters.', descHi: 'जिला समूहों में हमारे प्राथमिक व्यावसायिक सिलाई और कंप्यूटर प्रयोगशालाएं स्थापित की गईं।' },
    { year: '2026', title: 'Continuous Impact', titleHi: 'निरंतर प्रभाव', desc: 'Supporting over 10,000 beneficiaries annually across three major developmental sectors.', descHi: 'तीन प्रमुख विकासात्मक क्षेत्रों में सालाना 10,000 से अधिक लाभार्थियों का समर्थन कर रहे हैं।' }
  ];

  const coreValues = [
    { icon: <Heart className="w-6 h-6 text-secondary" />, title: 'Inherent Compassion', titleHi: 'सच्ची करुणा', desc: 'We operate with professional, non-judgmental empathy, prioritizing families facing multi-faceted hardships.', descHi: 'हम व्यावसायिक और निष्पक्ष सहानुभूति के साथ काम करते हैं, उन परिवारों को प्राथमिकता देते हैं जो कठिनाइयों का सामना कर रहे हैं।' },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: 'Absolute Transparency', titleHi: 'पूर्ण पारदर्शिता', desc: 'Every rupee donated goes directly to verified on-ground projects with zero hidden overheads.', descHi: 'दान किया गया प्रत्येक रुपया बिना किसी छिपे हुए खर्च के सीधे जमीनी स्तर की परियोजनाओं में जाता है।' },
    { icon: <Users className="w-6 h-6 text-tertiary" />, title: 'Community Led', titleHi: 'समुदाय आधारित', desc: 'Our initiatives are requested, customized, and sustained in partnership with local village leaders.', descHi: 'हमारी पहल स्थानीय ग्रामीण नेताओं के साथ साझेदारी में अनुरोधित, अनुकूलित और निरंतर बनाई जाती हैं।' }
  ];

  const boardMembers = [
    { name: 'Dr. Harish Mehta', role: 'President & Founder', roleHi: 'अध्यक्ष और संस्थापक', bio: 'Former Chief of Pediatrics with 25+ years of clinical service across public health systems.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
    { name: 'Meera Deshmukh', role: 'Director of Education', roleHi: 'शिक्षा निदेशक', bio: 'Renowned academician and curriculum expert, dedicated to rural girls primary literacy campaigns.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300' },
    { name: 'Karan Malhotra', role: 'Head of Operations', roleHi: 'संचालन प्रमुख', bio: 'Social entrepreneur specialized in constructing mobile clean-water distribution networks.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300' }
  ];

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Page Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'About Our Foundation' : 'हमारे फाउंडेशन के बारे में'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            HM Care Foundation • Certified Section 8 Non-Profit
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block font-sans">
            Our Legacy of Trust
          </span>
          <h2 className="text-3xl font-bold font-heading text-primary leading-tight">
            {language === 'en' ? 'Bridging the Gap for Rural Advancement' : 'ग्रामीण विकास के लिए अंतर को पाटना'}
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-sans">
            {language === 'en' 
              ? 'HM Care Foundation was established to address critical lacks in primary healthcare, educational infrastructure, and family income stability in rural Maharashtra. By collaborating with local community heads, we identify pressing local developmental gaps and construct sustainable interventions.'
              : 'एचएम केयर फाउंडेशन की स्थापना ग्रामीण महाराष्ट्र में प्राथमिक स्वास्थ्य सेवा, शैक्षिक बुनियादी ढांचे और पारिवारिक आय स्थिरता में महत्वपूर्ण कमियों को दूर करने के लिए की गई थी। स्थानीय समुदाय प्रमुखों के साथ सहयोग करके, हम दबाव वाले विकासात्मक अंतरालों की पहचान करते हैं और स्थायी हस्तक्षेपों का निर्माण करते हैं।'}
          </p>
          <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/35 flex items-start gap-4">
            <div className="p-2 bg-secondary-fixed rounded-lg text-secondary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary font-heading">FCRA Compliant & Tax Exempt</h4>
              <p className="text-xs text-outline font-sans mt-0.5">Approved under Section 80G and 12A of the Income Tax Act. Every contribution is entirely tax-deductible.</p>
            </div>
          </div>
        </div>
        
        {/* Graphic Image cards */}
        <div className="relative">
          <img 
            alt="Community gathering" 
            className="rounded-2xl shadow-xl w-full h-[380px] object-cover border-4 border-surface-container-lowest"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
          />
          <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest rounded-xl p-6 shadow-2xl border border-outline-variant/40 hidden sm:block max-w-[240px]">
            <p className="text-3xl font-black font-heading text-secondary">100%</p>
            <p className="text-xs font-bold text-outline uppercase tracking-wider font-sans mt-1">Direct Program Allocation Guarantee</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-surface-container-low border-t border-b border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-12 text-center">
            {language === 'en' ? 'Our Guiding Philosophy' : 'हमारी मार्गदर्शक नीतियां'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 ambient-shadow-lvl1">
                <div className="p-3 bg-surface-container rounded-lg inline-block mb-4">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-primary mb-2">
                  {language === 'en' ? val.title : val.titleHi}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
                  {language === 'en' ? val.desc : val.descHi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 max-w-[1440px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-12 text-center">
          {language === 'en' ? 'Our Developmental Timeline' : 'हमारा विकासात्मक सफर'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 relative">
              <span className="text-xs font-bold text-secondary uppercase font-sans">{m.year}</span>
              <h3 className="text-lg font-bold font-heading text-primary mt-1 mb-2">
                {language === 'en' ? m.title : m.titleHi}
              </h3>
              <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                {language === 'en' ? m.desc : m.descHi}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Team board */}
      <section className="py-16 bg-surface-container-lowest border-t border-outline-variant/15">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-4 text-center">
            {language === 'en' ? 'Our Leadership Team' : 'हमारा नेतृत्व मंडल'}
          </h2>
          <p className="text-sm text-on-surface-variant text-center max-w-xl mx-auto mb-12 font-sans">
            Guiding our clinical operations, educational campaigns, and structural governance with professional expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-surface-bright rounded-xl overflow-hidden border border-outline-variant/30 ambient-shadow-lvl1 flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top" 
                    src={member.img} 
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary">{member.name}</h3>
                    <p className="text-xs font-bold text-secondary font-sans uppercase mb-3">
                      {language === 'en' ? member.role : member.roleHi}
                    </p>
                    <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
