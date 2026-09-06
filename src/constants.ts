import { Project, Skill, Experience, Service } from './types';

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: 'Code2', category: 'Languages' },
  { name: 'JavaScript', icon: 'Braces', category: 'Languages' },
  { name: 'HTML5', icon: 'FileJson', category: 'Languages' },
  { name: 'CSS3', icon: 'Palette', category: 'Languages' },
  { name: 'React', icon: 'Atom', category: 'Frameworks & Libraries' },
  { name: 'Next.js', icon: 'AppWindow', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', icon: 'Wind', category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', icon: 'Layout', category: 'Frameworks & Libraries' },
  { name: 'React Query', icon: 'Database', category: 'Frameworks & Libraries' },
  { name: 'Git/GitHub', icon: 'GitBranch', category: 'Tools & Platforms' },
  { name: 'CI/CD', icon: 'Repeat', category: 'Tools & Platforms' },
  { name: 'Vercel', icon: 'Cloud', category: 'Tools & Platforms' },
  { name: 'Netlify', icon: 'CloudRain', category: 'Tools & Platforms' },
  { name: 'Render', icon: 'Server', category: 'Tools & Platforms' },
  { name: 'Bun', icon: 'Package', category: 'Tools & Platforms' },
  { name: 'PostHog', icon: 'TrendingUp', category: 'Tools & Platforms' },
  { name: 'API Integration', icon: 'Link', category: 'Tools & Platforms' },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Yamlfoods",
    description:
      "A responsive web application engineered to handle dynamic client-side shopping workflows and state persistence.",
    keyTechnicalContributions: [
      "Implemented centralized state management using Redux Toolkit to handle persistent cart operations, coupon calculations, and checkout session states.",
      "Designed modular component layouts with Tailwind CSS, ensuring full mobile-first responsiveness across all viewport sizes.",
      "Optimized product catalog rendering using lazy loading and responsive image formatting, reducing initial page load times by over 30%.",
    ],
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1767283080/Screenshot_2026-01-01_165729_vm3vmj.png",
    techStack: ["React", "Tailwind CSS", "Redux"],
    liveUrl: "https://yamlfoods.ng/",
    githubUrl: "ttps://github.com/yamltech/grocery-shop",
    category: "Fullstack",
  },
  {
    id: "2",
    title: "Yamltech",
    description:
      "Yamltech is a portfolio IT solutions website focused on delivering reliable, secure, and responsive technology services for businesses.",
    keyTechnicalContributions: [
      "Built a typed component architecture using React and TypeScript to enforce code consistency and reduce runtime errors.",
      "Integrated React Query for efficient asynchronous state management, smart caching, and background data fetching.",
      "Applied performance profiling to optimize page load speeds, maintaining strong Core Web Vitals metrics across all landing pages.",
    ],
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1767328654/yamltechl%20landingpage.png",
    techStack: ["React", "TypeScript", "React Query"],
    liveUrl: "https://yamltech.com/",
    githubUrl: "#",
    category: "API-based",
  },
  {
    id: "3",
    title: "Country Info Dashboard",
    description:
      "Interactive website that shows country information and other information API with multi-city support and dynamic backgrounds.",
    keyTechnicalContributions: [
      "Structured client-side API integrations featuring request debouncing and local response caching to prevent rate-limiting and minimize network overhead.",
      "Integrated fluid UI transitions and dynamic backgrounds using Framer Motion, reacting smoothly to search queries and theme toggles.",
      "Implemented accessible search, filtering, and comparison features for complex geographic and demographic data.",
    ],
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1767799281/Screenshot_2026-01-07_161751_cd1skd.png",
    techStack: ["React", "API Integration", "Motion"],
    liveUrl: "https://rest-county-api.netlify.app/",
    githubUrl: "https://github.com/chikamso-cmd/Rest-Api-County",
    category: "API-based",
  },
  {
    id: "4",
    title: "Portfolio Design System",
    description:
      "A comprehensive UI library built with accessibility and performance at its core.",
    keyTechnicalContributions: [
      "Architected custom atomic components such as modals, form controls, and dropdowns using TypeScript and Tailwind CSS with strict prop typing.",
      "Enforced WCAG 2.1 AA accessibility standards, including native keyboard navigation, focus management, and screen-reader support.",
      "Created flexible theme tokens supporting seamless dark and light mode toggles without layout shifting.",
    ],
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1767290067/Screenshot_2026-01-01_185351_rpk2rz.png",
    techStack: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://elaborate-souffle-35aec0.netlify.app/",
    githubUrl: "https://github.com/chikamso-cmd/Portfolio12",
    category: "Fullstack",
  },
  {
    id: "5",
    title: "Bump2Baby",
    description:
      "Bump2Baby is a maternal health platform providing expectant mothers with personalized pregnancy tracking and healthcare insights.",
    keyTechnicalContributions: [
      "Developed user-centric dashboards featuring milestone trackers, interactive calendars, and structured resource libraries.",
      "Ensured mobile-first usability with optimized touch targets, intuitive navigation patterns, and accessible typography.",
      "Managed complex form validation and multi-step onboarding flows using custom React hooks and type-safe schemas.",
    ],
    image:
      "https://res.cloudinary.com/dfcr3ut7b/image/upload/v1768566261/Screenshot_2026-01-15_174324_wtukup.png",
    techStack: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/chikamso-cmd/Bump2Baby",
    liveUrl: "https://bump-2-baby.netlify.app/ ",
    category: "React",
  },
  {
    id: "6",
    title: "AxiomVault llc",
    description:
      "A high-security financial monitoring dashboard surfacing AI-driven compliance analytics, duplicate account detection, and fraud prevention insights.",
    keyTechnicalContributions: [
      "Engineered data-dense user interfaces capable of rendering real-time financial anomaly alerts and detailed audit logs.",
      "Implemented list virtualization for large tabular datasets, maintaining 60 FPS scrolling and low memory utilization.",
      "Partnered with backend engineers to establish typed API contracts for streaming real-time fraud metrics securely.",
    ],
    image: "/axiom.JPG",
    techStack: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://axiomvault.netlify.app",
    githubUrl: "https://github.com/AxiomVault01/Axiom-Vault",
    category: "Fullstack",
  },
  {
    id: "7",
    title: "OgaLandLord",
    description:
      "OgaLandlord is a real estate marketplace connecting tenants directly with verified property agents to streamline search and rental booking processes.",
    keyTechnicalContributions: [
      "Built dynamic multi-criteria search and filtering tools leveraging React Query to fetch and cache property listings efficiently.",
      "Designed interactive UI elements including property image galleries, agent verification badges, and direct inquiry modals.",
      "Reduced DOM re-render bottlenecks through strategic memoization, delivering smooth map-and-list navigation.",
    ],
    image: "/land.JPG",
    techStack: ["React", "TypeScript", "Tailwind", "ReactQuery"],
    liveUrl: "https://ogalandlord.netlify.app",
    githubUrl: "https://github.com/ogaLandLords/frontend",
    category: "Fullstack",
  },
];

