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
        .content-section {
          padding: 40px 20px;
          background-color: #f4f4f4; /* Light background */
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
          text-align: left; /* Align highlights to the left */
          display: inline-block; /* Center the block */
        }
        .highlights h3 {
          font-size: 1.5em;
          margin-bottom: 15px;
          color: #3498db; /* Accent color */
          text-align: center; /* Center "Quick Highlights" */
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
