import { BaseComponent } from './base-component.js';

export class IntroSection extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .intro-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 4rem;
        }
        .intro-section p {
          max-width: 1000px;
          color: white;
          line-height: 1.6;
        }
        h2 {
          font-family: 'Poppins', sans-serif;
          color: white;
          padding-left: 1rem;
        }
        .text-block {
          background: rgba(0,0,0,0.7);
          padding: 2.5rem;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        @media (max-width: 768px) {
          .intro-section {
            padding: 0 2rem;
          }
        }
      </style>
      <section class="intro-section">
        <br/>
        <h2>The Evolution of Entertainment</h2>
        <p>
          Step into a vibrant world where music, movies, podcasts, and social media collide. From boundary-breaking films and intimate podcasts to raw performances and live fan-driven moments, MuSócit isn’t just content—it’s connection.
        </p>
        <h3>This isn’t passive watching. It’s curated. It’s interactive. It’s personal.</h3>
        <p>
          Here,  you don’t just watch — you participate. Leave feedback, vote on collaborations, and connect directly with your favorite creators as they share their journey with you. Whether you’re a music head, a film junkie, or just craving something real,
        </p>
        <h4>MuSóci is your gateway to a new kind of entertainment—powered by creators, driven by fans, and built for what’s next.</h4>
        <br/>
      </section>
    `;
  }

  connectedCallback() {
    // super.connectedCallback(); // If BaseComponent has one
    this.render(); // Ensure content is rendered before observing

    if (this.shadowRoot.querySelectorAll('.text-block').length > 0) {
        this.visibilityObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Optional: stop observing after visible
                }
            });
        }, { threshold: 0.1 }); // Adjust threshold as needed

        this.shadowRoot.querySelectorAll('.text-block').forEach(el => {
            this.visibilityObserver.observe(el);
        });
    }
  }

  disconnectedCallback() {
    if (this.visibilityObserver) {
        this.visibilityObserver.disconnect();
    }
    // super.disconnectedCallback(); // If BaseComponent has one
  }
}
customElements.define('musoci-intro', IntroSection);
