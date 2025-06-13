import { BaseComponent } from './base-component.js';

export class MainHero extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    console.log('Main Hero Render Function')
    // Ensure BaseComponent's render is called if it has one.
    // super.render(); // If BaseComponent has a render method that needs to be called.
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
        <video autoplay loop muted playsinline src="media/vid/hero-vid.mp4"></video>
        <div class="hero-content">
          <div>
            <a class="brand-logo" href="/">
              <img class="logo-image" src="./media/img/logos/musoci-logo.png" alt="Musoci Logo"/>
            </a>
          </div>
          <h1>Where Creators and Audiences Connect</h1>
          <p class="slogan">Dive into the vibrant world of entertainment, all on your device</p>
          <a href="https://apps.apple.com/us/app/indie-talent-network/id6740873420">
            <button class="cta-button pulse">Download & Stream</button>
          </a>
        </div>
        <div class="gradient-overlay"></div>
      </section>
    `;
  }

  connectedCallback() {
    // Call super.connectedCallback() if BaseComponent has one.
    // super.connectedCallback();

    // It's generally safer to access shadowRoot elements after the component's render method has been called.
    // If render is called in BaseComponent's connectedCallback, this might be fine.
    // Or, if render is called by this component's connectedCallback, ensure this logic runs after it.
    // For this component, render() is called by the BaseComponent constructor.

    this.parallaxScrollListener = () => {
      const overlay = this.shadowRoot.querySelector('.gradient-overlay');
      if (overlay) {
        const scrolled = window.pageYOffset;
        // Check if the component is still in the DOM and visible if performance is an issue.
        // For simplicity, direct manipulation is used here.
        overlay.style.transform = `rotate(${scrolled * 0.2}deg) scale(${1 + scrolled * 0.0005})`;
      }
    };
    window.addEventListener('scroll', this.parallaxScrollListener);
  }

  disconnectedCallback() {
    // Call super.disconnectedCallback() if BaseComponent has one.
    // super.disconnectedCallback();
    window.removeEventListener('scroll', this.parallaxScrollListener);
    if (this.parallaxScrollListener) {
      delete this.parallaxScrollListener; // Clean up the reference
    }
  }
}

