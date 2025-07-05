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
        .content-wrapper {
          padding: 3rem 1rem;
          text-align: center;
          /* Assuming dark theme from global styles */
        }
        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 2.5rem;
          margin-bottom: 0.5rem; /* Less margin if subheadline follows */
          color: white;
        }
        .subheadline {
          font-family: "Open Sans", sans-serif;
          font-size: 1.2rem;
          font-style: italic;
          color: #cccccc; /* Lighter grey for subheadline */
          margin-bottom: 1.5rem;
        }
        p {
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          color: #f0f0f0;
        }
        .highlights {
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
          display: inline-block;
        }
        .highlights h3 {
          font-family: "Poppins", sans-serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: var(--deep-blue); /* Using global variable */
          text-align: center;
        }
        .highlights ul {
          list-style: none;
          padding: 0;
        }
        .highlights ul li {
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          color: #f0f0f0;
        }
        .highlights .icon {
          margin-right: 0.75rem;
          color: var(--deep-blue); /* Using global variable */
          /* Consider using SVGs or an icon font that inherits color */
        }
        .cta-button {
          /* Mimicking global .cta-button styles */
          display: inline-block; /* Added to make it behave like a block for margin auto */
          padding: 1rem 2rem;
          font-family: "Montserrat", sans-serif;
          background: var(--gradient);
          border: none;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          text-decoration: none; /* Ensure links look like buttons */
          transition: transform 0.3s ease;
          margin-top: 1rem; /* Space above button */
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
          .subheadline {
            font-size: 1.1rem;
          }
          .highlights {
            text-align: center;
          }
          .highlights ul li {
            justify-content: center;
            font-size: 0.95rem;
          }
        }
      </style>
      <section class="content-wrapper">
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
