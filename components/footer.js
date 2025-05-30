import { BaseComponent } from './base-component.js';

export class Footer extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem;
                }
            </style>
            <footer>
                <p>
                    Contact Us By Phone:
                    <a class="cta-tel" href="tel:8776466738">
                    877-646-6738
                    </a>
                </p>
                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center">
                    <img alt="" style="display:block;width:150px;" src="./media/img/logos/card-logos.png" style="width: 100%;"/>
                    <p>We accept Visa, Mastercard &amp; AMEX</p>
                </div> 
                <p>
                    <a href="./pages/privacy.html">
                    Privacy Policy
                    </a>
                    |
                    <a href="./pages/terms.html">
                    Terms of Service
                    </a>
                    |
                    <a href="./pages/refund.html">
                    Refund Policy
                    </a>
                </p>
                <p>
                    © 2025 Copyright. All rights reserved. | Musoci
                </p>
            </footer>
        `;
    }
}

customElements.define('musoci-footer', Footer);