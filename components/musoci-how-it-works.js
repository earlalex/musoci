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
          text-align: center;
        }
        .content-section {
          padding: 40px 20px;
          background-color: #fff; /* White background */
        }
        h2 {
          font-size: 2em;
          margin-bottom: 30px; /* More space before steps */
          color: #2c3e50;
        }
        .steps-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap; /* Allow wrapping */
        }
        .step {
          flex-basis: 30%; /* Adjust as needed */
          min-width: 250px; /* Minimum width for steps */
          padding: 20px;
          background: #ecf0f1; /* Light grey background for steps */
          border-radius: 5px;
          margin: 10px; /* Margin for spacing between cards */
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .step h3 {
          font-size: 1.4em;
          color: #2980b9; /* Step title color */
          margin-bottom: 10px;
        }
        .step p {
          font-size: 1em;
          color: #444;
        }
        /* Responsive adjustments */
        @media (max-width: 992px) { /* Adjust breakpoint for 3 cards */
            .step {
                flex-basis: 45%; /* Two cards per row */
            }
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8em;
          }
          .content-section {
            padding: 30px 20px;
          }
          .steps-container {
            flex-direction: column;
            align-items: center;
          }
          .step {
            flex-basis: 80%; /* Wider on mobile when stacked */
            margin-bottom: 20px;
          }
        }
      </style>
      <section class="content-section">
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
