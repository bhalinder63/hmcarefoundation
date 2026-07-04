export type Tab = 'home' | 'about' | 'programs' | 'projects' | 'gallery' | 'contact' | 'donate' | 'volunteer';

export type Language = 'en' | 'hi';

export interface Activity {
  id: string;
  title: string;
  titleHi: string;
  date: string;
  image: string;
  category: 'health' | 'education' | 'empowerment';
  summary: string;
  summaryHi: string;
  content: string;
  contentHi: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  quoteHi: string;
  name: string;
  role: string;
  roleHi: string;
  avatarLetter: string;
}

export interface Program {
  id: string;
  title: string;
  titleHi: string;
  icon: string;
  color: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  impactMetric: string;
  impactMetricLabel: string;
  impactMetricLabelHi: string;
  initiatives: string[];
  initiativesHi: string[];
}

export interface Project {
  id: string;
  title: string;
  titleHi: string;
  category: string;
  description: string;
  descriptionHi: string;
  image: string;
  raised: number;
  goal: number;
  donorCount: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'health' | 'education' | 'empowerment' | 'community';
  image: string;
}
