import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flag, 
  Eye, 
  Users, 
  GraduationCap, 
  Stethoscope, 
  ArrowRight, 
  Quote, 
  Check, 
  Clock, 
  Plus, 
  X,
  Sparkles
} from 'lucide-react';
import { Tab, Language, Activity, Testimonial } from '../types';
import { ACTIVITIES, TESTIMONIALS, TRANSLATIONS } from '../data';

interface HomeViewProps {
  setActiveTab: (tab: Tab) => void;
  language: Language;
}

export default function HomeView({ setActiveTab, language }: HomeViewProps) {
  const t = TRANSLATIONS[language];
  
  // Newsletter state
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState<string[]>([]);

  // Story state
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [newQuote, setNewQuote] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [storySuccess, setStorySuccess] = useState(false);

  // Selected Activity detail modal
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Load subscriptions and testimonials from localStorage
  useEffect(() => {
    const savedEmails = localStorage.getItem('hm_newsletter_subscribers');
    if (savedEmails) {
      setSubscribers(JSON.parse(savedEmails));
    }

    const savedTestimonials = localStorage.getItem('hm_testimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const updated = [...subscribers, email.trim()];
    setSubscribers(updated);
    localStorage.setItem('hm_newsletter_subscribers', JSON.stringify(updated));
    setNewsletterSubscribed(true);
    setEmail('');

    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 6000);
  };

  const handleAddStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote.trim() || !newName.trim() || !newRole.trim()) return;

    const item: Testimonial = {
      id: `custom-testimonial-${Date.now()}`,
      quote: newQuote,
      quoteHi: newQuote, // Use same for translation simplicity
      name: newName,
      role: newRole,
      roleHi: newRole,
      avatarLetter: newName.charAt(0).toUpperCase()
    };

    const updated = [item, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('hm_testimonials', JSON.stringify(updated));

    setNewQuote('');
    setNewName('');
    setNewRole('');
    setShowStoryForm(false);
    setStorySuccess(true);

    setTimeout(() => {
      setStorySuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full flex flex-col items-center bg-background">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[600px] flex items-center bg-surface-container-high overflow-hidden select-none">
        <div 
          className="absolute inset-0 bg-cover bg-center w-full h-full opacity-60" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDXBVs4COLxI4K-ZpO9F0pBz_VQ_V8QLCYTACaeTXy-nywaCTp0OZHAPgOFu8UdbRnQZpYUT1i_MxLBWkprencPWLyutRjz0xybNkvXAVSJ_6_qZ79baZpVJ90VYEGPoXPOkN_zUsCC1C-FZCCmlcvhzOezLEo8WRT7gO5uM7wZzOGlxOHSuA4tgKhHkOfLsfpAzFW4_8DBiag0X7L0RxFFB3izte_Wh-pP8nKHqaJ6oCQ-8jQ70OG2z34L3Juf2mo2Klo8k1moefZ')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent"></div>
        
        <div className="relative z-10 px-6 max-w-[1200px] mx-auto w-full text-on-primary">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
              {t.slogan}
            </h1>
            <p className="text-lg md:text-xl font-sans text-on-primary/90 mb-8 leading-relaxed max-w-xl">
              {t.heroTag}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => { setActiveTab('donate'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans hover:bg-secondary-container transition-all hover:ambient-shadow-lvl2 duration-200 active:scale-95"
              >
                {t.donateNow}
              </button>
              <button 
                onClick={() => { setActiveTab('volunteer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-transparent border-2 border-primary-fixed text-primary-fixed hover:bg-primary-fixed/20 px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans transition-all active:scale-95"
              >
                {t.volunteer}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Organization Introduction */}
      <section className="py-20 bg-surface-bright w-full border-b border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              {t.welcomeTitle}
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-sans">
              {t.welcomeDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-surface-container-lowest w-full">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-surface-bright p-8 rounded-xl ambient-shadow-lvl2 border-t-4 border-primary flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-fixed rounded-lg text-primary">
                    <Flag className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary">{t.ourMission}</h3>
                </div>
                <p className="text-on-surface-variant font-sans leading-relaxed text-base">
                  {t.ourMissionDesc}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-surface-bright p-8 rounded-xl ambient-shadow-lvl2 border-t-4 border-secondary flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary-fixed rounded-lg text-secondary">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary">{t.ourVision}</h3>
                </div>
                <p className="text-on-surface-variant font-sans leading-relaxed text-base">
                  {t.ourVisionDesc}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Impact Statistics */}
      <section className="py-16 bg-surface-container-low w-full border-t border-b border-outline-variant/25">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stat 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow-lvl1 flex flex-col items-center text-center group border border-outline-variant/10">
              <div className="p-4 bg-secondary/10 rounded-full text-secondary mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black font-heading text-secondary mb-2 tracking-tight">
                10k+
              </h3>
              <p className="text-sm font-bold font-sans text-outline uppercase tracking-wider">
                {t.beneficiaries}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow-lvl1 flex flex-col items-center text-center group border border-outline-variant/10">
              <div className="p-4 bg-primary/10 rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black font-heading text-primary mb-2 tracking-tight">
                5k+
              </h3>
              <p className="text-sm font-bold font-sans text-outline uppercase tracking-wider">
                {t.students}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow-lvl1 flex flex-col items-center text-center group border border-outline-variant/10">
              <div className="p-4 bg-tertiary/15 rounded-full text-tertiary mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-10 h-10" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black font-heading text-tertiary-container text-tertiary mb-2 tracking-tight">
                100+
              </h3>
              <p className="text-sm font-bold font-sans text-outline uppercase tracking-wider">
                {t.healthCamps}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Latest Activities */}
      <section className="py-20 bg-surface-bright w-full">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12 text-center tracking-tight">
            {t.latestActivities}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACTIVITIES.map((act) => (
              <motion.div 
                key={act.id}
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow-lvl1 flex flex-col hover:ambient-shadow-lvl2 border border-outline-variant/20 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative group">
                  <img 
                    alt={language === 'en' ? act.title : act.titleHi} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={act.image}
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-xs text-on-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {act.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold font-sans text-secondary mb-2 block tracking-wide">
                    {act.date}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-on-surface mb-3 line-clamp-1">
                    {language === 'en' ? act.title : act.titleHi}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-sans mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {language === 'en' ? act.summary : act.summaryHi}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedActivity(act)}
                    className="text-primary font-bold text-sm font-sans inline-flex items-center gap-1.5 hover:text-secondary hover:underline transition-all mt-auto self-start"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials (Voices of Impact) */}
      <section className="py-20 bg-surface-container-low w-full border-t border-outline-variant/15">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary tracking-tight">
              {t.voicesOfImpact}
            </h2>
            <button
              onClick={() => setShowStoryForm(!showStoryForm)}
              className="bg-primary hover:bg-primary-container text-on-primary font-bold text-sm px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Share Your Story</span>
            </button>
          </div>

          <AnimatePresence>
            {showStoryForm && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-surface-bright border border-outline-variant/50 rounded-xl p-6 mb-10 shadow-sm"
              >
                <form onSubmit={handleAddStory} className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <span>How has HM Care Foundation impacted you or your neighborhood?</span>
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)} 
                      placeholder="e.g. Priyanjali Sen"
                      className="w-full border border-outline-variant px-3 py-2 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Your Relationship/Role</label>
                      <input 
                        type="text" 
                        required 
                        value={newRole} 
                        onChange={(e) => setNewRole(e.target.value)} 
                        placeholder="e.g. Beneficiary, Donor, Volunteer"
                        className="w-full border border-outline-variant px-3 py-2 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Your Testimonial Story</label>
                      <textarea 
                        required 
                        rows={3}
                        value={newQuote} 
                        onChange={(e) => setNewQuote(e.target.value)} 
                        placeholder="Share your sincere experiences here..."
                        className="w-full border border-outline-variant px-3 py-2 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setShowStoryForm(false)}
                      className="px-4 py-2 text-sm font-bold text-outline border border-outline-variant rounded-lg hover:bg-surface-container transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="bg-secondary hover:bg-secondary-container text-on-secondary px-6 py-2 rounded-lg text-sm font-bold transition-all"
                    >
                      Publish Story
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {storySuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-tertiary-fixed text-on-tertiary-fixed p-4 rounded-lg mb-8 flex items-center gap-3 font-semibold text-sm shadow-sm border border-tertiary-fixed-dim"
              >
                <Check className="w-5 h-5 text-on-tertiary-fixed-variant" />
                <span>Thank you! Your impactful voice story has been published successfully and added to the testimonials dashboard.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.01 }}
                className="bg-surface-bright p-8 rounded-xl ambient-shadow-lvl2 relative overflow-hidden border border-outline-variant/10"
              >
                <Quote className="text-secondary/10 absolute -top-2 -left-2 w-28 h-28 transform -rotate-12 pointer-events-none" />
                
                <p className="text-base md:text-lg text-on-surface-variant mb-6 relative z-10 italic leading-relaxed font-sans">
                  "{language === 'en' ? item.quote : item.quoteHi}"
                </p>
                
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary font-bold text-lg flex items-center justify-center border border-outline-variant/30 select-none">
                    {item.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface font-heading">
                      {item.name}
                    </h4>
                    <p className="text-xs font-medium text-outline font-sans">
                      {language === 'en' ? item.role : item.roleHi}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Newsletter Subscription */}
      <section className="py-20 bg-primary-container w-full text-on-primary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 tracking-tight">
              {t.joinCommunity}
            </h2>
            <p className="text-base md:text-lg text-on-primary-container/85 mb-8 max-w-xl mx-auto font-sans leading-relaxed">
              {t.joinCommunityDesc}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder} 
                className="flex-grow px-5 py-3.5 rounded-lg border-0 text-on-surface bg-surface-container-lowest text-sm font-sans placeholder:text-outline focus:ring-2 focus:ring-secondary focus:outline-none transition-all shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans hover:bg-secondary-container transition-all hover:ambient-shadow-lvl2 active:scale-95 duration-150 whitespace-nowrap shadow-sm"
              >
                {t.subscribe}
              </button>
            </form>

            <AnimatePresence>
              {newsletterSubscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-secondary/20 border border-secondary text-secondary-fixed-dim rounded-lg p-3.5 mt-6 inline-flex items-center gap-2 text-sm font-semibold max-w-md mx-auto"
                >
                  <Check className="w-4 h-4 text-secondary-container" />
                  <span>{t.successSubscribe}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Activity Details Modal overlay */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-primary/45 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-outline-variant/30"
            >
              {/* Header Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={selectedActivity.image} 
                  alt={language === 'en' ? selectedActivity.title : selectedActivity.titleHi}
                  className="w-full h-full object-cover" 
                />
                <button 
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 bg-primary/75 text-on-primary hover:bg-primary p-2 rounded-full transition-colors backdrop-blur-xs"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-secondary text-on-secondary px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest">
                  {selectedActivity.category}
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 md:p-8 overflow-y-auto flex-grow space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-outline uppercase font-sans">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Published {selectedActivity.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-primary leading-snug">
                  {language === 'en' ? selectedActivity.title : selectedActivity.titleHi}
                </h3>
                
                <div className="border-l-4 border-secondary pl-4 py-1 italic text-on-surface-variant font-sans text-sm md:text-base bg-surface-container-low/50 rounded-r">
                  {language === 'en' ? selectedActivity.summary : selectedActivity.summaryHi}
                </div>

                <p className="text-sm md:text-base text-on-surface-variant font-sans leading-relaxed whitespace-pre-wrap pt-2">
                  {language === 'en' ? selectedActivity.content : selectedActivity.contentHi}
                </p>

                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs font-bold text-outline font-sans uppercase">
                    Tax Exemption Eligible
                  </span>
                  <button 
                    onClick={() => {
                      setSelectedActivity(null);
                      setActiveTab('donate');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-secondary hover:bg-secondary-container text-on-secondary font-bold text-xs px-5 py-2.5 rounded-lg transition-all"
                  >
                    Support this Initiative
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
