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
        // Define components used by this page if not already globally defined
        // The customElements.get check prevents errors if already defined.
        if (!customElements.get('musoci-intro')) customElements.define('musoci-intro', IntroSection);
        if (!customElements.get('musoci-story')) customElements.define('musoci-story', StorySection);
        if (!customElements.get('musoci-showcase')) customElements.define('musoci-showcase', ContentShowcase);
        if (!customElements.get('musoci-cta')) customElements.define('musoci-cta', CTASection);
        if (!customElements.get('musoci-contact')) customElements.define('musoci-contact', ContactForm);
        if (!customElements.get('musoci-partners')) customElements.define('musoci-partners', PartnerSection);
        if (!customElements.get('musoci-opportunities')) customElements.define("musoci-opportunities", CreatorOpportunities);
    }
    
    render () {
        // Header and Footer are now part of MusociApp shell
        this.shadowRoot.innerHTML =`
                <musoci-intro></musoci-intro>
                <musoci-story></musoci-story>
                <musoci-showcase></musoci-showcase>
                <musoci-opportunities></musoci-opportunities>
                <musoci-contact></musoci-contact>
                <musoci-partners></musoci-partners>
        `;
    }
}

customElements.define('home-page', HomePage);