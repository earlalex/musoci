import { BaseComponent } from './base-component.js';

export class MusociForFans extends BaseComponent {
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
          font-family: "Poppins", sans-serif;
          margin-bottom: 0.5rem;
          color: white; /* Or inherit if :host is styled for dark theme */
        }
        .subheadline {
          font-family: "Open Sans", sans-serif;
          font-size: 1.2rem;
          font-style: italic;
          color: #cccccc; /* Or a lighter color if on dark bg */
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
          color: #f0f0f0; /* Or inherit */
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
          color: var(--deep-blue); /* Global variable */
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
          color: #f0f0f0; /* Or inherit */
        }
        .highlights .icon {
          margin-right: 0.75rem;
          color: var(--deep-blue); /* Global variable */
        }
        .highlights .icon svg {
          width: 20px;
          height: 20px;
          vertical-align: middle;
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
          .subheadline {
            font-size: 1.1rem;
          }
          .highlights {
            text-align: left;
          }
          .highlights ul li {
            justify-content: center;
            font-size: 0.95rem;
          }
        }
      </style>
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="content-wrapper">
        <h2>Watch Creators Rise—Because of You.</h2>
        <p class="subheadline">You’re not just a viewer. You’re the algorithm.</p>
        <p>Vote on new talent. Watch exclusive content. Influence who gets featured next.</p>
        <p>Your support doesn’t just matter—it decides.</p>

        <div class="highlights">
          <h3>Quick Highlights:</h3>
          <ul>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span> Browse music videos, short films, and series</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span> Vote for your favorite creators</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></span> Influence the MuSóci charts</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span> Early access and rewards for top fans</li>
          </ul>
        </div>
        <div class="cta-wrapper">
            <a href="https://apps.apple.com/us/app/indie-talent-network/id6740873420" class="cta-button">Explore Content</a>
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-for-fans', MusociForFans);
