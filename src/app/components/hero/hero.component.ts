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
        <p class="hero-role">Full Stack Developer <span class="role-sep">·</span> Angular & Node.js</p>
        <p class="hero-bio">
          2 años construyendo aplicaciones web con pasión y obsesión por los detalles.
          A punto de graduarme en Desarrollo Web — organizado, perfeccionista y siempre buscando el código más limpio.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" (click)="scrollTo('projects')">Ver proyectos</button>
          <button class="btn-secondary" (click)="scrollTo('contact')">Contactar</button>
        </div>
        <div class="hero-stack">
          <span *ngFor="let tech of stack">{{ tech }}</span>
        </div>
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
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0 4rem;
    }

    .hero-content {
      position: relative;
      max-width: 640px;
      z-index: 1;
      animation: fadeUp 0.7s ease both;
    }

    .hero-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--accent);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .hero-name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.8rem, 6vw, 4.5rem);
      font-weight: 800;
      line-height: 1;
      color: #fff;
      margin-bottom: 1.2rem;
      letter-spacing: -0.03em;
    }

    .accent-name {
      color: var(--accent);
    }

    .hero-role {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.45);
      margin-bottom: 1.2rem;
      letter-spacing: 0.02em;
    }

    .role-sep {
      color: var(--accent);
      margin: 0 0.4rem;
    }

    .hero-bio {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.45);
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
      color: #fff;
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
      color: rgba(255,255,255,0.6);
      border: 1px solid rgba(255,255,255,0.12);
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
      border-color: rgba(255,255,255,0.3);
      color: #fff;
    }

    .hero-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .hero-stack span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.3);
      border: 1px solid rgba(255,255,255,0.07);
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

    @media (max-width: 768px) {
      section {
        padding: 5rem 1.5rem 4rem;
        align-items: flex-start;
      }

      .hero-content {
        text-align: center;
        padding-bottom: 4rem;
      }

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
  private fullLabel = '// Full Stack Developer';

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