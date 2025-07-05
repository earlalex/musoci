import { BaseComponent } from './base-component.js';

export class MusociForCreators extends BaseComponent {
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
          margin-bottom: 10px;
          color: #2c3e50;
        }
        .subheadline {
          font-size: 1.3em;
          color: #555;
          margin-bottom: 20px;
          font-style: italic;
        }
        p {
          font-size: 1em;
          margin-bottom: 15px;
          color: #444;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .highlights {
          margin-top: 20px;
          margin-bottom: 30px;
          text-align: left; /* Align highlights to the left for easier reading */
          display: inline-block; /* Center the block itself */
        }
        .highlights h3 {
          font-size: 1.5em;
          margin-bottom: 15px;
          color: #3498db; /* Accent color */
          text-align: center; /* Center the "Highlights" title */
        }
        .highlights ul {
          list-style: none;
          padding: 0;
        }
        .highlights ul li {
          font-size: 1em;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        .highlights .icon {
          margin-right: 10px;
          color: #3498db; /* Icon color */
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
          .subheadline {
            font-size: 1.1em;
          }
          .content-section {
            padding: 30px 20px;
          }
          .highlights {
            text-align: center; /* Center highlight text on mobile */
          }
          .highlights ul li {
            justify-content: center; /* Center list items */
          }
        }
      </style>
      <section class="content-section">
        <h2>Upload. Stream. Monetize.</h2>
        <p class="subheadline">A streaming platform designed for creators, by creators.</p>
        <p>MuSóci puts your content in front of real fans—on real screens.</p>
        <p>Submit unlimited content, earn royalties, and let fan votes determine who gets featured.</p>

        <div class="highlights">
          <h3>Highlights:</h3>
          <ul>
            <li><span class="icon">[Icon]</span> Submit music, film, or podcasts</li>
            <li><span class="icon">[Icon]</span> Broadcast to Roku, Fire TV, iOS</li>
            <li><span class="icon">[Icon]</span> Fans vote your content into Primetime</li>
            <li><span class="icon">[Icon]</span> Get paid for streams, views, subscriptions</li>
            <li><span class="icon">[Icon]</span> Monthly analytics to track your growth</li>
            <li><span class="icon">[Icon]</span> Keep creative control, not just exposure</li>
          </ul>
        </div>
        <div>
            <a href="#" class="cta-button">See Creator Plans</a>
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-for-creators', MusociForCreators);
