import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="nav-logo" (click)="scrollTo('hero')">
        <span class="logo-bracket">&lt;</span>Javi<span class="logo-bracket">/&gt;</span>
      </div>
      <ul class="nav-links">
        <li><a (click)="scrollTo('about')">Sobre mí</a></li>
        <li><a (click)="scrollTo('projects')">Proyectos</a></li>
        <li><a (click)="scrollTo('contact')">Contacto</a></li>
      </ul>
      <a class="nav-cv" href="/assets/CurrículumJavierPérez_2026.pdf" download>Descargar CV </a>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 4rem;
      transition: all 0.3s ease;
    }
    nav.scrolled {
      background: rgba(10, 10, 15, 0.92);
      backdrop-filter: blur(12px);
      padding: 1rem 4rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      letter-spacing: -0.02em;
    }
    .logo-bracket { color: var(--accent); }
    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      font-size: 0.875rem;
      font-family: 'JetBrains Mono', monospace;
      color: rgba(255,255,255,0.55);
      cursor: pointer;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--accent); }
    .nav-cv {
      font-size: 0.8rem;
      font-family: 'JetBrains Mono', monospace;
      color: #fff;
      background: var(--accent);
      border: none;
      padding: 0.5rem 1.2rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      transition: all 0.2s;
    }
    .nav-cv:hover {
      background: var(--accent-light);
      transform: translateY(-1px);
    }
    @media (max-width: 768px) {
      nav { padding: 1.2rem 1.5rem; }
      nav.scrolled { padding: 0.8rem 1.5rem; }
      .nav-links { display: none; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