export const EXPERIENCE: Experience[] = [
  
  {
    id: '1',
    company: 'Creative Web Studio',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Delivered client-facing web projects from design to production, translating visual designs into interactive, cross-browser-compatible websites while ensuring performance and SEO best practices.',
  },
  {
    id: '2',
    company: 'Yamltech inc.',
    role: 'Frontend Developer',
    period: '2023 - 2025',
    description: 'Built and maintained responsive, accessible user interfaces using React and TypeScript; collaborated with backend engineers to integrate APIs and improve performance and developer workflows.',
  },
  {
    id: '3',
    company: 'AXIOMVAULT LLC',
    role: 'Frontend Developer',
    period: '2026',
    description: 'Leading frontend development for secure enterprise applications; responsible for performance optimization, component architecture, and implementing CI/CD and observability integrations.',
  },
  {
    id: '4',
    company: 'OgaLandLord',
    role: 'Frontend Developer',
    employmentType: 'Contract',
    period: '2026 ',
    description: 'Built the scalable marketplace frontend focused on real-world usability, responsive design, and fast load times; worked closely with product and backend teams to ship iterative improvements.',
  },
  
  {
    id: '5',
    company: 'MpfStudio91',
    role: 'Lead Frontend Developer',
    employmentType: 'Contract',
    period: '2026',
    description: 'Architected component libraries and frontend best practices, mentored engineers, and established testing and accessibility standards to improve delivery quality across projects.',
  },
  {
    id: '6',
    company: 'Yamlfoods',
    role: 'Frontend Developer',
    employmentType: 'Contract',
    period: '2026',
    description: 'Built a responsive shopping experience with persistent cart workflows, coupon calculations, and checkout state management using React, Tailwind CSS, and Redux Toolkit.',
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Build Responsive Web Apps',
    description: 'Mobile-first, high-performance web applications that work seamlessly across all devices.',
    iconName: 'Smartphone',
  },
  {
    id: '2',
    title: 'Integrate APIs',
    description: 'Connecting your frontend with powerful backends and third-party services securely.',
    iconName: 'Zap',
  },
  {
    id: '3',
    title: 'Optimize Performance',
    description: 'Ensuring your website loads instantly and provides a smooth user experience.',
    iconName: 'Gauge',
  },
  {
    id: '4',
    title: 'Create Reusable UI Components',
    description: 'Developing modular, accessible, and well-documented component libraries.',
    iconName: 'Component',
  },
];
