import { BaseComponent } from './base-component.js';

export class MusociHowItWorks extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: left;
          background: var(--gradient);
          border-bottom: 1px solid #fff;
          border-top: 1px solid #fff;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }
        h2 {
          font-family: "Poppins", sans-serif;
          margin-bottom: 2rem;
          color: white;
        }
        .steps-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 1.5rem; /* Gap between step cards */
        }
        .step {
          flex: 1 1 300px; /* Flex grow, shrink, basis. Allows wrapping. */
          min-width: 280px;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.08); /* Similar to feature-card but slightly different if needed */
          border-radius: 10px; /* Consistent with other cards */
          backdrop-filter: blur(5px); /* Optional: if you want a blur effect */
          text-align: left; /* Content within card is left-aligned */
        }
        .step h3 {
          font-family: "Poppins", sans-serif;
          font-size: 1.5rem; /* Step title size */
          color: #fff;
          margin-bottom: 0.75rem;
        }
        .step p {
          font-family: "Open Sans", sans-serif;
          font-size: 0.95rem;
          color: #e0e0e0; /* Lighter text for readability on dark card */
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .step {
            min-width: calc(100% - 2rem); /* Full width minus some margin */
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .step h3 {
            font-size: 1.3rem;
          }
          .step p {
            font-size: 0.9rem;
          }
        }
      </style>
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="content-wrapper">
        <h2>How It Works</h2>
        <div class="steps-container">
          <div class="step">
            <h3>1. Subscribe</h3>
            <p>Pick a membership level to unlock upload access and monetization tools.</p>
          </div>
          <div class="step">
            <h3>2. Upload & Stream</h3>
            <p>Submit unlimited music or videos. Your content hits TVs and mobile screens worldwide.</p>
          </div>
          <div class="step">
            <h3>3. Climb the Charts</h3>
            <p>Real fans rate you. Earn royalties. Get discovered. Be featured.</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-how-it-works', MusociHowItWorks);
