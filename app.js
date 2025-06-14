import { BaseComponent } from './components/base-component.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Router } from './router.js';
import { HomePage } from './pages/home-page.js';
import { SubscriptionsPage } from './pages/subscriptions-page.js';
import { SubmitContentPage } from './pages/submit-content-page.js';

export class MusociApp extends BaseComponent {
    constructor() {
        super();

        // Define components essential for the app shell and routing
        if (!customElements.get('musoci-header')) customElements.define('musoci-header', Header);
        if (!customElements.get('musoci-footer')) customElements.define('musoci-footer', Footer);
        if (!customElements.get('home-page')) customElements.define('home-page', HomePage);
        if (!customElements.get('subscriptions-page')) customElements.define('subscriptions-page', SubscriptionsPage);
        if (!customElements.get('submit-content-page')) customElements.define('submit-content-page', SubmitContentPage);
        // Placeholder pages are defined above
        console.log(Header);
        this.routes = {
            'home': HomePage,
            'subscriptions': SubscriptionsPage,
            'submit-content': SubmitContentPage,
            // Define other routes here as you create more pages
        };
    }

    connectedCallback() {
        super.connectedCallback(); // Calls this.render()
        
        const routerOutlet = this.shadowRoot.querySelector('#router-outlet');
        if (routerOutlet) {
            this.router = new Router(this.routes, routerOutlet);
            this.router.navigateTo('home'); // Set the default route
        } else {
            console.error("MusociApp: #router-outlet not found in shadow DOM.");
        }

        // Listen for custom 'navigate' events dispatched by links
        this.shadowRoot.addEventListener('navigate', (event) => {
            const { routeName, params } = event.detail;
            if (this.router && routeName) {
                this.router.navigateTo(routeName, params);
            }
        });
    }

    render() {
        
        console.log('App Render Function')
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: flex; flex-direction: column; min-height: 100vh; }
                #router-outlet { flex-grow: 1; }
            </style>
            <musoci-header></musoci-header>
            <main id="router-outlet"><!-- Routed page content will appear here --></main>
            <musoci-footer></musoci-footer>
        `;
    }
}

customElements.define('musoci-app', MusociApp);