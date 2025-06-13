import { BaseComponent } from './base-component.js';

export class PageHero extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    console.log('Page Hero Render Function')
    // super.render(); // If BaseComponent has a render method
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero video {
          min-width: 100%;
          min-height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .hero-content {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          z-index: 1;
          background-color: rgba(0, 0, 0, 0.7);
        }
        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          height: 300px;
          color: white;
        }
        .logo-image {
          height: 100%;
          width: 300px;
          object-fit: contain;
        }
        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          margin-top: 0;
          color: white;
        }
        .slogan {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: white;
        }
        .gradient-overlay {
          position: absolute;
          width: 2000%;
          height: 2000%;
          background: var(--gradient);
          opacity: 0.2;
        }
        .cta-button {
          padding: 1rem 2rem;
          font-family: 'Montserrat', sans-serif;
          background: var(--gradient);
          border: none;
          border-radius: 25px;
          color: white;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .cta-button:hover {
          transform: scale(1.05);
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      </style>
      <section class="hero" id="home">
        <div class="hero-content">
          <div>
            <a class="brand-logo" href="/">
              <img class="logo-image" src="./media/img/logos/musoci-logo.png" alt="Musoci Logo"/>
            </a>
          </div>
          <a href="https://apps.apple.com/us/app/indie-talent-network/id6740873420">
            <button class="cta-button pulse">Download & Stream</button>
          </a>
        </div>
        <div class="gradient-overlay"></div>
      </section>
    `;
  }

  connectedCallback() {
    // super.connectedCallback(); // If BaseComponent has one
    this.parallaxScrollListener = () => {
      const overlay = this.shadowRoot.querySelector('.gradient-overlay');
      if (overlay) {
        const scrolled = window.pageYOffset;
        overlay.style.transform = `rotate(${scrolled * 0.2}deg) scale(${1 + scrolled * 0.0005})`;
      }
    };
    window.addEventListener('scroll', this.parallaxScrollListener);
  }

  disconnectedCallback() {
    // super.disconnectedCallback(); // If BaseComponent has one
    window.removeEventListener('scroll', this.parallaxScrollListener);
    if (this.parallaxScrollListener) {
      delete this.parallaxScrollListener;
    }
  }
}

