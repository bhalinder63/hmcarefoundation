import React, { useState } from 'react';
import { Tab, Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProgramsView from './components/ProgramsView';
import ProjectsView from './components/ProjectsView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import DonateView from './components/DonateView';
import VolunteerForm from './components/VolunteerForm';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [language, setLanguage] = useState<Language>('en');

  // Redirection states for Donation pre-filling
  const [donationTarget, setDonationTarget] = useState<string>('General Funds');
  const [donationAmount, setDonationAmount] = useState<number>(1000);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} language={language} />;
      case 'about':
        return <AboutView language={language} />;
      case 'programs':
        return (
          <ProgramsView 
            setActiveTab={setActiveTab} 
            setDonationTarget={setDonationTarget} 
            language={language} 
          />
        );
      case 'projects':
        return (
          <ProjectsView 
            setActiveTab={setActiveTab} 
            setDonationTarget={setDonationTarget} 
            setDonationAmount={setDonationAmount}
            language={language} 
          />
        );
      case 'gallery':
        return <GalleryView language={language} />;
      case 'contact':
        return <ContactView language={language} />;
      case 'donate':
        return (
          <DonateView 
            initialTarget={donationTarget} 
            initialAmount={donationAmount} 
            language={language} 
          />
        );
      case 'volunteer':
        return <VolunteerForm language={language} />;
      default:
        return <HomeView setActiveTab={setActiveTab} language={language} />;
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language} 
        setLanguage={setLanguage} 
      />

      {/* Main Dynamic View wrapper */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Shared visual Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        language={language} 
      />
    </div>
  );
}
