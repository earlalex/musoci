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
            <div class="lazy-section-placeholder" data-section-tag="musoci-intro" data-section-module="../components/intro-section.js" style="min-height: 50vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-story" data-section-module="../components/story-section.js" style="min-height: 100vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-showcase" data-section-module="../components/content-showcase.js" style="min-height: 100vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-opportunities" data-section-module="../components/creator-opportunities.js" style="min-height: 50vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-cta" data-section-module="../components/cta-section.js" style="min-height: 50vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-contact" data-section-module="../components/contact-form.js" style="min-height: 50vh;"></div>
            <div class="lazy-section-placeholder" data-section-tag="musoci-partners" data-section-module="../components/partner-section.js" style="min-height: 30vh;"></div>
        `;
    }

    connectedCallback() {
        // super.connectedCallback(); // If BaseComponent has a connectedCallback
        this.render(); // Render placeholders first

        this.lazyLoadObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
            threshold: 0.1,
            // rootMargin: '0px 0px 100px 0px' // Optionally, load a bit before it enters viewport
        });
        this.shadowRoot.querySelectorAll('.lazy-section-placeholder').forEach(placeholder => {
            this.lazyLoadObserver.observe(placeholder);
        });
    }

    async handleIntersection(entries, observer) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const placeholder = entry.target;
                const sectionTag = placeholder.dataset.sectionTag;
                const sectionModulePath = placeholder.dataset.sectionModule;

                try {
                    // Dynamically import the component's module
                    // Note: The path is relative to this file (pages/home-page.js)
                    const module = await import(sectionModulePath);

                    // Assumes component modules define their own custom elements
                    // e.g., intro-section.js should have customElements.define('musoci-intro', IntroSection);

                    // Example: If module exports the class:
                    // const componentClassName = Object.keys(module)[0]; // Or a more robust way to get the class name
                    // const SectionComponent = module[componentClassName];
                    // if (SectionComponent && !customElements.get(sectionTag)) {
                    //    customElements.define(sectionTag, SectionComponent);
                    // }


                    const sectionElement = document.createElement(sectionTag);
                    // Add any necessary attributes or properties to sectionElement if needed

                    placeholder.parentNode.replaceChild(sectionElement, placeholder);
                    observer.unobserve(placeholder); // Stop observing the placeholder

                } catch (error) {
                    console.error(`Failed to lazy-load section ${sectionTag} from ${sectionModulePath}:`, error);
                    // Optionally, replace placeholder with an error message or leave it
                }
            }
        }
    }

    disconnectedCallback() {
        // super.disconnectedCallback(); // If BaseComponent has one
        if (this.lazyLoadObserver) {
            this.lazyLoadObserver.disconnect();
        }
    }
}

customElements.define('home-page', HomePage);