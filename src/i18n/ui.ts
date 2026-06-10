export type Locale = "en" | "es";

export interface UIStrings {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    ventures: string;
    skills: string;
    services: string;
    education: string;
    contact: string;
    openToWork: string;
  };
  hero: {
    greeting: string;
    roleSeparator: string;
    ctaContact: string;
    ctaVentures: string;
    ctaCV: string;
    stats: { years: string; companies: string; ventures: string };
  };
  sections: Record<string, { title: string; subtitle?: string }>;
  labels: {
    present: string;
    viewProject: string;
    viewRepo: string;
    visitSite: string;
    readMore: string;
    readLess: string;
    toggleTheme: string;
    backToTop: string;
  };
  footer: { builtWith: string; rights: string };
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Andrés Peña Castillo — Site Reliability Engineer & Serial Entrepreneur",
      description:
        "Site Reliability Engineer and serial entrepreneur with 10+ years in tech (IBM, Western Union, Roche, HPE). Cloud & cluster management with GitOps, CTO and co-founder of EdTech, AgriTech and Web3 startups.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      ventures: "Ventures",
      skills: "Skills",
      services: "Services",
      education: "Education",
      contact: "Contact",
      openToWork: "Open to opportunities",
    },
    hero: {
      greeting: "Hi, I'm",
      roleSeparator: " · ",
      ctaContact: "Get in touch",
      ctaVentures: "View ventures",
      ctaCV: "Download CV",
      stats: { years: "Years in tech", companies: "Multinationals", ventures: "Ventures & startups" },
    },
    sections: {
      about: { title: "About me" },
      experience: { title: "Professional Experience", subtitle: "10+ years across SRE, cloud and end-user computing" },
      ventures: { title: "Ventures & Startups", subtitle: "Building under the ChimeraNext umbrella" },
      values: { title: "Values & Think Tanks", subtitle: "The ideas and institutions I align with" },
      skills: { title: "Technical Skills" },
      services: { title: "Services & Consulting", subtitle: "Available for freelance work" },
      education: { title: "Formal Education" },
      certifications: { title: "Certifications" },
      civic: { title: "Community Volunteering" },
      communities: { title: "Communities I Lead" },
      languages: { title: "Languages" },
      ideas: { title: "Business Ideas", subtitle: "Early-stage concepts on hiatus" },
      interests: { title: "Beyond Work" },
      contact: { title: "Let's connect", subtitle: "Find me across the web" },
    },
    labels: {
      present: "Present",
      viewProject: "View project",
      viewRepo: "View repo",
      visitSite: "Visit site",
      readMore: "Show details",
      readLess: "Hide details",
      toggleTheme: "Toggle theme",
      backToTop: "Back to top",
    },
    footer: {
      builtWith: "Built with Astro · hosted on GitHub Pages",
      rights: "All rights reserved.",
    },
  },
  es: {
    htmlLang: "es",
    meta: {
      title: "Andrés Peña Castillo — Site Reliability Engineer y Emprendedor Serial",
      description:
        "Site Reliability Engineer y emprendedor serial con más de 10 años en tecnología (IBM, Western Union, Roche, HPE). Gestión de cloud y clusters con GitOps, CTO y co-fundador de startups EdTech, AgriTech y Web3.",
    },
    nav: {
      about: "Perfil",
      experience: "Experiencia",
      ventures: "Startups",
      skills: "Skills",
      services: "Servicios",
      education: "Educación",
      contact: "Contacto",
      openToWork: "Abierto a oportunidades",
    },
    hero: {
      greeting: "Hola, soy",
      roleSeparator: " · ",
      ctaContact: "Contactame",
      ctaVentures: "Ver startups",
      ctaCV: "Descargar CV",
      stats: { years: "Años en tecnología", companies: "Multinacionales", ventures: "Ventures y startups" },
    },
    sections: {
      about: { title: "Sobre mí" },
      experience: { title: "Experiencia Profesional", subtitle: "10+ años entre SRE, cloud y end-user computing" },
      ventures: { title: "Startups & Proyectos", subtitle: "Construyendo bajo el paraguas ChimeraNext" },
      values: { title: "Valores & Think Tanks", subtitle: "Las ideas e instituciones con las que me alineo" },
      skills: { title: "Habilidades Técnicas" },
      services: { title: "Servicios & Consultoría", subtitle: "Disponible para trabajo freelance" },
      education: { title: "Educación Formal" },
      certifications: { title: "Certificaciones" },
      civic: { title: "Voluntariado Comunitario" },
      communities: { title: "Comunidades que Lidero" },
      languages: { title: "Idiomas" },
      ideas: { title: "Ideas de Negocio", subtitle: "Conceptos en etapa temprana, en hiatus" },
      interests: { title: "Más allá del trabajo" },
      contact: { title: "Conectemos", subtitle: "Encontrame en la web" },
    },
    labels: {
      present: "Actualidad",
      viewProject: "Ver proyecto",
      viewRepo: "Ver repo",
      visitSite: "Visitar sitio",
      readMore: "Ver detalles",
      readLess: "Ocultar detalles",
      toggleTheme: "Cambiar tema",
      backToTop: "Volver arriba",
    },
    footer: {
      builtWith: "Hecho con Astro · alojado en GitHub Pages",
      rights: "Todos los derechos reservados.",
    },
  },
};
