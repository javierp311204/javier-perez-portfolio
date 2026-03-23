import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero">
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      <div class="hero-content">
        <p class="hero-label">{{ label() }}</p>
        <h1 class="hero-name">Javier<br><span class="accent-name">Perez Salas</span></h1>
        <p class="hero-role">Desarrollador Full Stack <span class="role-sep">·</span> Angular & Node.js</p>
        <p class="hero-bio">
          2 años construyendo aplicaciones web con pasión y obsesión por los detalles.<br>
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
    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
    }
    .glow-1 {
      width: 500px; height: 500px;
      background: var(--accent);
      top: -100px; left: -100px;
    }
    .glow-2 {
      width: 400px; height: 400px;
      background: #5b8dee;
      bottom: -80px; right: 10%;
      opacity: 0.1;
    }
    .hero-content {
      position: relative;
      max-width: 720px;
      z-index: 1;
      animation: fadeUp 0.9s ease both;
    }
    .hero-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }
    .hero-name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(4rem, 10vw, 7.5rem);
      font-weight: 800;
      line-height: 0.9;
      color: #fff;
      margin-bottom: 1.5rem;
      letter-spacing: -0.04em;
    }
    .accent-name {
      color: transparent;
      -webkit-text-stroke: 2px var(--accent);
    }
    .hero-role {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1rem;
      color: rgba(255,255,255,0.5);
      margin-bottom: 1.5rem;
      letter-spacing: 0.02em;
    }
    .role-sep { color: var(--accent); margin: 0 0.5rem; }
    .hero-bio {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 520px;
    }
    .hero-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    .btn-primary {
      background: var(--accent);
      color: #000;
      border: none;
      padding: 0.9rem 2rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,255,136,0.3); }
    .btn-secondary {
      background: transparent;
      color: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 0.9rem 2rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-secondary:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
    .hero-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }
    .hero-stack span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.35);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 0.3rem 0.7rem;
      border-radius: 2px;
      letter-spacing: 0.06em;
    }
    .scroll-indicator {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.7;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .scroll-indicator:hover {
      opacity: 1;
    }
    .scroll-line {
      width: 1px;
      height: 50px;
      background: linear-gradient(to bottom, transparent, var(--accent));
      animation: scrollPulse 2s ease-in-out infinite;
    }
    .scroll-indicator span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.3; transform: scaleY(1); }
      50% { opacity: 1; transform: scaleY(1.2); }
    }
    @media (max-width: 768px) {
      section { padding: 0 1.5rem; text-align: center; }
      .hero-actions { justify-content: center; }
      .hero-stack { justify-content: center; }
      .hero-bio { margin: 0 auto 2.5rem; }
    }
  `]
})
export class HeroComponent implements OnInit {
  label = signal('');
  stack = ['Angular', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'];
  private fullLabel = '// Buscando nuevas oportunidades';

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