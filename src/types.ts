export interface Project {
  id: string;
  title: string;
  description: string;
  keyTechnicalContributions: string[];
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'React' | 'Fullstack' | 'API-based' | 'UI/UX';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  employmentType?: 'Contract';
  period: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
