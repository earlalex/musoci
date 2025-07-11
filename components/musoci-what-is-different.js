import { BaseComponent } from './base-component.js';

export class MusociWhatIsDifferent extends BaseComponent {
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
        /* Adopting global dark theme. Remove background-color if :host should be transparent to page bg */
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }
        h2 {
          font-family: "Poppins", sans-serif; /* Global h1 uses Poppins */
          margin-bottom: 1.5rem; /* Spacing */
          color: white; /* Explicitly white for dark theme */
          text-align: center; /* Centered for consistency with other sections */
        }
        p {
          font-family: "Open Sans", sans-serif; /* Global body font */
          font-size: 1rem;
          line-height: 1.7; /* Slightly more line height for readability */
          margin-bottom: 1rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          color: #f0f0f0; /* Slightly off-white for p text on dark bg for softer contrast if needed */
        }
        p strong {
            color: white; /* Ensure strong text is clearly visible */
        }
        .logo-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 2rem; /* Space between text and logo */
          width: 200px
        }
        .logo-wrapper img {
          width: 100%; /* Make logo responsive */
          height: auto; /* Maintain aspect ratio */
        }    
         /* Responsive adjustments */
        @media (max-width: 768px) {
          p {
            font-size: 0.95rem;
          }
        }
      </style>
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="content-wrapper">
        <h2>The Streaming Revolution Starts With You</h2>
        <p>MuSóci is the next-generation streaming platform built for independent creators—and powered by the fans who believe in them. We blend bold content with real interaction, offering more than just streaming: we deliver connection.</p>
        <p>With exclusive content & fan-voted channels like FanDelirious, MuSóci brings raw creativity and audience energy together in one immersive space.</p>
        <p>This isn’t just another platform.</p>
        <p>It’s a launchpad for indie voices—where visionary storytellers can finally turn followers into revenue and fans into collaborators.</p>
        <p><strong>Discover. Vote. Stream. Support.</strong></p>
        <p><strong>Only on MuSóci.</strong></p>        <div class="logo-wrapper">
          <img src="/media/img/logos/musoci-logo.png" alt="Logo Image">
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-what-is-different', MusociWhatIsDifferent);
