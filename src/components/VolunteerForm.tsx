import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  Clipboard, 
  Heart, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  ShieldCheck,
  User,
  Smartphone
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface VolunteerFormProps {
  language: Language;
}

export default function VolunteerForm({ language }: VolunteerFormProps) {
  const t = TRANSLATIONS[language];

  // Application states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [interest, setInterest] = useState('Education & Teaching');
  const [motivation, setMotivation] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [membershipCard, setMembershipCard] = useState<any | null>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !location) return;

    setSubmitting(true);
    setStatusText('Reviewing background registration standards...');

    setTimeout(() => {
      setStatusText('Matching district coordinates with regional clusters...');
      
      setTimeout(() => {
        setStatusText('Allocating certified field mentor...');
        
        setTimeout(() => {
          const card = {
            vID: `VOL-${Math.floor(1000 + Math.random() * 9000)}`,
            name,
            department: interest,
            district: location,
            date: new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          };

          setMembershipCard(card);
          setSubmitting(false);

          // Save to local logs
          const savedVolunteers = localStorage.getItem('hm_volunteers');
          const current = savedVolunteers ? JSON.parse(savedVolunteers) : [];
          current.push(card);
          localStorage.setItem('hm_volunteers', JSON.stringify(current));
        }, 1000);
      }, 1000);
    }, 1200);
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Volunteer Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Volunteer with Us' : 'स्वयंसेवक के रूप में जुड़ें'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Be the Change • Join Our Active Team of 500+ Field Workers
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <section className="py-12 max-w-[700px] mx-auto px-6">
        
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 md:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            
            {/* Standard enrollment input Form */}
            {!membershipCard && (
              <motion.div
                key="enroll-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2 text-center max-w-md mx-auto">
                  <Clipboard className="w-10 h-10 text-secondary mx-auto mb-1 animate-pulse" />
                  <h3 className="text-xl font-bold text-primary font-heading">Field Volunteer Enrollment</h3>
                  <p className="text-xs text-outline font-sans leading-relaxed">
                    Support clinical camps, distribute materials to classrooms, or run creative workshops. Let us know how you would like to aid.
                  </p>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Diya Sen"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. diya@gmail.com"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Mobile Contact Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="e.g. 9820098200"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">District / City Location</label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Pune, Maharashtra"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1.5">Primary Sector of Interest</label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full border border-outline-variant px-4 py-3 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans font-semibold text-primary"
                    >
                      <option value="Education & Teaching">Education & Teaching Campaign Assistance</option>
                      <option value="Medical & Diagnostics Support">Healthcare Camp logistics & Diagnostics support</option>
                      <option value="Women Vocational training">Women Vocational training & Tailoring guidance</option>
                      <option value="Social Media & Fundraisers">Social Media Content & CSR outreach campaigns</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">Your Sincere Motivation</label>
                    <textarea
                      required
                      rows={3}
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      placeholder="Why do you wish to volunteer with HM Care Foundation?"
                      className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                  </div>

                  {/* Submission processing overlay */}
                  <AnimatePresence>
                    {submitting && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-primary/95 text-on-primary rounded-xl p-6 text-center space-y-4 border border-outline-variant/30"
                      >
                        <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto" />
                        <p className="text-xs font-semibold font-sans text-secondary-fixed">{statusText}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!submitting && (
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-container text-on-secondary py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      <span>Register for Field Volunteer</span>
                    </button>
                  )}
                </form>
              </motion.div>
            )}

            {/* Application Succeeded: membership card visualizer */}
            {membershipCard && (
              <motion.div
                key="membership-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center mx-auto shadow border border-tertiary-fixed-dim">
                    <CheckCircle2 className="w-7 h-7 text-on-tertiary-fixed-variant" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary">Membership Activated!</h3>
                  <p className="text-xs text-outline font-sans max-w-sm mx-auto">Your application passed regional coordination standards. Diya Sen or our local coordinator will schedule your field induction program.</p>
                </div>

                {/* Styled Membership Badge */}
                <div className="bg-gradient-to-br from-primary via-primary-container to-tertiary-container rounded-2xl p-6 text-on-primary shadow-2xl border border-outline-variant/30 max-w-sm mx-auto relative overflow-hidden font-sans">
                  {/* Subtle graphical background design */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 bg-secondary/15 w-24 h-24 rounded-full blur-xl pointer-events-none" />

                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRg9Fp0RNOaWEsA7A2g7a2AhspIC1-20FtBsboHIJKY_VZif_2CMJKZylte45mO3NXXVSOgURd3BP7TSyVHjq4NuaOeiYiyxiCwdpIK7PeXtmKsUkUtSlImuG1-aoEEgIC1uykTjDgXI4vIsB0UnA7lPSXwdQDZegRu9RRRdRY5BYF2AX9aqGKZKwq4I0V74qbJCOm75og0Fffp3U-zgmMRbbAUhui8RRdQeWLTjdhbrFuepNfrS-di4dO_PqpSZubSinIStYyK1_" 
                        alt="Logo" 
                        className="w-8 h-8 rounded-full border border-white/20 bg-white p-0.5"
                      />
                      <span className="text-sm font-black font-heading tracking-tight">HM Care Team</span>
                    </div>
                    <span className="bg-secondary text-on-secondary text-[8px] font-black px-2 py-1 rounded tracking-wider uppercase">
                      ACTIVE MEMBER
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="block text-[8px] text-primary-fixed opacity-70 uppercase tracking-widest">Field Worker Name</span>
                      <span className="text-lg font-bold tracking-wide uppercase">{membershipCard.name}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block text-[8px] text-primary-fixed opacity-70 uppercase tracking-widest">Department</span>
                        <span className="font-bold">{membershipCard.department}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-primary-fixed opacity-70 uppercase tracking-widest">District</span>
                        <span className="font-bold">{membershipCard.district}</span>
                      </div>
                    </div>

                    {/* Bottom ID barcode mock */}
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
                      <div>
                        <span className="block text-[8px] text-primary-fixed opacity-70 uppercase tracking-widest font-sans">Active ID</span>
                        <span className="font-mono font-bold tracking-widest text-secondary-fixed">{membershipCard.vID}</span>
                      </div>
                      {/* Barcode mock */}
                      <div className="h-6 flex items-center bg-white/10 rounded px-2 select-none font-mono text-[9px] tracking-widest text-primary-fixed">
                        ||||| | || ||||
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setMembershipCard(null);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setLocation('');
                      setMotivation('');
                    }}
                    className="border border-outline-variant text-primary px-6 py-2.5 rounded-lg font-bold text-xs font-sans tracking-wide uppercase transition-all"
                  >
                    Enroll Another Field Worker
                  </button>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
