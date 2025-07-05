import {BaseComponent} from '../components/base-component.js';
import {
    // Old sections (comment out or remove if not needed elsewhere)
    // IntroSection,
    // StorySection,
    // ContentShowcase,
    // CTASection,
    // ContactForm,
    // PartnerSection,
    // CreatorOpportunities,
    // New Homepage Sections
    MusociHeroSection,
    MusociWhatIsDifferent,
    MusociForCreators,
    MusociForFans,
    MusociHowItWorks,
    MusociMembershipTiers
} from '../components/index.js';

export class HomePage extends BaseComponent {
    constructor() {
        super();
    }
    
    render () {
        // Header and Footer are assumed to be part of a larger app shell
        this.shadowRoot.innerHTML =`
            <musoci-hero-section></musoci-hero-section>
            <musoci-what-is-different></musoci-what-is-different>
            <musoci-for-creators></musoci-for-creators>
            <musoci-for-fans></musoci-for-fans>
            <musoci-how-it-works></musoci-how-it-works>
            <musoci-membership-tiers></musoci-membership-tiers>
        `;
    }
}

customElements.define('home-page', HomePage);