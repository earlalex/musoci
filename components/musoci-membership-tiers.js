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
          text-align: left;
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
          text-align: left;
          font-family: "Open Sans", sans-serif;
        }
        .tier-logo img {
          width: 100%; /* Make the image responsive */
          }
        .cta-wrapper {
          text-align: center; /* Center the CTA button */
          margin-top: 2rem; /* Space above the button */
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
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="content-wrapper">
        <h2>Pick Your Power. Start Creating.</h2>
        <div class="tiers-visual">
          <div class="tier-logo"><img src="/media/img/free-pass.png" alt="Discovery Pass Logo"></div>
          <div class="tier-logo"><img src="/media/img/musoci-member.png" alt="MuSóci Member Logo"></div>
          <div class="tier-logo"><img src="/media/img/playlister.png" alt="Playlister Logo"></div>
          <div class="tier-logo"><img src="/media/img/creators-club.png" alt="VIP Creator Club Logo"></div>
        </div>
        <div class="cta-wrapper">
          <a href="https://musocitvnetwork.tvspublishingservice.com/sign-up.html?channelId=6ee8f081-d92c-4680-b12c-96d9884e6b06" class="cta-button">Choose Your Membership</a>
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-membership-tiers', MusociMembershipTiers);
