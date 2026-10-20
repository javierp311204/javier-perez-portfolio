import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Weddly Studio',
    description: 'Plataforma SaaS multi-tenant para gestionar bodas de forma automatizada. Incluye gestión de invitados, plano interactivo y colaboradores.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker', 'AWS S3'],
    demoUrl: 'https://WeddlyStudio.uk',
    githubUrl: 'https://github.com/javierp311204/WeddlyStudio', 
    featured: true,
    year: 2026,
    logoUrl: 'assets/logos/weddly.png',
    imageUrl: 'assets/projects/weddly-dashboard.png'
  },
  {
    id: 2,
    title: 'KarmaYeux',
    description: 'Aplicación web full-stack para la gestión creativa de personajes en universos ficticios. Incluye galería visual, relaciones entre personajes, estadísticas y autenticación con roles.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'Docker'],
    demoUrl: 'https://karma-yeux.vercel.app',          
    githubUrl: 'https://github.com/javierp311204/KarmaYeux',      
    featured: false,
    year: 2026,
    logoUrl: '',
    imageUrl: 'assets/projects/karmayeux-gallery.png'
  },
  {
    id: 3,
    title: 'ThreeSevenReal',
    description: 'Plataforma multijuego de cartas online (Blackjack, Poker, ThreeSeven) con lobby en tiempo real, autenticación JWT, salas de apuestas y ranking global de jugadores.',
    stack: ['React', 'Java', 'Spring Boot', 'MongoDB', 'WebSocket', 'JWT'],
    demoUrl: '',          
    githubUrl: 'https://github.com/yakisabasoumen/threesevenreal',       
    featured: false,
    year: 2026,
    logoUrl: ''  
  }
];