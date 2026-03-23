import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact">
      <div class="contact-inner">
        <div class="section-label">
          <span class="label-line"></span>
          <span>03 // contacto</span>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h2>¿Trabajamos<br><span class="hl">juntos?</span></h2>
            <p>
              Estoy disponible para proyectos freelance, colaboraciones
              o posiciones a tiempo completo. Si tienes una idea en mente,
              hablemos.
            </p>
            <div class="contact-details">
              <a href="mailto:jperez.salas31@email.com" class="detail-item">
                <span class="detail-label">Email</span>
                <span class="detail-value">jperez.salas31@email.com</span>
              </a>
              <a href="https://linkedin.com/in/javiperezsalas" target="_blank" class="detail-item">
                <span class="detail-label">LinkedIn</span>
                <span class="detail-value">Javier Perez Salas</span>
              </a>
              <a href="https://github.com/javierp311204" target="_blank" class="detail-item">
                <span class="detail-label">GitHub</span>
                <span class="detail-value">javierp311204</span>
              </a>
            </div>
          </div>
          <form class="contact-form" (ngSubmit)="submit()">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input id="name" type="text" [(ngModel)]="form.name" name="name" placeholder="Tu nombre" required/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" [(ngModel)]="form.email" name="email" placeholder="tu@email.com" required/>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" [(ngModel)]="form.message" name="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
            </div>
            <button type="submit" class="btn-submit" [disabled]="sending()">
              {{ sending() ? 'Enviando...' : 'Enviar mensaje' }}
            </button>
            <p class="form-note" *ngIf="sent()">Mensaje enviado</p>
          </form>
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
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 5rem;
      align-items: start;
    }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 1.5rem;
    }
    .hl { color: var(--accent); }
    p {
      color: rgba(255,255,255,0.45);
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }
    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .detail-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      text-decoration: none;
      transition: border-color 0.2s;
    }
    .detail-item:hover { border-color: rgba(0,255,136,0.3); }
    .detail-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.3);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .detail-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.4);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    input, textarea {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      padding: 0.9rem 1rem;
      color: #fff;
      font-size: 0.9rem;
      font-family: inherit;
      transition: border-color 0.2s;
      resize: none;
      outline: none;
    }
    input::placeholder, textarea::placeholder {
      color: rgba(255,255,255,0.2);
    }
    input:focus, textarea:focus {
      border-color: var(--accent);
    }
    .btn-submit {
      background: var(--accent);
      color: #000;
      border: none;
      padding: 1rem 2rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 0.5rem;
    }
    .btn-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,255,136,0.25);
    }
    .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
    .form-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--accent);
      text-align: center;
      margin: 0;
    }
    @media (max-width: 768px) {
      section { padding: 5rem 1.5rem; }
      .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
    }
  `]
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  sending = signal(false);
  sent = signal(false);

  async submit() {
    this.sending.set(true);
    // Integra EmailJS aquí: https://www.emailjs.com/
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', this.form)
    await new Promise(r => setTimeout(r, 1200)); // simulación
    this.sending.set(false);
    this.sent.set(true);
    this.form = { name: '', email: '', message: '' };
    setTimeout(() => this.sent.set(false), 5000);
  }
}
