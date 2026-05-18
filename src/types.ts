export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'React' | 'Fullstack' | 'API-based' | 'UI/UX';
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills' | 'DevOps' | 'Analytics' | "Hosting" | 'Best Practices';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
