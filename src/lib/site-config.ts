/**
 * Site-wide configuration. Header and Footer read from this.
 * Edit values here to update both at once.
 */
export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface WorkItem {
  slug: string;
  title: string;
}

export const site = {
  name: "Liam Oxley",
  tagline: "Product Designer",
  email: "liamoxleydesigns@gmail.com",

  primaryNav: [
    { href: "/#projects-layer", label: "Work" },
    { href: "/about", label: "About" },
  ] satisfies NavLink[],

  work: [
    { slug: "engagement", title: "Engagement" },
    { slug: "stats", title: "Stats" },
    { slug: "navigation", title: "Navigation" },
    { slug: "wander", title: "Wander" },
    { slug: "localisation", title: "Localisation" },
  ] satisfies WorkItem[],

  social: [
    // Fill in your handles, e.g.:
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    // { label: "Read.cv", href: "https://read.cv/your-handle" },
  ] satisfies SocialLink[],

  footer: {
    columns: [
      {
        heading: "Work",
        // Resolved from `work` at render time so adding a case study auto-shows up
        kind: "work" as const,
      },
      {
        heading: "Site",
        kind: "primary-nav" as const,
      },
    ],
    note: "Designed and built with Astro.",
  },
};
