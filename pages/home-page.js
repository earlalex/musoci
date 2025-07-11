import {BaseComponent} from '../components/base-component.js';
import {
    IntroSection,
    StorySection,
    ContentShowcase,
    CTASection,
    ContactForm,
    PartnerSection,
    CreatorOpportunities,
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
            <musoci-intro></musoci-intro>
            <musoci-story></musoci-story>
            <musoci-hero-section></musoci-hero-section>
            <musoci-showcase></musoci-showcase>
            <musoci-what-is-different></musoci-what-is-different>
            <musoci-for-creators></musoci-for-creators>
            <musoci-for-fans></musoci-for-fans>
            <musoci-how-it-works></musoci-how-it-works>
            <musoci-membership-tiers></musoci-membership-tiers>
            <musoci-opportunities></musoci-opportunities>
            <musoci-cta></musoci-cta>
            <musoci-contact></musoci-contact>
            <musoci-partners></musoci-partners>
        `;
    }
}

customElements.define('home-page', HomePage);