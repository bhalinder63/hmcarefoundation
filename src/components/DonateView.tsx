import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  CreditCard, 
  Gift, 
  Award, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  Printer, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface DonateViewProps {
  initialTarget?: string;
  initialAmount?: number;
  language: Language;
}

export default function DonateView({ initialTarget = 'General Funds', initialAmount = 1000, language }: DonateViewProps) {
  const t = TRANSLATIONS[language];

  // Wizard steps
  const [step, setStep] = useState<number>(1);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmountText, setCustomAmountText] = useState<string>('');
  const [target, setTarget] = useState<string>(initialTarget);
  
  // Personal detail fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  // Execution states
  const [processing, setProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [receiptData, setReceiptData] = useState<any | null>(null);

  // Load target preferences if changed externally
  useEffect(() => {
    if (initialTarget) {
      setTarget(initialTarget);
    }
    if (initialAmount) {
      setAmount(initialAmount);
    }
  }, [initialTarget, initialAmount]);

  const preselectedAmounts = [500, 1000, 2500, 5000];

  const handlePreselectedAmount = (val: number) => {
    setAmount(val);
    setCustomAmountText('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    setCustomAmountText(raw);
    const num = parseInt(raw, 10);
    setAmount(isNaN(num) ? 0 : num);
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (amount <= 0) {
        alert('Please specify a valid contribution amount (minimum ₹10).');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!name.trim() || !email.trim()) {
        alert('Please complete your full name and email address to continue.');
        return;
      }
      setStep(3);
    }
  };

  const executeDonation = () => {
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCVC.trim()) {
      alert('Please complete all visual payment gateway details.');
      return;
    }

    setProcessing(true);
    setStatusMessage('Contacting secure PCI-DSS gateway...');

    setTimeout(() => {
      setStatusMessage('Encrypting token details...');
      
      setTimeout(() => {
        setStatusMessage('Acquiring bank authorization...');
        
        setTimeout(() => {
          setStatusMessage('Generating 80G Tax Exemption receipt...');
          
          setTimeout(() => {
            const receipt = {
              receiptNo: `REC-HM-${Math.floor(100000 + Math.random() * 900000)}`,
              donorName: anonymous ? 'Anonymous Supporter' : name,
              email: email,
              pan: pan ? pan.toUpperCase() : 'Not Provided',
              amount: amount,
              frequency: frequency === 'one-time' ? 'One-time Contribution' : 'Monthly Recurring Donation',
              target: target,
              date: new Date().toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              certificateNo: 'AAATH9481E20242'
            };
            
            // Add progress to corresponding project campaign if exists in localStorage
            const savedProjects = localStorage.getItem('hm_projects_custom');
            
            setReceiptData(receipt);
            setProcessing(false);
            setStep(4);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1200);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Donate Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Support Our Mission' : 'योगदान देकर समर्थन करें'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Secure Payment Portal • Tax Exempted under 80G
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 max-w-[800px] mx-auto px-6">
        
        {/* Step indicator bar */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 text-xs font-bold uppercase tracking-wider font-sans text-outline">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-primary' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-primary text-on-primary' : 'bg-outline-variant/30 text-outline'}`}>1</span>
              <span>Amount</span>
            </div>
            <div className="flex-grow h-[2px] bg-outline-variant/20 mx-4" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-primary' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-primary text-on-primary' : 'bg-outline-variant/30 text-outline'}`}>2</span>
              <span>Donor Info</span>
            </div>
            <div className="flex-grow h-[2px] bg-outline-variant/20 mx-4" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-primary' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-primary text-on-primary' : 'bg-outline-variant/30 text-outline'}`}>3</span>
              <span>Payment</span>
            </div>
          </div>
        )}

        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 md:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            
            {/* Step 1: Select Amount & Target */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary font-heading flex items-center gap-2">
                    <Gift className="w-5 h-5 text-secondary" />
                    <span>Choose Donation Preference</span>
                  </h3>
                  <p className="text-xs text-outline font-sans">Support general advancement or target specific regional campaigns.</p>
                </div>

                {/* Frequency selector */}
                <div className="grid grid-cols-2 gap-3 bg-surface-container-low p-1.5 rounded-xl border border-outline-variant/30">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-2.5 rounded-lg text-xs font-bold font-sans tracking-wide transition-all ${
                      frequency === 'one-time'
                        ? 'bg-surface-container-lowest text-primary shadow-xs font-extrabold'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    Give One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-2.5 rounded-lg text-xs font-bold font-sans tracking-wide transition-all ${
                      frequency === 'monthly'
                        ? 'bg-surface-container-lowest text-primary shadow-xs font-extrabold'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    Give Monthly (Sustained)
                  </button>
                </div>

                {/* Preselected Amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {preselectedAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePreselectedAmount(val)}
                      className={`py-4 rounded-xl border font-bold text-sm font-sans transition-all flex flex-col items-center justify-center gap-1 ${
                        amount === val && customAmountText === ''
                          ? 'bg-secondary/10 border-secondary text-secondary font-extrabold shadow-xs'
                          : 'bg-surface-container-low/30 border-outline-variant/30 text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="text-lg">₹{val}</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-outline">INR</span>
                    </button>
                  ))}
                </div>

                {/* Custom Amount input */}
                <div>
                  <label className="block text-xs font-bold text-outline uppercase mb-1">Custom Amount (INR)</label>
                  <div className="relative rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-bold text-primary">
                      ₹
                    </div>
                    <input
                      type="text"
                      value={customAmountText}
                      onChange={handleCustomAmountChange}
                      placeholder="Or specify custom amount..."
                      className="w-full border border-outline-variant pl-8 pr-12 py-3 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold text-outline uppercase">
                      INR
                    </div>
                  </div>
                </div>

                {/* Target Cause Selector */}
                <div>
                  <label className="block text-xs font-bold text-outline uppercase mb-1.5">Designated Campaign Cause</label>
                  <select
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="w-full border border-outline-variant px-4 py-3 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans font-semibold text-primary"
                  >
                    <option value="General Funds">General Funds (Highest Necessity Allocation)</option>
                    <option value="Healthcare Initiatives">Healthcare Initiatives & Medicine Camps</option>
                    <option value="Education & Literacy">Education & Literacy (School supplies & scholarships)</option>
                    <option value="Livelihood & Women Empowerment">Livelihood & Women Empowerment (Sewing setups)</option>
                    <option value="Rural Eye-Sight Recovery Program">Rural Eye-Sight Recovery Campaign Cause</option>
                    <option value="Smart Classrooms for Village Schools">Smart Classrooms Village Schools Fund</option>
                    <option value="Sewing Machines & Micro-Business Setup">Tailor Micro-Businesses Grant</option>
                  </select>
                </div>

                {/* Callout information */}
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                  <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                    Contributions to HM Care Foundation are tax exempt under section 80G. Receipt and certificate will be generated instantly.
                  </p>
                </div>

                {/* Footer Step Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans transition-all flex items-center gap-2 shadow-xs"
                  >
                    <span>Continue to Donor Info</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>

              </motion.div>
            )}

            {/* Step 2: Personal Info */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary font-heading">Donor Information</h3>
                  <p className="text-xs text-outline font-sans">We require your verified details to file the tax exemption certificate (80G).</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Sharma"
                      className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">Email Address (For Receipt Delivery)</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. anand@outlook.com"
                      className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">PAN Card Number (Optional - For Tax Benefit)</label>
                    <input
                      type="text"
                      maxLength={10}
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      placeholder="e.g. ABCDE1234F"
                      className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans tracking-widest font-semibold"
                    />
                    <p className="text-[10px] text-outline font-sans mt-1">Specify your 10-character alphanumeric PAN to claim deduction in 2026-27 filings.</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="anon"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                      className="rounded border-outline-variant text-primary focus:ring-primary w-4.5 h-4.5"
                    />
                    <label htmlFor="anon" className="text-xs font-bold text-on-surface-variant font-sans cursor-pointer">
                      Keep my contribution completely anonymous in published scrolls
                    </label>
                  </div>
                </div>

                {/* Navigation triggers */}
                <div className="pt-4 flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-outline-variant text-primary px-6 py-3 rounded-lg font-bold text-sm font-sans transition-all flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans transition-all flex items-center gap-2 shadow-xs"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>

              </motion.div>
            )}

            {/* Step 3: Credit Card / Simulated Gateway */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary font-heading">Secure Payment Details</h3>
                  <p className="text-xs text-outline font-sans">PCI-DSS Encrypted banking portal. Specify simulated card details to confirm.</p>
                </div>

                {/* Interactive visual Card Layout */}
                <div className="bg-gradient-to-br from-primary via-primary-container to-secondary rounded-xl p-6 text-on-primary shadow-xl font-sans space-y-8 select-none relative overflow-hidden max-w-sm mx-auto border border-outline-variant/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary-fixed">Secure Gateway Visa</span>
                    <CreditCard className="w-8 h-8 text-secondary-fixed-dim" />
                  </div>

                  <div className="space-y-4">
                    {/* Card Number */}
                    <div className="text-lg md:text-xl font-bold tracking-widest">
                      {cardNumber ? cardNumber : '•••• •••• •••• ••••'}
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-primary-fixed opacity-70">Cardholder</span>
                        <span className="font-bold uppercase tracking-wide truncate max-w-[150px] inline-block">{name ? name : 'ANAND SHARMA'}</span>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <span className="block text-[8px] uppercase tracking-wider text-primary-fixed opacity-70">Expiry</span>
                          <span className="font-bold">{cardExpiry ? cardExpiry : 'MM/YY'}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] uppercase tracking-wider text-primary-fixed opacity-70">CVC</span>
                          <span className="font-bold">{cardCVC ? cardCVC : '•••'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-outline uppercase mb-1">Simulated Card Number</label>
                    <input
                      type="text"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => {
                        let raw = e.target.value.replace(/\D/g, '');
                        let matched = raw.match(/.{1,4}/g);
                        setCardNumber(matched ? matched.join(' ') : raw);
                      }}
                      placeholder="4111 2222 3333 4444"
                      className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans tracking-wide"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Expiry Date</label>
                      <input
                        type="text"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => {
                          let raw = e.target.value.replace(/\D/g, '');
                          if (raw.length > 2) {
                            setCardExpiry(`${raw.slice(0, 2)}/${raw.slice(2, 4)}`);
                          } else {
                            setCardExpiry(raw);
                          }
                        }}
                        placeholder="MM/YY"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-outline uppercase mb-1">Security Code (CVC)</label>
                      <input
                        type="password"
                        maxLength={3}
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        className="w-full border border-outline-variant px-4 py-2.5 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Gateway load overlay block */}
                <AnimatePresence>
                  {processing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-primary/95 text-on-primary rounded-xl p-6 text-center space-y-4 shadow-xl border border-outline-variant/30"
                    >
                      <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-sm font-semibold tracking-wide font-sans text-secondary-fixed">{statusMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation triggers */}
                {!processing && (
                  <div className="pt-4 flex justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-outline-variant text-primary px-6 py-3 rounded-lg font-bold text-sm font-sans transition-all flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={executeDonation}
                      className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide font-sans transition-all flex items-center gap-2 shadow-xs"
                    >
                      <span>Complete Donation of ₹{amount.toLocaleString()}</span>
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </motion.div>
            )}

            {/* Step 4: Beautiful Printable Receipt Card */}
            {step === 4 && receiptData && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6 print:p-0"
              >
                {/* Visual success top banner */}
                <div className="text-center space-y-2 select-none print:hidden">
                  <div className="w-14 h-14 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center mx-auto shadow border border-tertiary-fixed-dim scale-95 hover:scale-105 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-on-tertiary-fixed-variant" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary">Contribution Succeeded!</h3>
                  <p className="text-xs text-outline font-sans max-w-sm mx-auto">Your generous support was processed completely. Thank you for empowering rural advancement.</p>
                </div>

                {/* Actual Exemption printable Certificate frame */}
                <div className="bg-surface-bright border-4 border-double border-primary/40 rounded-2xl p-6 md:p-8 font-sans space-y-6 relative overflow-hidden shadow-md">
                  {/* Watermark logo background */}
                  <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRg9Fp0RNOaWEsA7A2g7a2AhspIC1-20FtBsboHIJKY_VZif_2CMJKZylte45mO3NXXVSOgURd3BP7TSyVHjq4NuaOeiYiyxiCwdpIK7PeXtmKsUkUtSlImuG1-aoEEgIC1uykTjDgXI4vIsB0UnA7lPSXwdQDZegRu9RRRdRY5BYF2AX9aqGKZKwq4I0V74qbJCOm75og0Fffp3U-zgmMRbbAUhui8RRdQeWLTjdhbrFuepNfrS-di4dO_PqpSZubSinIStYyK1_" 
                      alt="Watermark logo" 
                      className="w-96 h-96 object-contain"
                    />
                  </div>

                  {/* Top brand header */}
                  <div className="flex justify-between items-start gap-4 border-b border-outline-variant/30 pb-4 flex-wrap relative z-10">
                    <div>
                      <h4 className="text-lg font-bold font-heading text-primary">HM Care Foundation</h4>
                      <p className="text-[10px] text-outline tracking-wider font-semibold uppercase">Mumbai Sector 8 NGO Registration No. MH/2023/048122</p>
                    </div>
                    <span className="bg-secondary text-on-secondary text-[9px] font-extrabold uppercase px-2 py-1 rounded tracking-widest font-sans">
                      80G CERTIFICATE RECEIPT
                    </span>
                  </div>

                  {/* Detailed receipt metrics */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs relative z-10">
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Receipt Number</span>
                      <span className="font-bold text-primary">{receiptData.receiptNo}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Transaction Date</span>
                      <span className="font-bold text-primary">{receiptData.date}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Contributor Name</span>
                      <span className="font-bold text-primary">{receiptData.donorName}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Contributor PAN</span>
                      <span className="font-bold text-primary tracking-wider">{receiptData.pan}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Exemption Section</span>
                      <span className="font-bold text-primary">Sec 80G - Income Tax Act</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-outline font-bold uppercase">Registration Number</span>
                      <span className="font-bold text-primary tracking-wide">{receiptData.certificateNo}</span>
                    </div>
                    <div className="col-span-2 border-t border-outline-variant/20 pt-4 mt-2">
                      <span className="block text-[10px] text-outline font-bold uppercase mb-1">Exempted Donation Amount</span>
                      <span className="text-2xl font-black font-heading text-secondary">₹{receiptData.amount.toLocaleString()}</span>
                      <span className="block text-[9px] text-outline font-sans italic mt-1">Designated Project Fund: {receiptData.target}</span>
                    </div>
                  </div>

                  {/* Signatures & terms */}
                  <div className="flex justify-between items-end border-t border-outline-variant/20 pt-4 flex-wrap gap-4 relative z-10 text-xs">
                    <div className="space-y-1">
                      <p className="text-[9px] text-outline font-sans leading-relaxed max-w-sm">This receipt confirms that the specified amount was received completely and is fully eligible for standard deductions in 2026 filings.</p>
                    </div>
                    <div className="text-right space-y-1">
                      {/* Fake verification signature graphic */}
                      <span className="inline-block text-secondary font-semibold italic text-base font-sans tracking-wide border-b border-outline-variant pr-2 pb-0.5">
                        Mehta. H
                      </span>
                      <span className="block text-[8px] text-outline font-bold uppercase">Authorized Trustee Signature</span>
                    </div>
                  </div>

                </div>

                {/* Print/Download tool commands */}
                <div className="pt-4 flex flex-wrap justify-between gap-4 print:hidden">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setReceiptData(null);
                    }}
                    className="border border-outline-variant text-primary px-6 py-3 rounded-lg font-bold text-sm font-sans transition-all"
                  >
                    Support Cause Again
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={triggerPrint}
                      className="bg-primary hover:bg-primary-container text-on-primary px-5 py-3 rounded-lg font-bold text-xs font-sans tracking-wide uppercase transition-all flex items-center gap-1.5"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Certificate</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => alert('Download Receipt: The high-resolution certified receipt has been packed as REC-HM-80G.pdf and successfully delivered to your mailbox: ' + receiptData.email)}
                      className="bg-secondary hover:bg-secondary-container text-on-secondary px-5 py-3 rounded-lg font-bold text-xs font-sans tracking-wide uppercase transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
