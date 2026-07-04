import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Eye, X, ArrowLeft, ArrowRight, Grid, Camera } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { GALLERY_ITEMS, TRANSLATIONS } from '../data';

interface GalleryViewProps {
  language: Language;
}

export default function GalleryView({ language }: GalleryViewProps) {
  const t = TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Photos' : 'सभी तस्वीरें' },
    { id: 'health', label: language === 'en' ? 'Healthcare' : 'स्वास्थ्य सेवा' },
    { id: 'education', label: language === 'en' ? 'Education' : 'शिक्षा' },
    { id: 'empowerment', label: language === 'en' ? 'Empowerment' : 'सशक्तिकरण' },
    { id: 'community', label: language === 'en' ? 'Community' : 'सामुदायिक' }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : filteredItems.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1) ? prev + 1 : 0);
  };

  return (
    <div className="w-full bg-background pb-16">
      
      {/* Gallery Header */}
      <section className="bg-primary text-on-primary py-16 px-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-primary to-primary"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            {language === 'en' ? 'Our Photo Gallery' : 'हमारी फोटो गैलरी'}
          </h1>
          <p className="text-sm uppercase font-bold tracking-widest text-secondary-fixed font-sans">
            Moments of Hope • Real Stories Capturings
          </p>
        </div>
      </section>

      {/* Categories select tabs */}
      <section className="py-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap gap-2.5 justify-center mb-12 border-b border-outline-variant/35 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sans transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-secondary text-on-secondary border-secondary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border-outline-variant/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image cards list */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <Camera className="w-12 h-12 mx-auto text-outline/50 animate-bounce" />
            <p className="text-sm font-semibold text-outline">No photos found in this category.</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative bg-surface-container-lowest rounded-xl overflow-hidden cursor-pointer shadow-xs border border-outline-variant/35 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={item.image} 
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 bg-surface-container-lowest text-primary rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/20">
                    <h4 className="text-xs font-extrabold text-secondary uppercase tracking-widest mb-1">
                      {item.category}
                    </h4>
                    <p className="text-sm font-bold text-primary font-sans leading-tight line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 bg-primary/95 backdrop-blur-md z-50 flex flex-col justify-between p-6 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Header controls */}
            <div className="flex justify-between items-center text-on-primary">
              <span className="text-xs font-bold tracking-widest font-sans uppercase">
                HM Care Foundation • Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-on-primary" />
              </button>
            </div>

            {/* Middle slide viewer */}
            <div className="flex-grow flex items-center justify-between gap-4 py-8">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-3 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary rounded-full transition-colors shrink-0"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Main Image container */}
              <motion.div 
                key={filteredItems[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-h-[70vh] max-w-[80vw] overflow-hidden rounded-xl border border-outline-variant/30 bg-black/40 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={filteredItems[lightboxIndex].image} 
                  alt={filteredItems[lightboxIndex].title} 
                  className="max-h-[70vh] max-w-[80vw] object-contain mx-auto"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary rounded-full transition-colors shrink-0"
                aria-label="Next image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer description */}
            <div className="text-center text-on-primary space-y-1 bg-black/25 p-4 rounded-xl max-w-xl mx-auto border border-outline-variant/10">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold font-heading">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
