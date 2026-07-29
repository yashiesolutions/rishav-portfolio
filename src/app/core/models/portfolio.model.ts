export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string; // digits only, with country code, no + or spaces
  linkedinUrl: string;
  summary: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  stack: string[];
  description: string;
  imageKey: string;
}

export interface AboutContent {
  intro: string;
  paragraphs: string[];
  workPreference: string[];
}
