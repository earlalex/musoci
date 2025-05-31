import { BaseComponent } from "./base-component.js";

export class ContactForm extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `        
        <section class="contact-section" id="contact">
            <form class="contact-form">
                <!-- Form fields -->
            </form>
            <div class="social-links">
                <!-- Social media SVGs -->
            </div>
        </section>
        `;
    }
}