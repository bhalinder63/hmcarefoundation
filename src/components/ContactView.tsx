import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  Map
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface ContactViewProps {
  language: Language;
}

interface MessageQuery {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function ContactView({ language }: ContactViewProps) {
  const t = TRANSLATIONS[language];

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Queries list (to showcase persistence)
  const [queries, setQueries] = useState<MessageQuery[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hm_contact_queries');
    if (saved) {
      setQueries(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setSubmitting(true);

    // Simulate server-side latency
    setTimeout(() => {
      const newQuery: MessageQuery = {
        id: `query-${Date.now()}`,
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleDateString()
      };

      const updated = [newQuery, ...queries];
      setQueries(updated);
      localStorage.setItem('hm_contact_queries', JSON.stringify(updated));

      // Reset
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitting(false);
      setSuccess(true);

      // Auto-hide success check
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Contact Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Get In Touch' : 'हमसे संपर्क करें'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Have Queries? • Reach Out To Our Field Volunteers
          </p>
        </div>
      </section>

      {/* Main Grid layout */}
      <section className="py-12 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Details & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-primary">Office Headquarters</h2>
            <p className="text-sm text-on-surface-variant font-sans leading-relaxed">
              If you wish to schedule a physical review of our training centers or request mobile clinical aid camps, please contact us directly.
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-4 text-sm font-sans">
            <div className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-primary">Physical Location</h4>
                <p className="text-on-surface-variant mt-0.5">302, Sunrise Chambers, Linking Road, Santacruz (W), Mumbai - 400054, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-primary">Direct Contact Lines</h4>
                <p className="text-on-surface-variant mt-0.5">+91 22 5550 1948 / +91 98200 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
              <Mail className="w-5 h-5 text-tertiary-container shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-primary">Official Email Inbox</h4>
                <p className="text-on-surface-variant mt-0.5">info@hmcarefoundation.org</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">
              <Clock className="w-5 h-5 text-outline shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-primary">Working Hours</h4>
                <p className="text-on-surface-variant mt-0.5">Monday to Saturday: 10:00 AM – 6:00 PM (IST)</p>
              </div>
            </div>
          </div>

          {/* Styled Simulated Google Map Canvas */}
          <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/30 h-64 relative group shadow-inner">
            {/* Aesthetic placeholder styling */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-primary/90 to-transparent text-on-primary">
              <div className="flex justify-between items-start">
                <span className="bg-secondary text-on-secondary text-[10px] font-extrabold uppercase px-2 py-1 rounded-full tracking-wider">
                  Live Map View
                </span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-heading">HM Care Chambers</h4>
                <p className="text-xs text-on-primary/85 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary-fixed-dim" />
                  Santacruz West, Mumbai, India
                </p>
              </div>
            </div>
            
            {/* Grid graphic lines simulating map */}
            <div className="absolute inset-0 -z-10 bg-slate-100 flex items-center justify-center opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="w-16 h-16 rounded-full bg-secondary/15 animate-ping absolute" />
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white shadow-lg flex items-center justify-center relative z-10 text-on-secondary">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form & Query Log panel */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading text-primary">Send Us a Secure Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-outline uppercase mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-outline uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="e.g. ramesh@gmail.com"
                    className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-outline uppercase mb-1">Subject Topic</label>
                <input 
                  type="text" 
                  required 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  placeholder="e.g. CSR Partnership, Volunteer Enrollment"
                  className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-outline uppercase mb-1">Detailed Message</label>
                <textarea 
                  required 
                  rows={4}
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Tell us what you need support with..."
                  className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-secondary hover:bg-secondary-container text-on-secondary py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>{t.loading}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Query</span>
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-tertiary-fixed text-on-tertiary-fixed p-4 rounded-xl border border-tertiary-fixed-dim flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-fixed-variant shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Query Sent Successfully!</h4>
                    <p className="text-xs text-on-tertiary-fixed-variant/90 mt-0.5">Thank you for contacting us. One of our regional coordinators will reply to your email within 24 working hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Persistence Log Display */}
          {queries.length > 0 && (
            <div className="border-t border-outline-variant/30 pt-6 mt-8">
              <div className="flex items-center gap-2 text-primary font-bold font-heading text-sm mb-4">
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span>Your Submitted Queries ({queries.length})</span>
              </div>
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {queries.map((q) => (
                  <div key={q.id} className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20 text-xs">
                    <div className="flex justify-between font-bold text-primary mb-1">
                      <span>{q.subject}</span>
                      <span className="text-[10px] text-outline font-sans">{q.date}</span>
                    </div>
                    <p className="text-on-surface-variant font-sans line-clamp-2">{q.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
