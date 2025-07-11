import { BaseComponent } from './base-component.js';

export class StorySection extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    border-bottom: 1px solid #fff;
                    border-top: 1px solid #fff;
                }

                .story-section {
                    padding: 8rem 5%;
                    position: relative;
                    background: rgba(255,255,255,0.05);
                    background-image: url('../media/img/story-section.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    min-height: 100vh;
                }

                .content-grid {
                    display: grid;
                    gap: 3rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .text-block {
                    background: rgba(0,0,0,0.7);
                    padding: 2.5rem;
                    border-radius: 20px;
                    backdrop-filter: blur(8px);
                    transform: translateZ(0);
                }

                h2 {
                    font-family: 'Poppins', sans-serif;
                    color: white;
                    margin-top: 0;
                }

                p {
                    font-family: 'Open Sans', sans-serif;
                    color: white;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <section class="story-section" id="about">
                <div class="content-grid">
                    <div class="text-block">
                        <h2>Our Story</h2>
                        <p>We harness innovative technology to provide a platform where independent artists can present their work, connect with audiences, and maintain full ownership of their creations. By curating a dynamic array of content that features music, art, film, podcasts, and more, we aim to foster a community that honors the spirit of independence and inspires the next wave of creators to shine without limits.</p>
                    </div>
                    <div class="text-block mission">
                        <h2>Our Mission</h2>
                        <p>At MuSoci, we are pioneering the next generation of entertainment dedicated to celebrating independent artists through our vibrant television streaming platform. Our mission is to spotlight creativity, amplify diverse voices, and empower independent creators to showcase their unique artistry on a global stage.</p>
                    </div>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        // super.connectedCallback(); // If BaseComponent has one
        // this.render(); // render() is called by BaseComponent constructor

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
customElements.define('musoci-story', StorySection);