import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-inner">
        <span class="footer-logo">
          Javier Perez
        </span>
        <span class="footer-copy">
          Diseñado y construido con Angular · {{ year }}
        </span>
        <div class="footer-links">
          <a href="https://github.com/javierp311204" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/javiperezsalas" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 2rem 4rem;
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .footer-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.4);
    }
    .lb { color: var(--accent); }
    .footer-copy {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.2);
      letter-spacing: 0.04em;
    }
    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    .footer-links a {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      letter-spacing: 0.06em;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--accent); }
    @media (max-width: 768px) {
      footer { padding: 2rem 1.5rem; }
      .footer-inner { flex-direction: column; align-items: center; text-align: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
