import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero">
      <div class="hero-content">
        <p class="hero-label">{{ label() }}</p>
        <h1 class="hero-name">Javier Perez<br><span class="accent-name">Salas</span></h1>
        <p class="hero-role">Desarrollador Full Stack <span class="role-sep">·</span> Productos digitales</p>
        <p class="hero-bio">
          Desarrollo aplicaciones web y productos SaaS de principio a fin, cuidando tanto la experiencia de usuario como las decisiones técnicas.
          Soy graduado en Desarrollo de Aplicaciones Web y me interesa crear software útil, mantenible y bien diseñado.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" (click)="scrollTo('projects')">Ver proyectos</button>
          <button class="btn-secondary" (click)="scrollTo('contact')">Contactar</button>
        </div>
        <div class="hero-stack">
          <span *ngFor="let tech of stack">{{ tech }}</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="Proyectos destacados de Javier">
        <a class="visual-main" href="https://weddlystudio.uk/es/home" target="_blank" rel="noopener noreferrer" aria-label="Ver Weddly Studio">
          <div class="visual-window-bar"><span></span><span></span><span></span><small>WEDDLY STUDIO / DASHBOARD</small><b>↗</b></div>
          <img src="assets/projects/weddly-dashboard.png" alt="Dashboard de Weddly Studio, plataforma de planificación de bodas" fetchpriority="high" />
          <div class="visual-caption"><span>01 / PRODUCTO SAAS</span><strong>Weddly Studio <span>↗</span></strong></div>
        </a>
        <a class="visual-secondary" href="https://karma-yeux.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Ver KarmaYeux">
          <img src="assets/projects/karmayeux-gallery.png" alt="Galería de personajes de KarmaYeux" loading="lazy" />
          <div class="secondary-caption"><span>02 / APLICACIÓN WEB</span><strong>KarmaYeux ↗</strong></div>
        </a>
        <p class="visual-note"><span class="note-line"></span> IDEAS QUE SE CONVIERTEN EN PRODUCTOS DIGITALES</p>
      </div>
      <div class="scroll-indicator" (click)="scrollTo('about')">
        <div class="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  `,
  styles: [`
    section {
      position: relative;
      min-height: 100vh;
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      align-items: center;
      gap: clamp(3rem, 7vw, 7rem);
      overflow: hidden;
      padding: 7rem clamp(2rem, 6vw, 6rem) 5rem;
      max-width: 1600px;
      margin: 0 auto;
    }

    .hero-content {
      position: relative;
      max-width: 560px;
      z-index: 1;
      justify-self: end;
      animation: fadeUp 0.7s ease both;
    }

    .hero-visual {
      position: relative;
      width: 100%;
      max-width: 680px;
      justify-self: start;
      padding: 1.5rem 0 2.5rem;
      animation: fadeUp 0.85s .12s ease both;
    }

    .visual-main, .visual-secondary {
      display: block;
      position: relative;
      color: inherit;
      text-decoration: none;
      background: #fffaf4;
      border: 1px solid rgba(36,35,31,.12);
      box-shadow: 0 20px 55px rgba(55,39,24,.09);
      transition: transform .3s ease, box-shadow .3s ease;
    }

    .visual-main {
      width: 92%;
      margin-left: auto;
      overflow: hidden;
      transform: rotate(1deg);
    }

    .visual-main:hover {
      transform: translateY(-5px) rotate(0deg);
      box-shadow: 0 26px 65px rgba(55,39,24,.15);
    }

    .visual-window-bar {
      height: 36px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 12px;
      background: #fffaf4;
      border-bottom: 1px solid rgba(36,35,31,.08);
    }

    .visual-window-bar > span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #e76f32;
      opacity: .65;
    }

    .visual-window-bar small {
      margin-left: 8px;
      font: 9px 'JetBrains Mono', monospace;
      letter-spacing: .08em;
      color: rgba(36,35,31,.48);
    }

    .visual-window-bar b {
      margin-left: auto;
      color: var(--accent);
      font-size: 15px;
      font-weight: 400;
    }

    .visual-main > img {
      display: block;
      width: 100%;
      height: clamp(220px, 29vw, 390px);
      object-fit: cover;
      object-position: top left;
      background: #f8f3eb;
    }

    .visual-caption, .secondary-caption {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 14px 17px 16px;
    }

    .visual-caption > span, .secondary-caption > span {
      color: var(--accent);
      font: 9px 'JetBrains Mono', monospace;
      letter-spacing: .1em;
    }

    .visual-caption strong, .secondary-caption strong {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: 600 17px 'Playfair Display', serif;
      color: #24231F;
    }

    .visual-caption strong span { color: var(--accent); }

    .visual-secondary {
      position: absolute;
      width: 43%;
      left: 0;
      bottom: 4.5rem;
      overflow: hidden;
      transform: rotate(-3deg);
      z-index: 2;
    }

    .visual-secondary:hover {
      transform: translateY(-5px) rotate(-1deg);
      box-shadow: 0 26px 65px rgba(55,39,24,.16);
    }

    .visual-secondary > img {
      display: block;
      width: 100%;
      aspect-ratio: 1.35 / 1;
      object-fit: cover;
      object-position: top center;
      background: #f8f3eb;
    }

    .secondary-caption { padding: 10px 12px 12px; }
    .secondary-caption strong { font-size: 14px; }

    .visual-note {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
      color: rgba(36,35,31,.48);
      font: 9px 'JetBrains Mono', monospace;
      letter-spacing: .09em;
    }

    .note-line { display: inline-block; width: 28px; height: 1px; background: var(--accent); }

    .hero-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .hero-name {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.8rem, 6vw, 4.5rem);
      font-weight: 800;
      line-height: 1;
      color: #24231F;
      margin-bottom: 1.2rem;
      letter-spacing: -0.03em;
    }

    .accent-name {
      color: var(--accent);
    }

    .hero-role {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: rgba(36, 35, 31, 0.45);
      margin-bottom: 1.2rem;
      letter-spacing: 0.02em;
    }

    .role-sep {
      color: var(--accent);
      margin: 0 0.4rem;
    }

    .hero-bio {
      font-size: 0.95rem;
      color: rgba(36, 35, 31, 0.45);
      line-height: 1.7;
      margin-bottom: 2rem;
      max-width: 480px;
    }

    .hero-actions {
      display: flex;
      gap: 0.8rem;
      margin-bottom: 2.5rem;
    }

    .btn-primary {
      background: var(--accent);
      color: #24231F;
      border: none;
      padding: 0.75rem 1.6rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .btn-primary:hover {
      opacity: 0.85;
    }

    .btn-secondary {
      background: transparent;
      color: rgba(36, 35, 31, 0.6);
      border: 1px solid rgba(36, 35, 31, 0.12);
      padding: 0.75rem 1.6rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      border-color: rgba(36, 35, 31, 0.3);
      color: #24231F;
    }

    .hero-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .hero-stack span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: rgba(36, 35, 31, 0.3);
      border: 1px solid rgba(36, 35, 31, 0.07);
      padding: 0.25rem 0.6rem;
      border-radius: 2px;
      letter-spacing: 0.05em;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .scroll-indicator:hover {
      opacity: 0.9;
    }

    .scroll-line {
      width: 1px;
      height: 36px;
      background: linear-gradient(to bottom, transparent, var(--accent));
    }

    .scroll-indicator span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 900px) {
      section {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 2rem;
        padding-inline: 2rem;
      }

      .visual-main { width: 96%; }
      .visual-secondary { width: 48%; bottom: 4rem; }
      .visual-main > img { height: clamp(200px, 30vw, 310px); }
      .visual-note { font-size: 8px; }
    }

    @media (max-width: 768px) {
      section {
        min-height: auto;
        grid-template-columns: minmax(0, 1fr);
        gap: 1.5rem;
        padding: 7rem 1.25rem 6rem;
        align-items: center;
      }

      .hero-content {
        width: 100%;
        max-width: 560px;
        text-align: center;
        padding-bottom: 0;
        justify-self: center;
      }

      .hero-visual {
        width: 100%;
        max-width: 560px;
        justify-self: center;
        margin-bottom: 2.5rem;
      }

      .visual-main { width: 90%; }
      .visual-main > img { height: auto; max-height: 320px; aspect-ratio: 1.25 / 1; }
      .visual-secondary { width: 42%; bottom: 3rem; }
      .visual-note { right: 0; bottom: -.5rem; max-width: 70%; line-height: 1.5; }

      .hero-name {
        font-size: clamp(2.2rem, 14vw, 3.5rem);
      }

      .hero-bio {
        margin: 0 auto 1.8rem;
      }

      .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
      }

      .hero-stack {
        justify-content: center;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  label = signal('');
  stack = ['Angular', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'];
  private fullLabel = '// Desarrollador Full Stack';

  ngOnInit() {
    let i = 0;
    const interval = setInterval(() => {
      this.label.set(this.fullLabel.slice(0, ++i));
      if (i === this.fullLabel.length) clearInterval(interval);
    }, 45);
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}