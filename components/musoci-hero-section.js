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
          text-align: left;
          border-bottom: 1px solid #fff;
          border-top: 1px solid #fff;
        }
        /* .hero-section is the main container for this component's content */
        .hero-content-wrapper {
          background: var(--gradient);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }
        h2 {
          text-align: center; /* Ensure h1 is center-aligned */
          margin-bottom: 1rem; /* Match global */
          line-height: 1.3; /* Adjust line height for larger text */
        }
        p {
          text-align: left;
          font-family: "Open Sans", sans-serif; /* Match global body font */
          font-size: 1.1rem; /* Slightly larger for hero subtext */
          margin-bottom: 1rem; /* Consistent spacing */\
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem; /* Adjust for smaller screens */
          }
          p {
            font-size: 1rem;
          }
        }
      </style>
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="hero-content-wrapper">
        <h2>Fan-Powered Streaming. Creator-Fueled Culture.</h2>
        <p>MuSóci is where indie music, bold films, raw podcasts, music, audiobooks, and social storytelling come alive.</p>
        <p>No algorithms. No gatekeepers. Just creators and the fans who make them great.</p>  
      </section>
    `;
  }
}

customElements.define('musoci-hero-section', MusociHeroSection);
