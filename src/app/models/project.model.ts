export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  logoUrl?: string;
  imageUrl?: string;
}