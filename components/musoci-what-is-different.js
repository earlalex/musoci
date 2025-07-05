import { BaseComponent } from './base-component.js';

export class MusociWhatIsDifferent extends BaseComponent {
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
          background-color: #f4f4f4; /* Light background for the page */
        }
        h2 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #2c3e50; /* Darker heading color */
        }
        p {
          font-size: 1em;
          margin-bottom: 15px;
          color: #444;
          max-width: 800px; /* Max width for readability */
          margin-left: auto;
          margin-right: auto;
        }
         /* Responsive adjustments */
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8em;
          }
          .content-section {
            padding: 30px 20px;
          }
        }
      </style>
      <section class="content-section">
        <h2>The Streaming Revolution Starts With You</h2>
        <p>MuSóci is the next-generation streaming platform built for independent creators—and powered by the fans who believe in them. We blend bold content with real interaction, offering more than just streaming: we deliver connection.</p>
        <p>With exclusive content & fan-voted channels like FanDelirious, MuSóci brings raw creativity and audience energy together in one immersive space.</p>
        <p>This isn’t just another platform.</p>
        <p>It’s a launchpad for indie voices—where visionary storytellers can finally turn followers into revenue and fans into collaborators.</p>
        <p><strong>Discover. Vote. Stream. Support.</strong></p>
        <p><strong>Only on MuSóci.</strong></p>
      </section>
    `;
  }
}

customElements.define('musoci-what-is-different', MusociWhatIsDifferent);
