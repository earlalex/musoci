export class Router {
    constructor(routes, rootElement) {
        if (!rootElement) {
            throw new Error("Router: rootElement is not provided or is null.");
        }
        this.routes = routes; // e.g., { 'home': HomePageComponent, 'about': AboutPageComponent }
        this.rootElement = rootElement;
        this.currentComponent = null;
        this.activeRouteName = null;
    }

    navigateTo(routeName, params = {}) {
        if (this.activeRouteName === routeName && this.currentComponent) {
            // Already on this route, do nothing to prevent unnecessary re-renders
            console.log(`Already on route: ${routeName}`);
            return;
        }

        // Clear previous view
        this.rootElement.innerHTML = ''; 

        const ViewComponent = this.routes[routeName];
        if (ViewComponent) {
            try {
                const viewInstance = new ViewComponent(params); // Pass params if needed
                this.rootElement.appendChild(viewInstance);
                this.currentComponent = viewInstance;
                this.activeRouteName = routeName;
                // BaseComponent's connectedCallback will call render()
            } catch (error) {
                console.error(`Error instantiating or appending view for route ${routeName}:`, error);
                this.rootElement.innerHTML = `<p style="color:white; text-align:center;">Error loading page: ${routeName}.</p>`;
                this.currentComponent = null;
                this.activeRouteName = null;
            }
        } else {
            console.warn(`Route not found: ${routeName}`);
            this.rootElement.innerHTML = `<p style="color:white; text-align:center;">Page not found: ${routeName}</p>`;
            this.currentComponent = null;
            this.activeRouteName = null;
        }
    }
}