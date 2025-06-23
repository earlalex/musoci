import { BaseComponent } from "./base-component.js";

export class ContactForm extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        const form = this.shadowRoot.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We\'ll respond shortly.');
            });
        }
    }

    render() {
        // For brevity, the full HTML and style are omitted in this diff,
        // but assume it's the same as what was previously in the component.
        // The critical part is that the <form class="contact-form"> exists.
        this.shadowRoot.innerHTML = `
        <style>
            /* Basic styling for the contact form - can be expanded */
            :host {
                display: block;
                padding: 2rem;
                background-color: #000; /* Light grey background for the section */
                color: #333;
                font-family: 'Open Sans', sans-serif;
            }
            .contact-section {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }
            h2 {
                font-family: 'Poppins', sans-serif;
                color: #333;
                margin-bottom: 2rem;
            }
            .contact-form {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1rem;
                background-color: #000; /* White background for the form area */
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            .form-group {
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            .form-group label {
                margin-bottom: 0.5rem;
                font-weight: bold;
                color: #555;
            }
            .form-group input,
            .form-group textarea {
                padding: 0.75rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 1rem;
                font-family: 'Open Sans', sans-serif;
            }
            .form-group textarea {
                resize: vertical;
                min-height: 100px;
            }
            .submit-button {
                padding: 0.75rem 1.5rem;
                background: var(--gradient, linear-gradient(135deg, #2082C5 0%, #A12B91 100%)); /* Fallback gradient */
                color: white;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .submit-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            }
            .social-links {
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 1px solid #ddd;
            }
            .social-links p {
                margin-bottom: 1rem;
                font-size: 1.1rem;
            }
            .social-icon-list {
                list-style: none;
                padding: 0;
                display: flex;
                justify-content: center;
                gap: 1.5rem;
            }
            .social-icon-list li a svg {
                width: 30px; /* Adjust size as needed */
                height: 30px;
                fill: #555; /* Adjust color as needed */
                transition: fill 0.3s ease;
            }
            .social-icon-list li a:hover svg {
                fill: var(--deep-blue, #2082C5); /* Use theme color or fallback */
            }

            /* Responsive adjustments */
            @media (min-width: 600px) {
                .contact-form {
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .form-group.full-width {
                    grid-column: 1 / -1; /* Make textarea span both columns */
                }
            }
        </style>
        <section class="contact-section" id="contact">
            <h2>Get In Touch</h2>
            <p>Have questions or want to collaborate? Reach out to us!</p>
            <form class="contact-form" post="">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group full-width">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group full-width">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <div class="form-group full-width">
                    <button type="submit" class="submit-button">Send Message</button>
                </div>
            </form>
            <div class="social-links">
                <p>Connect with us on social media:</p>
                <ul class="social-icon-list">
                    <li><a href="https://www.youtube.com/@MuSociTV" target="_blank" aria-label="YouTube">
                        <img width="75px" src="/media/img/logos/youtube.png" alt="YouTube" />
                    </a></li>
                    <li><a href="https://www.tiktok.com/@musocitv" target="_blank" aria-label="Twitter">
                        <img width="75px" src="/media/img/logos/tiktok.png" alt="TikTok" />
                    </a></li>
                    <li><a href="https://www.instagram.com/musoci_tv/" target="_blank" aria-label="Instagram">
                        <img width="75px" src="/media/img/logos/instagram.png" alt="Instagram" />
                    </a></li>
                </ul>
            </div>
        </section>
        `;
    }
}
customElements.define('musoci-contact', ContactForm);