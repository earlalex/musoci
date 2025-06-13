import { BaseComponent } from './base-component.js';

export class PartnerSection extends BaseComponent {
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
                .partner-section { display: flex; flex-direction: column; align-items: center; justify-content: center; }
                .partner-header p { font-size: .8rem; opacity: .5; }
                .partner-logos { display: grid; gap: 2rem; justify-items: center; align-items: center; }
                .logo-default { background-image: url('./media/img/logos/old_logo.png'); background-size: 100%; background-repeat: no-repeat; background-position: center; width: 150px; height: 150px; }
                .logo-a4ce { background-image: url('./media/img/logos/ace_logo_horizontal_white-blue.svg'); width: 250px; }
                .logo-wau { background-color: #fff; background-image: url('./media/img/logos/logo-wau.png'); }
                .logo-earlalex { background-image: url('./media/img/logos/earl-alex-logo.png'); }
                @media (min-width: 768px) {
                    .partner-logos {
                        grid-auto-flow: column;
                    }
                }
            </style>
            <section class="partner-section">
                <div class="partner-header">
                    <h2>
                    Partners &amp; Contributors
                    </h2>
                    <p>
                    Click on their logo to find out more about them.
                    </p>
                </div>
                <div class="partner-logos">
                    <a class="logo-default logo-a4ce" href="https://a4cegroup.com/">
                    </a>
                    <a class="logo-default logo-wau" href="https://a4cegroup.com/">
                    </a>
                    <a class="logo-default logo-earlalex" href="https://earlalex.com/">
                    </a>
                </div>
            </section>
        `;
    }
}
customElements.define('musoci-partners', PartnerSection);
