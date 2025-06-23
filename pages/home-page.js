import {BaseComponent} from '../components/base-component.js';
import {
    IntroSection,
    StorySection,
    ContentShowcase,
    CTASection,
    ContactForm,
    PartnerSection,
    CreatorOpportunities,
} from '../components/index.js';

export class HomePage extends BaseComponent {
    constructor() {
        super();
        // customElements.define calls will be removed as per Step 1.
        // Modules themselves will be responsible for self-definition.
    }
    
    render () {
        // Header and Footer are now part of MusociApp shell
        this.shadowRoot.innerHTML =`
            <musoci-intro></musoci-intro>
            <musoci-story></musoci-story>
            <musoci-showcase></musoci-showcase>
            <musoci-opportunities></musoci-opportunities>
            <musoci-cta></musoci-cta>
            <musoci-contact></musoci-contact>
            <musoci-partners></musoci-partners>
        `;
    }
}

customElements.define('home-page', HomePage);