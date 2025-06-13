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
          Immerse yourself in a vibrant hub where music, movies, podcasts, & social media come together. 
          Enjoy curated playlists, exclusive behind-the-scenes content, LIVE performances and engaging 
          podcasts that dive into the latest trends, interviews, and cultural phenomena.
        </p>
        <p>
          Plus--your voice matters! Leave feedback for your favorite influencers as they share their 
          stories and insights for a heightened experience!. Whether you're a movie buff, a music lover, 
          or seeking something fresh, MuSocí is your go-to destination for a cutting edge entertainment 
          adventure. Join us and experience the next generation of storytelling, creativity, and 
          interaction reimagined!
        </p>
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
