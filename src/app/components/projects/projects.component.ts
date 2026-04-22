import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="projects-inner">
        <div class="section-label">
          <span class="label-line"></span>
          <span>02 // proyectos</span>
        </div>
        <div class="section-header">
          <h2>Lo que he construido</h2>
          <div class="filter-tabs">
            <button
              *ngFor="let f of filters"
              [class.active]="activeFilter === f"
              (click)="setFilter(f)">
              {{ f }}
            </button>
          </div>
        </div>
        <div class="projects-grid">
          <div
            class="project-card"
            *ngFor="let p of filteredProjects()"
            [class.featured]="p.featured">

            <div class="card-top">
              <div class="card-left">
                <div class="card-logo">
                  <img *ngIf="p.logoUrl" [src]="p.logoUrl" [alt]="p.title + ' logo'" />
                  <span *ngIf="!p.logoUrl" class="logo-placeholder">{{ p.title[0] }}</span>
                </div>
                <div class="card-meta">
                  <h3>{{ p.title }}</h3>
                  <span class="card-year">{{ p.year }}</span>
                </div>
              </div>
              <div class="card-right">
                <span class="badge-featured" *ngIf="p.featured">★ Destacado</span>
                <div class="card-links">
                  <a *ngIf="p.githubUrl" [href]="p.githubUrl" target="_blank" title="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </a>
                  <a *ngIf="p.demoUrl" [href]="p.demoUrl" target="_blank" [title]="p.title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <p>{{ p.description }}</p>

            <div class="card-stack">
              <span *ngFor="let tech of p.stack">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 8rem 4rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-label {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
    .label-line {
      display: block;
      width: 40px;
      height: 1px;
      background: var(--accent);
    }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.5rem;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 2.8rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.03em;
    }
    .filter-tabs {
      display: flex;
      gap: 0.5rem;
    }
    .filter-tabs button {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      padding: 0.4rem 1rem;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.45);
      border-radius: 2px;
      cursor: pointer;
      letter-spacing: 0.06em;
      transition: all 0.2s;
    }
    .filter-tabs button.active,
    .filter-tabs button:hover {
      border-color: var(--accent);
      color: var(--accent-light);
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .project-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 6px;
      padding: 1.8rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .project-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(99,102,241,0.05), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .project-card:hover {
      border-color: rgba(99,102,241,0.3);
      transform: translateY(-4px);
    }
    .project-card:hover::before { opacity: 1; }
    .project-card.featured {
      border-color: rgba(99,102,241,0.2);
    }
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.2rem;
      gap: 1rem;
    }
    .card-left {
      display: flex;
      align-items: center;
      gap: 0.9rem;
    }
    .card-logo {
      width: 52px;
      height: 52px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.1);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.05);
    }
    .card-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;  /* ← cambia cover por contain */
      padding: 4px;         /* ← pequeño respiro */
    }
    .logo-placeholder {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--accent);
    }
    .card-meta h3 {
      font-family: 'Syne', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 0.2rem;
      letter-spacing: -0.01em;
    }
    .card-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.3);
      letter-spacing: 0.06em;
    }
    .card-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5rem;
      position: relative; 
      z-index: 2;      
    }
    .badge-featured {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      color: var(--accent-light);
      border: 1px solid rgba(99,102,241,0.3);
      padding: 0.2rem 0.5rem;
      border-radius: 2px;
      letter-spacing: 0.06em;
      white-space: nowrap;
    }
    .card-links {
      display: flex;
      gap: 0.8rem;
    }
    .card-links a {
      color: rgba(255,255,255,0.4);
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      position: relative;  
      z-index: 2;         
    }
    .card-links a:hover { color: var(--accent-light); }
    p {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.45);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    .card-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .card-stack span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      color: var(--accent-light); 
      letter-spacing: 0.06em;
    }
    .card-stack span:not(:last-child)::after {
      content: ' ·';
      color: rgba(255,255,255,0.2);
    }
    @media (max-width: 768px) {
      section { padding: 5rem 1.5rem; }
      .section-header { flex-direction: column; align-items: flex-start; }
    }
  `]
})
export class ProjectsComponent {
  projects = PROJECTS;
  filters = ['Todos', 'Destacados'];
  activeFilter = 'Todos';

  setFilter(f: string) {
    this.activeFilter = f;
  }

  filteredProjects(): Project[] {
    if (this.activeFilter === 'Destacados') {
      return this.projects.filter(p => p.featured);
    }
    return this.projects;
  }
}