import {BaseComponent} from './base-component.js';

export class Navigation extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    console.log('Navigation Render Function')
    this.shadowRoot.innerHTML = `
        <style>
            :host {
            display: block;
            position: sticky;
            top: 0;
            z-index: 1000;
            }
            .navbar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            background: rgba(0,0,0,0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            }
            .brand-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            height: 175px;
            color: white;
            }
            .logo-image {
            height: 100%;
            width: auto;
            object-fit: contain;
            }
            .header-cta {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0;
            width: 100%;
            }
            .header-cta > details[open] {
            text-align: center;
            }
            .header-cta > details[open] > .header-menu {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            }
            .header-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            justify-content: center;
            background-color: var(--deep-blue);
            padding: 1rem 0;
            }
            .header-menu span {
            display: flex;
            align-items: center;
            justify-content: center;
            }
            details {
              width: 100%;
            }
            details summary {
            font-size: 2rem;
            cursor: pointer;
            text-align: center;
            list-style: none;
            }
            details summary::before {
            content: "☰";
            font-size: 2rem;
            transition: transform 0.3s ease;
            display: inline-block;
            }
            details[open] summary::before {
            transform: rotate(90deg);
            }
            details summary::-webkit-details-marker {
            display: none;
            }
            .header-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            justify-content: center;
            background-color: var(--deep-blue);
            padding: 1rem 0;
            animation: slideDown 0.3s ease-out;
            }
            @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }
            .header-menu span {
            display: flex;
            align-items: center;
            justify-content: center;
            }
            details {
              width: 100%;
            }
            details summary {
            font-size: 2rem;
            cursor: pointer;
            text-align: center;
            list-style: none;
            }
            details summary::before {
            content: "☰";
            font-size: 2rem;
            }
            details summary::-webkit-details-marker {
            display: none;
            }
            a {
            color: white;
            text-decoration: none;
            }
            hr {
            display: block;
            width: 100%;
            height: 1px;
            border: 0;
            border-top: 1px solid #ccc;
            margin: 1em 0;
            padding: 0;
            margin: 0;
            }
            @media only screen and (min-width: 600px) {
                .navbar {
                    flex-direction: row;
                    gap: 1rem;
                }
                .header-cta {
                    align-items: end;
                    justify-content: end;
                }
                .header-cta > details[open] {
                    text-align: center;
                    width: 100%;
                }
                .header-cta > details[open] > .header-menu {
                    flex-direction: row;
                    gap: 1rem;
                    text-align: center;
                    justify-content: space-evenly;
                    width: 100%;
                }
            }
        </style>
        <header class="navbar">
            <section class="header-cta">
                <details>
                <summary>
                </summary>
                <div class="header-menu">
                <span>
                <a href="#" data-navigate-to="home" style="text-decoration: none;">
                    Home
                </a>
                </span>
                <span>
                <a href="https://musocitvnetwork.tvspublishingservice.com/sign-up.html?channelId=6ee8f081-d92c-4680-b12c-96d9884e6b06" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    Sign-Up
                </a>
                </span>
                <span>
                <a href="#" data-navigate-to="subscriptions" style="text-decoration: none;">
                    Get Your Subscription
                </a>
                </span>
                <span>
                <a href="#" data-navigate-to="submit-content" style="text-decoration: none;">
                    Submit Content
                </a>
                </span>
                </details>
            </section>
        </header>
        <hr />
    `;

    this.shadowRoot.querySelectorAll('a[data-navigate-to]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const routeName = link.dataset.navigateTo;
            if (routeName) {
                // Dispatch a custom event that the MusociApp will listen for
                this.dispatchEvent(new CustomEvent('navigate', {
                    detail: { routeName },
                    bubbles: true,    // Allow the event to bubble up through the DOM
                    composed: true  // Allow the event to cross Shadow DOM boundaries
                }));
            }
        });
    });
  }
}
