
export type ViewState = 'home' | 'solutions' | 'insights';

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  icon: React.ReactNode;
  tags: string[];
  securityNote?: string;
  drawerTitle?: string;
}

export interface InsightPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export interface BentoItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  className?: string;
}
