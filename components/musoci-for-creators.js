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
          margin-bottom: 0.5rem; /* Less margin if subheadline follows */
          color: white;
          text-align: center; /* Centered for consistency */
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
          text-align: center;
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
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="content-wrapper">
        <h2>Upload. Stream. Monetize.</h2>
        <p class="subheadline">A streaming platform designed for creators, by creators.</p>
        <p>MuSóci puts your content in front of real fans—on real screens.</p>
        <p>Submit unlimited content, earn royalties, and let fan votes determine who gets featured.</p>

        <div class="highlights">
          <h3>Highlights:</h3>
          <ul>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></span> Submit music, film, or podcasts</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg></span> Broadcast to Roku, Fire TV, iOS</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></span> Fans vote your content into Primetime</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span> Get paid for streams, views, subscriptions</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg></span> Monthly analytics to track your growth</li>
            <li><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></span> Keep creative control, not just exposure</li>
          </ul>
        </div>
        <div class="cta-wrapper">
            <a data-navigate-to="subscriptions" class="cta-button">See Creator Plans</a>
        </div>
      </section>
    `;
    this.shadowRoot.querySelector('a[data-navigate-to]').addEventListener('click', (event) => {
        event.preventDefault();
        const routeName = event.currentTarget.dataset.navigateTo;
        if (routeName) {
            // Dispatch a custom event that the MusociApp will listen for
            this.dispatchEvent(new CustomEvent('navigate', {
                detail: { routeName },
                bubbles: true,    // Allow the event to bubble up through the DOM
                composed: true  // Allow the event to cross Shadow DOM boundaries
            }));
        }
    });
  }
}

customElements.define('musoci-for-creators', MusociForCreators);
