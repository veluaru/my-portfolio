export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  sourceLink: string;
}

export interface TechItem {
  name: string;
  logo: string;
}

export interface PortfolioState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}