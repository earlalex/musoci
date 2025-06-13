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
                background-color: #f4f4f4; /* Light grey background for the section */
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
                background-color: #fff; /* White background for the form area */
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
            <form class="contact-form">
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
                    <li><a href="https://facebook.com/musoci" target="_blank" aria-label="Facebook">
                        <svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm3.5 6.7h-2.25V8.44c0-.6.17-.9.9-.9H15V6.14h-2.02c-2.25 0-3.28 1.29-3.28 3.28V11h-1.5v2.25H9.7v6.7h2.25v-6.7h2.02l.23-2.25h-2.25V9.94c0-.38.17-.5.5-.5h.75v-.5z"/></svg>
                    </a></li>
                    <li><a href="https://twitter.com/musoci" target="_blank" aria-label="Twitter">
                        <svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm4.87 7.75c.01.15.01.3.01.46 0 4.64-3.54 9.98-9.98 9.98-1.98 0-3.82-.58-5.37-1.57.27.03.55.05.82.05 1.64 0 3.15-.56 4.35-1.5-1.53-.03-2.82-1.04-3.27-2.44.21.04.43.06.65.06.32 0 .63-.04.92-.12-1.6-.32-2.8-1.73-2.8-3.44V11c.47.26 1.01.42 1.58.44-.93-.63-1.54-1.7-1.54-2.92 0-.64.17-1.25.47-1.77 1.73 2.12 4.3 3.52 7.18 3.64-.06-.26-.09-.52-.09-.8 0-1.93 1.56-3.49 3.49-3.49.99 0 1.9.42 2.53 1.1.79-.16 1.53-.44 2.2-.84-.26.81-.81 1.5-1.53 1.93.7-.08 1.37-.27 1.98-.54-.46.69-1.04 1.3-1.72 1.78z"/></svg>
                    </a></li>
                    <li><a href="https://instagram.com/musoci" target="_blank" aria-label="Instagram">
                        <svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm6.25 7.5c0 .42-.12.8-.33 1.13-.21.33-.5.58-.87.75-.37.17-.78.25-1.23.25h-.5c-.45 0-.87-.08-1.23-.25-.37-.17-.66-.42-.87-.75s-.33-.7-.33-1.13V6.25c0-.42.12-.8.33-1.13.21-.33.5-.58.87-.75s.78-.25 1.23-.25h.5c.45 0 .87.08 1.23.25s.66.42.87.75c.21.33.33.7.33 1.13v1.25zm-3.75 7.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8.25c-1.8 0-3.25 1.45-3.25 3.25s1.45 3.25 3.25 3.25 3.25-1.45 3.25-3.25-1.45-3.25-3.25-3.25z"/></svg>
                    </a></li>
                </ul>
            </div>
        </section>
        `;
    }
}
customElements.define('musoci-contact', ContactForm);