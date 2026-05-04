import { Project, Skill, Experience, Service } from './types';

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'Atom', level: 95, category: 'Frontend' },
  { name: 'TypeScript', icon: 'Code2', level: 90, category: 'Frontend' },
  { name: 'HTML', icon: 'FileJson', level: 98, category: 'Frontend' },
  { name: 'CSS', icon: 'Palette', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', level: 98, category: 'Frontend' },
  { name: 'Bootstrap', icon: 'Layout', level: 85, category: 'Frontend' },
  { name: 'React Query', icon: 'Database', level: 88, category: 'Frontend' },
  { name: 'API Integration', icon: 'Link', level: 92, category: 'Frontend' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, secure checkout, and product management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Tailwind CSS', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Fullstack',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task board with real-time updates, drag-and-drop, and team workspace management.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'TypeScript', 'React Query'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'API-based',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization using OpenWeatherMap API with multi-city support and dynamic backgrounds.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'API Integration', 'Motion'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'API-based',
  },
  {
    id: '4',
    title: 'Portfolio Design System',
    description: 'A comprehensive UI library built with accessibility and performance at its core.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'UI/UX',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading the frontend team in developing scalable web applications using React and TypeScript.',
  },
  {
    id: '2',
    company: 'Creative Web Studio',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Built various responsive websites and web apps for clients across different industries.',
  }
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
