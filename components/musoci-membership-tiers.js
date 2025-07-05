import { BaseComponent } from './base-component.js';

export class MusociMembershipTiers extends BaseComponent {
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
          background-color: #f4f4f4; /* Light background */
        }
        h2 {
          font-size: 2em;
          margin-bottom: 30px;
          color: #2c3e50;
        }
        .tiers-visual {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .tier-logo {
          padding: 20px;
          background: #bdc3c7; /* Placeholder background */
          color: #fff;
          border-radius: 5px;
          min-width: 150px;
          text-align: center;
          margin: 10px; /* Margin for spacing */
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .tier-logo span {
          font-size: 0.9em;
        }
        .cta-button {
          display: inline-block;
          background: #e74c3c; /* Primary CTA color */
          color: #fff;
          padding: 12px 25px;
          text-decoration: none;
          border-radius: 5px;
          font-size: 1.1em;
          margin-top: 10px;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background: #c0392b; /* Darker shade on hover */
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8em;
          }
          .content-section {
            padding: 30px 20px;
          }
          .tiers-visual {
            flex-direction: column;
          }
          .tier-logo {
            min-width: 200px; /* Wider on mobile when stacked */
            margin-bottom: 15px;
          }
        }
      </style>
      <section class="content-section">
        <h2>Pick Your Power. Start Creating.</h2>
        <div class="tiers-visual">
          <div class="tier-logo"><span>[Discovery Pass Logo]</span></div>
          <div class="tier-logo"><span>[MuSóci Member Logo]</span></div>
          <div class="tier-logo"><span>[Playlister Logo]</span></div>
          <div class="tier-logo"><span>[VIP Creator Club Logo]</span></div>
        </div>
        <a href="#" class="cta-button">See Membership Options</a>
      </section>
    `;
  }
}

customElements.define('musoci-membership-tiers', MusociMembershipTiers);
