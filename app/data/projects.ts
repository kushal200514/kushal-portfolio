export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  livePreview: string;
  status?: "In Progress" | "Completed";
  meta: {
    timeline: string;
    role: string;
    industry: string;
    result: string;
  };
  description: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "designer-portfolio",
    title: "Designer Portfolio",
    subtitle: "Clean and premium portfolio website",
    cover: "/framer/work-portfolio2.png",
    livePreview: "https://www.framer.com/marketplace/templates/sketch/",
    meta: {
      timeline: "2 weeks",
      role: "UI Designer",
      industry: "Portfolio",
      result: "+59% Engagement",
    },
    description: [
      "Sketch is a modern portfolio and agency template designed to showcase your projects in a clean, creative, and professional style. Perfect for designers, creative agencies, freelancers, and personal portfolios looking to build a strong online presence.",
      "All carefully crafted to create a smooth and engaging experience.",
      "It also features CMS-powered project pages, 3D transform card in the hero section, scroll and reveal effects, custom forms, and many more polished details. A perfect choice for designers, freelancers, creative studios, and personal portfolios looking to build a strong online presence.",
    ],
    gallery: [
      "/framer/projects/portfolio-1.png",
      "/framer/projects/portfolio-2.png",
      "/framer/projects/portfolio-3.png",
      "/framer/projects/portfolio-4.png",
    ],
  },

  {
    slug: "e-commerce-website",
    title: "E-commerce Website",
    subtitle:
      "A clean E-commerce template designed to showcase products with clarity and focus.",
    cover: "/framer/work-ecommerce.png",
    livePreview: "https://www.framer.com/marketplace/templates/uncover/",
    meta: {
      timeline: "4 weeks",
      role: "UI Designer",
      industry: "E-commerce",
      result: "+39% Engagement",
    },
    description: [
      "This is a modern E-commerce template designed for clean product presentation and easy customization. It follows a minimal, light, and professional design language, with subtle animations that add clarity without distraction. The structure is built to support real ecommerce workflows, including a dedicated products CMS and multiple category pages.",
      "The template includes a complete page setup with Home, Products, four category pages, Blog pages, About page, and a custom 404 page, making it ready to publish out of the box. Each page is designed to be flexible and easy to adapt, with clear guidance to help you customize and launch faster.",
      "Whether you’re showcasing a small curated collection or a growing product catalog, this template keeps the focus on content, usability, and structure, without unnecessary complexity.",
    ],
    gallery: [
      "/framer/projects/ecom-1.png",
      "/framer/projects/ecom-2.png",
      "/framer/projects/ecom-3.png",
      "/framer/projects/ecom-4.png",
    ],
  },

  {
    slug: "ai-website",
    title: "AI Website",
    subtitle: "AI, SaaS & Agency Landing Page",
    status: "In Progress",
    cover: "/framer/work-ai.png",
    livePreview: "#",
    meta: {
      timeline: "In Progress",
      role: "Developer",
      industry: "AI, SaaS",
      result: "Coming Soon",
    },
    description: [
      "This project is currently in progress.",
      "More details and the live project will be available soon.",
    ],
    gallery: [
      "/framer/projects/ai-1.png",
      "/framer/projects/ai-2.png",
      "/framer/projects/ai-3.png",
      "/framer/projects/ai-4.png",
    ],
  },

  {
    slug: "saas-website",
    title: "SaaS Website",
    subtitle: "SaaS & Agency Landing Page",
    status: "In Progress",
    cover: "/framer/work-saas.png",
    livePreview: "#",
    meta: {
      timeline: "In Progress",
      role: "Developer",
      industry: "SaaS",
      result: "Coming Soon",
    },
    description: [
      "This project is currently in progress.",
      "More details and the live project will be available soon.",
    ],
    gallery: [
      "/framer/projects/saas-1.png",
      "/framer/projects/saas-2.png",
      "/framer/projects/saas-3.png",
      "/framer/projects/saas-4.png",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);