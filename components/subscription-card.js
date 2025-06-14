import { BaseComponent } from './base-component.js';

class SubscriptionCard extends BaseComponent {
    static get observedAttributes() {
        // HTML attributes are case-insensitive.
        // attributeChangedCallback will receive 'name' in lowercase.
        return ['imagesrc', 'imagealt', 'price', 'title', 'text', 'note'];
    }

    constructor() {
        super(); // BaseComponent initializes this.props = {}
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Map lowercase attribute names to camelCase prop keys
        const attributeToPropMap = {
            'imagesrc': 'imageSrc',
            'imagealt': 'imageAlt',
            'price': 'price',
            'title': 'title',
            'text': 'text',
            'note': 'note'
        };
        const propKey = attributeToPropMap[name];

        if (propKey && this.props[propKey] !== newValue) {
            this.props[propKey] = newValue;
            // Re-render if the component is connected and has already rendered once.
            // The initial render is handled by BaseComponent's connectedCallback.
            if (this.isConnected && this.shadowRoot.firstChild) {
                this.render();
            }
        }
    }

    render() {
        // Destructure from this.props, providing defaults for robustness
        const { imageSrc = 'path/to/default-image.png', imageAlt = 'Subscription image', price = 'N/A', title = 'Subscription Plan', text = 'Details not available.', note = '' } = this.props;
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    padding: 1rem;
                    /* Define variables if they are intended to be configurable from outside
                       or used by multiple rules within this component's shadow DOM.
                       For now, as the component directly uses color values, this change is for correctness
                       if variables *were* to be used by its internal styles.
                       If these variables are meant to *consume* global variables, that's a different pattern.
                    */
                    --card-deep-blue: #2082C5; /* Example of renaming for local scope */
                    --card-magenta-purple: #A12B91;
                    --card-black: #000000;
                    --card-gradient: linear-gradient(135deg, var(--card-deep-blue) 0%, var(--card-magenta-purple) 100%);
                }

                /*
                Example of using the locally defined variable:
                .some-element {
                    background-color: var(--card-deep-blue);
                }
                The current styles mostly use hardcoded values, which is fine for now.
                */

                .card {
                    background-color: white;
                    border-radius: 0.25rem;
                    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    color: #000000;
                    width: 100%; /* Ensure card takes full width of its container */
                }

                .card_image {
                    position: relative;
                    max-height: 250px;
                }

                .card_image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card_price {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                    height: 45px;
                    border-radius: 0.25rem;
                    background-color: #2082C5; /* Use actual value */
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                }

                .card_price span {
                    font-size: 12px;
                    margin-top: -2px;
                }

                .note {
                    position: absolute;
                    bottom: 8px;
                    left: 8px;
                    padding: 4px 8px;
                    border-radius: 0.25rem;
                    background-color: #A12B91; /* Use actual value */
                    font-size: 12px;
                    font-weight: 700;
                    color: #fff;
                }

                .card_content {
                    position: relative;
                    padding: 16px 12px 32px 24px;
                    margin: 16px 8px 8px 0;
                    max-height: 290px;
                    min-height: 350px; /* Fixed height for content area */
                    overflow-y: auto; /* Changed to auto for better scrollbar behavior */
                }

                .card_content::-webkit-scrollbar {
                    width: 8px;
                }

                .card_content::-webkit-scrollbar-track {
                    box-shadow: 0;
                    border-radius: 0;
                }

                .card_content::-webkit-scrollbar-thumb {
                    background-color: #000000; /* Use actual value */
                    border-radius: 15px;
                }

                .card_title {
                    position: relative;
                    margin: 0 0 24px;
                    padding-bottom: 10px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 700;
                }

                .card_title::after {
                    position: absolute;
                    display: block;
                    width: 50px;
                    height: 2px;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(135deg, #2082C5 0%, #A12B91 100%); /* Use actual value */
                    content: "";
                }

                .card_text p {
                    margin: 0 0 24px;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .card_text p:last-child {
                    margin: 0;
                }
            </style>
            <div class="card">
                <div class="card_image">
                    <img src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
                    ${note ? `<span class="note">${note}</span>` : ''}
                    <span class="card_price">${price}</span>
                </div>
                <div class="card_content">
                    <h2 class="card_title">${title}</h2>
                    <div class="card_text">
                        <p>${text}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('subscription-card', SubscriptionCard);
export { SubscriptionCard };
