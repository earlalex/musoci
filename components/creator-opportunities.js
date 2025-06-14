import { BaseComponent } from "./base-component.js";
export class CreatorOpportunities extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                .creative-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    color: white;
                }
                .opportunity-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 6rem;
                    width: 100%;
                }
                @media (min-width: 768px) {
                    .opportunity-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }
                .creative-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem 6rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    color: white;
                }
                .opportunity-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 6rem;
                    width: 100%;
                }
                @media (min-width: 768px) {
                    .opportunity-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }
                .feature-card {
                    padding: 2rem;
                    border-radius: 15px;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .feature-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.15);
                }
                .opportunity-icon {
                    background-position: center;
                    background-size: cover;
                    width: 100%;
                    height: 200px;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                }
                .opportunity-icon.content {
                    background-image: url('../media/img/contentdistro.jpg');
                }
                .opportunity-icon.fan {
                    background-image: url('../media/img/fanengagement.jpg');
                }
                .opportunity-icon.monetize {
                    background-image: url('../media/img/monetizing.jpg');
                }
                h3 {
                    font-size: 1.5rem;
                    margin: 0 0 1rem;
                    color: white;
                }
                p {
                    margin: 0;
                    color: rgba(255,255,255,0.8);
                    line-height: 1.6;
                }
            </style>
            <section class="creative-section">
            <h2>
                Creator Opportunities
            </h2>
            <div class="opportunity-grid">
                <div class="feature-card">
                <div class="opportunity-icon content">
                </div>
                <h3>
                Content Distribution
                </h3>
                <p>
                Reach global audiences with our syndication network.
                </p>
                </div>
                <div class="feature-card">
                <div class="opportunity-icon fan">
                </div>
                <h3>
                Fan Engagement
                </h3>
                <p>
                Built-in tools for community building and analytics.
                </p>
                </div>
                <div class="feature-card">
                <div class="opportunity-icon monetize">
                </div>
                <h3>
                Monetization &amp; Copyright
                </h3>
                <p>
                Monetize and secure the rights to your content.
                </p>
                </div>
            </div>
            </section>
        `;
  }

  connectedCallback() {
    super.connectedCallback(); // If BaseComponent has one
    // this.render(); // render() is called by BaseComponent constructor

    if (this.shadowRoot.querySelectorAll('.feature-card').length > 0) {
        this.visibilityObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Optional: stop observing after visible
                }
            });
        }, { threshold: 0.1 }); // Adjust threshold as needed

        this.shadowRoot.querySelectorAll('.feature-card').forEach(el => {
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
customElements.define('musoci-opportunities', CreatorOpportunities);
