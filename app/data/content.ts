/* All copy extracted 1:1 from the Framer project (Emili Hearth portfolio). */

export const profile = {
  name: "Kushal",
  fullName: "Kushal",
  role: "Aspiring Software Developer",
  experienceLabel: "Experience",
  experience: ["Interned at ATS Technologies as a Full stack developer "],
  toolsLabel: "Tools that I use",
  tools: ["VS CODE", "GITHUB", "CLAUDE CODE","CURSOR"],
  cta: { label: "Get In Touch", href: "/contact-page" },
};

export const navLinks = [
  { label: "Projects", href: "/#works" },
  { label: "FAQs", href: "/#faq" },
  { label: "Resume", href: "/#pricing" },
  { label: "Coding", href: "/#coding-section" },
  { label: "Contact", href: "/#contact-section" },
];

export const works = {
  tag: "#Portfolio Pieces",
  heading: "Check Out My Latest Works",
  body: "Check Out My Latest Works",
  cta: { label: "Get In Touch", href: "#contact-section" },
  projects: [
    { tag: "#Webdesign", title: "Portfolio Website", href: "/projects/designer-portfolio", image: "/framer/work-portfolio2.png" },
    { tag: "#Webdesign", title: "E-commerce Website", href: "/projects/e-commerce-website", image: "/framer/work-ecommerce.png" },
    { tag: "#Webdesign", title: "AI Website", href: "/projects/ai-website", image: "/framer/work-ai.png" },
    { tag: "#Webdesign", title: "SaaS Website", href: "/projects/saas-website", image: "/framer/work-saas.png" },
  ],
};

export const about = {
  tag: "#Stack and Process",
  heading: "About My Work and Expertise",

  toolStackLabel: "My Tech Stack",

  toolCategories: [
    {
      title: "Frontend",
      tools: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      tools: ["Node.js", "Express.js", "Python", "Java", "MongoDB"],
    },
    {
      title: "AI",
      tools: ["OpenAI", "Claude", "Gemini", "Python"],
    },
  ],

  // Keep this if your current About component still uses about.tools
  tools: [
    "Figma",
    "Framer",
    "Sketch",
    "OpenAI",
    "Python",
    "github",
  ],

  processLabel: "Work Process",

  process: [
    {
      step: "#Step 1",
      title: "Research & Discovery",
      body: "Define project goals, audience needs, market insights, and key opportunities before starting development.",
    },
    {
      step: "#Step 2",
      title: "Planning & Architecture",
      body: "Plan the application structure, user flow, database requirements, APIs, and technical architecture.",
    },
    {
      step: "#Step 3",
      title: "Development",
      body: "Build responsive frontend interfaces, backend APIs, database systems, and AI-powered features.",
    },
    {
      step: "#Step 4",
      title: "Testing & Deployment",
      body: "Test functionality and performance, fix issues, optimize the application, and prepare it for deployment.",
    },
  ],

  profileGreeting: "Hi :)",
};
export const ticker = ["MY LIFE IS ABOUT EAT,CODE,SLEEP,REPEAT", "#Product Design", "#WEB Design"];

export const faqs = {
  tag: "#Questions",
  heading: "Whom am I?",
  body: "Most common questions others asked",
  items: [
    {
      q: "Which Year of college are you studying in?",
      a: "I am in 3rd year of my B.Tech CSE",
    },
    {
      q: "Have you had a work experience previously?",
      a: "Yes, I had worked as a developer at a startup based company named ATS Technologies ",
    },
    {
      q: "What are you basically intrested in building?",
      a: "I like to build things are which are solving real world problems",
    },
    
    {
      q: "Do you create wireframes and prototypes?",
      a: "Yes, wireframes and prototypes are an important part of the process. They help define the structure, user flow, and functionality early on, ensuring the final design is both user-friendly and aligned with your goals before moving into high-fidelity UI design.",
    },
  ],
};

export const pricing = {
  tag: "#Resume",
  heading: "My Resume",
  body: "A piece of PDF cannot decide my career.",
  cards: [
    {
      badge: "Kushal's Resume",
      title: "Resume",
      price: "SDE Roles",
      cta: {
        label: "View",
        href: "/framer/resume.pdf",
      },
      features: [
        "Education",
        "Technical Skills",
        "Projects",
        "Experience",
        "Achievements",
      ],
    },
  ],
};

export const contact = {
  tag: "#Contact Me",
  heading: "Get In Touch",
  body: "We discussed your project in detail, including your goals and requirements.",
  bookingUrl: "mailto:yourgmail@gmail.com",
  formTabs: ["Send a Message", "Mail Me"],
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "name@gmail.com",
    designLabel: "What are you looking from me?",
    designPlaceholder: "e.g.: Work,Internship offer,collabrate",
    messageLabel: "Message ",
    messagePlaceholder: "Your Message",
    submit: "Submit",
  },
  testimonials: [
   { quote: "Outstanding service and rapid delivery. The completed website looked exactly perfect.", name: "Adam K.", role: "Business Owner", avatar: "/framer/avatar-adam.png" },
    { quote: "Great communication and fast delivery. The final design matched exactly what we wanted.", name: "Edward D.", role: "Creative Strategist", avatar: "/framer/avatar-edward.png" },
    { quote: "Very helpful team and super fast updates. The final graphics came out beautifully. Thanks", name: "Anna E.", role: "Entrepreneur", avatar: "/framer/avatar-anna.png" },
    { quote: "Amazing quality and excellent timing. The finished project was exactly as requested.", name: "Edward D.", role: "Creative Strategist", avatar: "/framer/avatar-edward.png" },
  ],
};

export const footer = {
  name: "Kushal",
  tag: "#Hire me",
  heading: "Get in touch today and let’s get started.",
  body: "So we can discuss the details",
  cta: { label: "Get In Touch", href: "/contact-page" },
  socialsLabel: "Socials Media",
  socials: [
    { label: "Twitter/X", href: "https://x.com" },
    { label: "Instagarm", href: "https://instagram.com" },
    { label: "Linked In", href: "https://linkedin.com" },
  ],
  columns: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "#hero" },
        { label: "Contact", href: "#contact-section" },
        { label: "404", href: "/404-page" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Portfolio", href: "#works" },
        { label: "FAQs", href: "#faq" },
        { label: "Resume", href: "#Pricing" },
        { label: "Contact", href: "#contact-section" },
      ],
    },
    {
      title: "Projects",
      links: [
        { label: "SaaS Website", href: "/projects/saas-website" },
        { label: "AI Website", href: "/projects/ai-website" },
        { label: "E-com Website", href: "/projects/e-commerce-website" },
        { label: "Designer Portfolio", href: "/projects/designer-portfolio" },
      ],
    },
  ],
  copyright: "©2026 kushalbuilds. All rights reserved.",
  credit: "Designed by @kushal",
};
