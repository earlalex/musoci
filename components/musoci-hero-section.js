import { BaseComponent } from './base-component.js';

export class MusociHeroSection extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
        }
        .hero-section {
          background: #333; /* Dark background for hero */
          color: #fff;
          padding: 60px 20px; /* Adjusted padding */
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2em;
          margin-bottom: 10px;
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: 2em;
          }
          .hero-section {
            padding: 40px 20px;
          }
        }
      </style>
      <section class="hero-section">
        <h1>Fan-Powered Streaming. Creator-Fueled Culture.</h1>
        <p>MuSóci is where indie music, bold films, raw podcasts, music, audiobooks, and social storytelling come alive.</p>
        <p>No algorithms. No gatekeepers. Just creators and the fans who make them great.</p>
      </section>
    `;
  }
}

customElements.define('musoci-hero-section', MusociHeroSection);
