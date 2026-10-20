import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" aria-labelledby="projects-title">
      <div class="projects-inner">
        <div class="section-label">
          <span class="label-line"></span>
          <span>02 // proyectos seleccionados</span>
        </div>

        <div class="section-header">
          <div>
            <h2 id="projects-title">Lo que he construido<span>.</span></h2>
            <p class="section-intro">Productos reales, ideas convertidas en código y problemas resueltos.</p>
          </div>
          <div class="filter-tabs" role="group" aria-label="Filtrar proyectos">
            <button
              *ngFor="let f of filters"
              type="button"
              [class.active]="activeFilter === f"
              [attr.aria-pressed]="activeFilter === f"
              (click)="setFilter(f)">
              {{ f }}
              <span class="filter-count">{{ f === 'Todos' ? projects.length : featuredCount }}</span>
            </button>
          </div>
        </div>

        <div class="projects-grid">
          <ng-container *ngFor="let p of filteredProjects(); trackBy: trackById">
            <article class="project-card featured" *ngIf="p.featured; else standardCard">
              <div class="featured-copy">
                <div class="project-kicker"><span class="kicker-dot"></span> Proyecto principal · {{ p.year }}</div>
                <div class="project-heading">
                  <div class="card-logo">
                    <img *ngIf="p.logoUrl" [src]="p.logoUrl" [alt]="p.title + ' logo'" />
                    <span *ngIf="!p.logoUrl" class="logo-placeholder">{{ p.title[0] }}</span>
                  </div>
                  <h3>{{ p.title }}</h3>
                </div>
                <p class="project-description">{{ p.description }}</p>
                <div class="card-stack" aria-label="Tecnologías utilizadas">
                  <span *ngFor="let tech of p.stack">{{ tech }}</span>
                </div>
                <div class="project-actions">
                  <a *ngIf="p.demoUrl" class="button-primary" [href]="p.demoUrl" target="_blank" rel="noopener noreferrer">
                    Ver proyecto <span aria-hidden="true">↗</span>
                  </a>
                  <a *ngIf="p.githubUrl" class="button-secondary" [href]="p.githubUrl" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Ver código
                  </a>
                </div>
              </div>

              <div class="project-visual" aria-label="Ilustración de una interfaz de planificación de bodas">
                <div class="browser-bar">
                  <div class="browser-dots"><i></i><i></i><i></i></div>
                  <span>weddly studio</span>
                  <span class="browser-menu">•••</span>
                </div>
                <div class="mock-content">
                  <div class="mock-sidebar">
                    <div class="mock-mark">W</div>
                    <span class="sidebar-line active"></span>
                    <span class="sidebar-line"></span>
                    <span class="sidebar-line short"></span>
                    <span class="sidebar-line"></span>
                  </div>
                  <div class="mock-main">
                    <div class="mock-eyebrow">TU GRAN DÍA</div>
                    <div class="mock-title">Nuestra boda</div>
                    <div class="mock-subtitle">Todo empieza aquí.</div>
                    <div class="mock-stats">
                      <div><span>Invitados</span><strong>128</strong><small>confirmados</small></div>
                      <div><span>Organización</span><strong>76%</strong><div class="progress"><i></i></div></div>
                    </div>
                    <div class="mock-bottom">
                      <span class="mock-calendar"><b>OCT</b><strong>24</strong></span>
                      <span class="mock-event"><b>Próximo paso</b><small>Revisar distribución de mesas</small></span>
                      <span class="mock-arrow">↗</span>
                    </div>
                  </div>
                </div>
                <div class="visual-caption"><span></span> Planificación, invitados y mesas en un solo lugar</div>
              </div>
            </article>

            <ng-template #standardCard>
              <article class="project-card standard">
                <div class="standard-topline">
                  <span class="project-number">{{ p.id < 10 ? '0' + p.id : p.id }}</span>
                  <span class="project-year">{{ p.year }}</span>
                </div>
                <div class="standard-heading">
                  <div class="card-logo">
                    <img *ngIf="p.logoUrl" [src]="p.logoUrl" [alt]="p.title + ' logo'" />
                    <span *ngIf="!p.logoUrl" class="logo-placeholder">{{ p.title[0] }}</span>
                  </div>
                  <h3>{{ p.title }}</h3>
                </div>
                <p class="project-description">{{ p.description }}</p>
                <div class="card-stack" aria-label="Tecnologías utilizadas">
                  <span *ngFor="let tech of p.stack">{{ tech }}</span>
                </div>
                <div class="standard-footer">
                  <a *ngIf="p.demoUrl" class="text-link" [href]="p.demoUrl" target="_blank" rel="noopener noreferrer">Ver proyecto <span aria-hidden="true">↗</span></a>
                  <span *ngIf="!p.demoUrl" class="no-demo">Demo no disponible</span>
                  <a *ngIf="p.githubUrl" class="code-link" [href]="p.githubUrl" target="_blank" rel="noopener noreferrer" [attr.aria-label]="'Ver código de ' + p.title">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Código
                  </a>
                </div>
              </article>
            </ng-template>
          </ng-container>
        </div>

        <div class="projects-note"><span>↳</span> Cada proyecto es una oportunidad para aprender, iterar y construir algo útil.</div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    section { padding: 7.5rem 2rem 8rem; max-width: 1320px; margin: 0 auto; }
    .projects-inner { width: 100%; }
    .section-label { display: flex; align-items: center; gap: .9rem; margin-bottom: 1.6rem; color: var(--accent); font: 500 .72rem/1.4 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; }
    .label-line { width: 40px; height: 1px; background: var(--accent); }
    .section-header { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 2.7rem; }
    h2 { margin: 0; color: #24231f; font: 700 clamp(2.3rem, 5vw, 4rem)/1.08 'Playfair Display', serif; letter-spacing: -.045em; }
    h2 > span { color: var(--accent); }
    .section-intro { margin: .85rem 0 0; color: #77736c; font-size: .98rem; line-height: 1.65; }
    .filter-tabs { display: flex; gap: .45rem; flex-shrink: 0; padding: .3rem; border: 1px solid rgba(36,35,31,.1); border-radius: 6px; background: rgba(255,255,255,.45); }
    .filter-tabs button { display: flex; align-items: center; gap: .55rem; padding: .65rem .9rem; border: 1px solid transparent; border-radius: 4px; background: transparent; color: #77736c; font: 500 .76rem 'DM Sans', sans-serif; cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
    .filter-tabs button.active { background: #fffaf4; border-color: rgba(231,111,50,.4); color: #c95a24; }
    .filter-count { display: inline-grid; place-items: center; min-width: 1.2rem; height: 1.2rem; padding: 0 .2rem; border-radius: 3px; background: rgba(36,35,31,.06); font: .65rem 'JetBrains Mono', monospace; }
    .projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; align-items: stretch; }
    .project-card { min-width: 0; position: relative; overflow: hidden; border: 1px solid rgba(36,35,31,.12); border-radius: 8px; background: rgba(255,255,255,.4); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
    .project-card:hover { transform: translateY(-4px); border-color: rgba(231,111,50,.42); box-shadow: 0 16px 36px rgba(36,35,31,.07); }
    .project-card.featured { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(0, .9fr) minmax(360px, 1.1fr); gap: clamp(1.5rem, 4vw, 4rem); padding: clamp(1.5rem, 4vw, 3.2rem); background: #fffaf4; border-color: rgba(231,111,50,.32); }
    .featured-copy { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; }
    .project-kicker { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.6rem; color: #c95a24; font: .67rem 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; }
    .kicker-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px rgba(231,111,50,.1); }
    .project-heading, .standard-heading { display: flex; align-items: center; gap: .9rem; }
    .project-heading { margin-bottom: 1.1rem; }
    .project-heading h3, .standard-heading h3 { margin: 0; color: #24231f; font: 600 1.5rem/1.2 'Playfair Display', serif; letter-spacing: -.025em; }
    .card-logo { display: grid; place-items: center; width: 48px; height: 48px; flex: 0 0 48px; overflow: hidden; border: 1px solid rgba(36,35,31,.12); border-radius: 10px; background: #f4efe6; }
    .card-logo img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
    .logo-placeholder { color: var(--accent); font: 600 1.2rem 'Playfair Display', serif; }
    .project-description { margin: 0 0 1.4rem; color: #716d65; font-size: .92rem; line-height: 1.8; }
    .card-stack { display: flex; flex-wrap: wrap; gap: .45rem; margin: 0 0 1.7rem; }
    .card-stack span { padding: .35rem .55rem; border: 1px solid rgba(36,35,31,.1); border-radius: 4px; background: rgba(255,255,255,.6); color: #6d675e; font: .67rem 'JetBrains Mono', monospace; }
    .project-actions { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: auto; }
    .button-primary, .button-secondary { display: inline-flex; align-items: center; justify-content: center; gap: .6rem; min-height: 42px; padding: .7rem 1rem; border: 1px solid transparent; border-radius: 4px; text-decoration: none; font-size: .8rem; font-weight: 600; transition: background .2s, border-color .2s, color .2s; }
    .button-primary { background: var(--accent); color: white; }
    .button-primary:hover { background: #c95a24; }
    .button-secondary { border-color: rgba(36,35,31,.16); color: #45413b; background: transparent; }
    .button-secondary:hover { border-color: rgba(231,111,50,.5); color: #c95a24; }
    .button-secondary svg, .code-link svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
    .project-visual { align-self: center; min-width: 0; padding: 1rem; border: 1px solid rgba(36,35,31,.12); border-radius: 8px; background: #f1e9dc; transform: rotate(.5deg); }
    .browser-bar { display: flex; align-items: center; gap: .8rem; height: 32px; padding: 0 .65rem; border: 1px solid rgba(36,35,31,.08); border-bottom: 0; border-radius: 5px 5px 0 0; background: #fffcf7; color: #a09a90; font: .6rem 'JetBrains Mono', monospace; }
    .browser-dots { display: flex; gap: 4px; }
    .browser-dots i { width: 6px; height: 6px; border-radius: 50%; background: #d9b8a2; }
    .browser-dots i:nth-child(2) { background: #dfcda6; }
    .browser-dots i:nth-child(3) { background: #c5cdb4; }
    .browser-bar > span:nth-child(2) { margin: auto; }
    .browser-menu { letter-spacing: .15em; }
    .mock-content { display: grid; grid-template-columns: 48px minmax(0,1fr); min-height: 245px; border: 1px solid rgba(36,35,31,.08); background: #fffdf9; }
    .mock-sidebar { display: flex; align-items: center; flex-direction: column; gap: 1.05rem; padding: .9rem .5rem; border-right: 1px solid #eee7dd; background: #faf6ef; }
    .mock-mark { display: grid; place-items: center; width: 27px; height: 27px; margin-bottom: .5rem; border-radius: 50%; background: #e9d6b7; color: #8e6b3d; font: 1rem 'Playfair Display', serif; }
    .sidebar-line { width: 21px; height: 5px; border-radius: 4px; background: #e7e0d5; }
    .sidebar-line.active { background: #e78b5e; }
    .sidebar-line.short { width: 14px; align-self: center; }
    .mock-main { padding: clamp(.9rem, 2vw, 1.5rem); }
    .mock-eyebrow { color: #c77851; font: .54rem 'JetBrains Mono', monospace; letter-spacing: .13em; }
    .mock-title { margin-top: .25rem; color: #343129; font: 600 clamp(1.1rem, 2.5vw, 1.7rem)/1.2 'Playfair Display', serif; }
    .mock-subtitle { margin-top: .3rem; color: #a39a8d; font-size: .68rem; }
    .mock-stats { display: grid; grid-template-columns: 1fr 1fr; gap: .65rem; margin-top: 1.1rem; }
    .mock-stats > div { display: flex; flex-direction: column; gap: .28rem; padding: .7rem; border: 1px solid #eee7dd; border-radius: 5px; background: #fffaf3; }
    .mock-stats span { color: #92887b; font-size: .58rem; }
    .mock-stats strong { color: #343129; font: 600 1.25rem 'Playfair Display', serif; }
    .mock-stats small { color: #b6a99a; font-size: .55rem; }
    .progress { height: 4px; margin-top: .15rem; border-radius: 4px; background: #eee4d6; }
    .progress i { display: block; width: 76%; height: 100%; border-radius: inherit; background: #df895e; }
    .mock-bottom { display: flex; align-items: center; gap: .65rem; margin-top: .7rem; padding: .65rem; border: 1px solid #eee7dd; border-radius: 5px; }
    .mock-calendar { display: flex; align-items: center; flex-direction: column; gap: .1rem; padding: .3rem .45rem; border-radius: 3px; background: #f3e4d3; color: #b56b43; }
    .mock-calendar b { font: .47rem 'JetBrains Mono', monospace; }
    .mock-calendar strong { font: 1rem 'Playfair Display', serif; }
    .mock-event { display: flex; flex-direction: column; gap: .2rem; min-width: 0; }
    .mock-event b { color: #5a5146; font-size: .62rem; }
    .mock-event small { overflow: hidden; color: #9e9385; font-size: .55rem; text-overflow: ellipsis; white-space: nowrap; }
    .mock-arrow { margin-left: auto; color: #c77851; }
    .visual-caption { display: flex; align-items: center; gap: .45rem; padding-top: .75rem; color: #8e8376; font-size: .63rem; }
    .visual-caption span { width: 5px; height: 5px; border-radius: 50%; background: #d98257; }
    .standard { display: flex; flex-direction: column; padding: 1.6rem; }
    .standard-topline { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .project-number { color: var(--accent); font: .7rem 'JetBrains Mono', monospace; letter-spacing: .08em; }
    .project-year { color: #a49c91; font: .68rem 'JetBrains Mono', monospace; }
    .standard-heading { margin-bottom: 1rem; }
    .standard-heading h3 { font-size: 1.25rem; }
    .standard .project-description { min-height: 5.1rem; }
    .standard .card-stack { margin-top: auto; margin-bottom: 1.3rem; }
    .standard-footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid rgba(36,35,31,.1); }
    .text-link, .code-link { display: inline-flex; align-items: center; gap: .45rem; color: #c95a24; text-decoration: none; font-size: .8rem; font-weight: 600; }
    .text-link:hover, .code-link:hover { color: #9e421b; }
    .code-link { color: #6f6a61; }
    .no-demo { color: #9a9389; font-size: .76rem; }
    .projects-note { display: flex; align-items: center; gap: .6rem; margin-top: 1.6rem; color: #898278; font-size: .78rem; }
    .projects-note span { color: var(--accent); font-size: 1.05rem; }
    a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
    @media (max-width: 850px) {
      section { padding: 5.5rem 1.4rem; }
      .section-header { align-items: flex-start; flex-direction: column; }
      .project-card.featured { grid-template-columns: 1fr; }
      .project-visual { width: 100%; box-sizing: border-box; transform: none; }
    }
    @media (max-width: 600px) {
      section { padding: 4.5rem 1rem; }
      .projects-grid { grid-template-columns: 1fr; }
      .project-card.featured { grid-column: auto; padding: 1.25rem; }
      .standard { padding: 1.25rem; }
      .filter-tabs { width: 100%; box-sizing: border-box; }
      .filter-tabs button { flex: 1; justify-content: center; }
      .mock-content { grid-template-columns: 36px minmax(0,1fr); min-height: 220px; }
      .mock-sidebar { padding-inline: .3rem; }
      .mock-stats { gap: .4rem; }
      .mock-stats > div { padding: .5rem; }
      .mock-bottom { gap: .45rem; padding: .45rem; }
      .mock-event small { max-width: 135px; }
      .standard .project-description { min-height: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .project-card, .filter-tabs button, .button-primary, .button-secondary { transition: none; }
      .project-card:hover { transform: none; }
    }
  `]
})
export class ProjectsComponent {
  projects = PROJECTS;
  filters = ['Todos', 'Destacados'];
  activeFilter = 'Todos';

  get featuredCount(): number {
    return this.projects.filter(project => project.featured).length;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  filteredProjects(): Project[] {
    return this.activeFilter === 'Destacados'
      ? this.projects.filter(project => project.featured)
      : this.projects;
  }

  trackById(_index: number, project: Project): number {
    return project.id;
  }
}