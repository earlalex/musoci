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
          text-align: center;
        }
        .content-wrapper {
          padding: 3rem 1rem;
          text-align: center;
           /* background-color: #f0f0f0; /* Example if this section needs a light background variant */
           /* color: #333; */
           /* For dark theme, these would be var(--black) and white, or inherited */
        }
        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 2.5rem;
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
        <h2>Watch Creators Rise—Because of You.</h2>
        <p class="subheadline">You’re not just a viewer. You’re the algorithm.</p>
        <p>Vote on new talent. Watch exclusive content. Influence who gets featured next.</p>
        <p>Your support doesn’t just matter—it decides.</p>

        <div class="highlights">
          <h3>Quick Highlights:</h3>
          <ul>
            <li><span class="icon">[Icon]</span> Browse music videos, short films, and series</li>
            <li><span class="icon">[Icon]</span> Vote for your favorite creators</li>
            <li><span class="icon">[Icon]</span> Influence the MuSóci charts</li>
            <li><span class="icon">[Icon]</span> Early access and rewards for top fans</li>
          </ul>
        </div>
        <div>
            <a href="#" class="cta-button">Explore Content</a>
        </div>
      </section>
    `;
  }
}

customElements.define('musoci-for-fans', MusociForFans);
