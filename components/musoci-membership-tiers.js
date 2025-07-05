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
        .content-wrapper {
          padding: 3rem 1rem;
          text-align: center;
        }
        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: white;
        }
        .tiers-visual {
          display: flex;
          justify-content: space-evenly; /* Evenly space the items */
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem; /* Gap between logos */
          margin-bottom: 2.5rem;
        }
        .tier-logo {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.08); /* Consistent with other cards */
          color: #e0e0e0; /* Light text for placeholder */
          border-radius: 8px;
          min-width: 180px; /* Min width for each logo placeholder */
          max-width: 220px; /* Max width */
          flex: 1 1 180px; /* Flex properties */
          text-align: center;
          font-family: "Open Sans", sans-serif;
        }
        .tier-logo span {
          font-size: 1rem;
          font-weight: bold;
        }
        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          font-family: "Montserrat", sans-serif;
          background: var(--gradient);
          border: none;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s ease;
          margin-top: 1rem;
        }
        .cta-button:hover {
          transform: scale(1.05);
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 2rem 1rem;
          }
          h2 {
            font-size: 2rem;
          }
          .tier-logo {
            min-width: 150px;
            flex-basis: calc(50% - 1rem); /* Two items per row on smaller screens */
          }
        }
        @media (max-width: 480px) {
            .tier-logo {
                flex-basis: calc(100% - 1rem); /* One item per row on very small screens */
            }
        }
      </style>
      <section class="content-wrapper">
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
