import resumeEn from "../../resume.json";
import resumeEs from "../../resume.es.json";
import portfolioEn from "../data/portfolio.en.json";
import portfolioEs from "../data/portfolio.es.json";
import { ui, type Locale, type UIStrings } from "../i18n/ui";

export type { Locale, UIStrings };

/* ---------- resume.json (rxresu.me subset) ---------- */
export interface Website {
  url: string;
  label?: string;
}
export interface Basics {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  website: Website;
}
export interface ExperienceRole {
  position: string;
  period: string;
  description: string; // HTML
}
export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  website: Website;
  description: string; // HTML
  roles: ExperienceRole[];
  skills?: string[];
}
export interface EducationItem {
  school: string;
  degree: string;
  area: string;
  location: string;
  period: string;
  website: Website;
  description: string;
}
export interface ProjectItem {
  name: string;
  period: string;
  website: Website;
  description: string; // HTML
}
export interface SkillItem {
  name: string;
  proficiency: string;
  level: number; // 1..5
  keywords: string[];
}
export interface LanguageItem {
  language: string;
  fluency: string;
  level: number;
}
export interface InterestItem {
  name: string;
  keywords: string[];
}
export interface CertItem {
  title: string;
  issuer: string;
  date: string;
  website: Website;
}
export interface VolunteerItem {
  organization: string;
  location: string;
  period: string;
  website: Website;
  description: string; // HTML
}

/* ---------- portfolio.*.json (extra sections) ---------- */
export interface VentureItem {
  name: string;
  sector: string;
  url: string;
  description?: string;
}
export interface Ventures {
  name: string;
  url: string;
  tagline: string;
  items: VentureItem[];
}
export interface NamedLink {
  name: string;
  url?: string;
}
export interface ServiceLink {
  label: string;
  url: string;
}
export interface Service {
  name: string;
  description: string;
  links: ServiceLink[];
}
export interface CivicItem {
  organization: string;
  role: string;
  period: string;
  highlights: string[];
  links: ServiceLink[];
}
export interface IdeaItem {
  name: string;
  sector: string;
  description: string;
  url: string;
}
export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  category: "professional" | "social" | "music" | "contact";
}
export interface Portfolio {
  ventures: Ventures;
  values: { items: NamedLink[]; thinkTanks: NamedLink[] };
  services: Service[];
  civicWork: CivicItem[];
  ideas: IdeaItem[];
  socialLinks: SocialLink[];
}

export interface ResumeData {
  locale: Locale;
  ui: UIStrings;
  basics: Basics;
  summary: { content: string };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillItem[];
  languages: LanguageItem[];
  interests: InterestItem[];
  certifications: CertItem[];
  volunteer: VolunteerItem[];
  portfolio: Portfolio;
}

const resumes = { en: resumeEn, es: resumeEs } as const;
const portfolios = { en: portfolioEn, es: portfolioEs } as const;

export function getResume(locale: Locale): ResumeData {
  const r = resumes[locale] as unknown as {
    basics: Basics;
    summary: { content: string };
    sections: {
      experience: { items: ExperienceItem[] };
      education: { items: EducationItem[] };
      projects: { items: ProjectItem[] };
      skills: { items: SkillItem[] };
      languages: { items: LanguageItem[] };
      interests: { items: InterestItem[] };
      certifications: { items: CertItem[] };
      volunteer: { items: VolunteerItem[] };
    };
  };
  return {
    locale,
    ui: ui[locale],
    basics: r.basics,
    summary: r.summary,
    experience: r.sections.experience.items,
    education: r.sections.education.items,
    projects: r.sections.projects.items,
    skills: r.sections.skills.items,
    languages: r.sections.languages.items,
    interests: r.sections.interests.items,
    certifications: r.sections.certifications.items,
    volunteer: r.sections.volunteer.items,
    portfolio: portfolios[locale] as unknown as Portfolio,
  };
}

/** Locale-aware in-page path that preserves the current hash. */
export function localizedPath(locale: Locale, hash = ""): string {
  const base = locale === "es" ? "/es/" : "/";
  return hash ? `${base}#${hash}` : base;
}
