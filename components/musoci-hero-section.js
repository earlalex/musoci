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
        /* .hero-section is the main container for this component's content */
        .hero-content-wrapper {
          background: #2a2a2a; /* Slightly different dark bg for this specific hero, can be var(--black) if preferred */
          color: #fff; /* Text color will be inherited from global 'body' if not specified, but good to be explicit */
          padding: 3rem 1rem; /* Consistent padding, using rem */
          text-align: center; /* Global h1 is center-aligned, ensuring section is too */
        }
        h1 {
          /* Global h1 is font-size: 3.5rem. This can be slightly smaller or larger if desired for this hero. */
          /* If global h1 style is preferred, this h1 style block can be removed. */
          font-family: "Poppins", sans-serif; /* Match global */
          font-size: 2.8rem; /* Slightly adjusted from global for hero context */
          margin-bottom: 1rem; /* Match global */
          line-height: 1.3; /* Adjust line height for larger text */
        }
        p {
          font-family: "Open Sans", sans-serif; /* Match global body font */
          font-size: 1.1rem; /* Slightly larger for hero subtext */
          margin-bottom: 1rem; /* Consistent spacing */
          max-width: 700px; /* Limit width for readability */
          margin-left: auto;
          margin-right: auto;
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-content-wrapper {
            padding: 2rem 1rem;
          }
          h1 {
            font-size: 2.2rem; /* Adjust for smaller screens */
          }
          p {
            font-size: 1rem;
          }
        }
      </style>
      <section class="hero-content-wrapper">
        <h1>Fan-Powered Streaming. Creator-Fueled Culture.</h1>
        <p>MuSóci is where indie music, bold films, raw podcasts, music, audiobooks, and social storytelling come alive.</p>
        <p>No algorithms. No gatekeepers. Just creators and the fans who make them great.</p>
      </section>
    `;
  }
}

customElements.define('musoci-hero-section', MusociHeroSection);
