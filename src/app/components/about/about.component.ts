import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="about-inner">
        <div class="section-label">
          <span class="label-line"></span>
          <span>01 // sobre mí</span>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <h2>Hola, soy <span class="hl">Javier Pérez</span></h2>
            <p>
              Desarrollador web con pocos años de experiencia construyendo
              aplicaciones modernas. Me apasiona
              el código limpio, el rendimiento y crear interfaces que los
              usuarios disfruten usar.
            </p>
            <p>
              Actualmente estoy de practicas en Tunstall Televida desarrollando.
              Cuando no estoy programando, puedes
              encontrarme jugando futbol.
            </p>
            <div class="about-links">
              <a href="https://github.com/javierp311204" target="_blank" class="link-item">
                <span class="link-icon">⟶</span> GitHub
              </a>
              <a href="https://linkedin.com/in/javiperezsalas" target="_blank" class="link-item">
                <span class="link-icon">⟶</span> LinkedIn
              </a>
            </div>
          </div>
          <div class="skills-grid">
            <div class="skill-group" *ngFor="let group of skillGroups">
              <h4>{{ group.category }}</h4>
              <ul>
                <li *ngFor="let skill of group.skills">
                  <span class="skill-dot"></span>{{ skill }}
                </li>
              </ul>
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
      margin-bottom: 3rem;
    }
    .label-line {
      display: block;
      width: 40px;
      height: 1px;
      background: var(--accent);
    }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 2.8rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 1.5rem;
      letter-spacing: -0.03em;
    }
    .hl { color: var(--accent); }
    p {
      color: rgba(255,255,255,0.5);
      line-height: 1.8;
      margin-bottom: 1.2rem;
      font-size: 1rem;
    }
    .about-links {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .link-item {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.2s;
    }
    .link-item:hover { color: var(--accent); }
    .link-icon { color: var(--accent); }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--accent);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.55);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .skill-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }
    @media (max-width: 768px) {
      section { padding: 5rem 1.5rem; }
      .about-grid { grid-template-columns: 1fr; gap: 3rem; }
    }
  `]
})
export class AboutComponent {
  skillGroups = [
    {
      category: 'Lenguajes',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'SCSS / CSS', 'Bootstrap']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Prisma', 'REST APIs']
    },
    {
      category: 'Bases de datos',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'DevOps',
      skills: ['Docker Compose', 'GitHub Actions', 'Jenkins', 'Vercel', 'Railway', 'AWS EC2/S3']
    },
    {
      category: 'Herramientas',
      skills: ['Git / GitHub', 'VS Code', 'Postman', 'AWS', 'ngrok', 'Docker']
    }
  ];
}
