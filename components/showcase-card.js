import { BaseComponent } from './base-component.js';

export class ShowcaseCard extends BaseComponent {
    static get observedAttributes() {
        return ['title', 'description', 'video-src', 'category', 'video-position'];
    }

    constructor() {
        super();
        this._title = '';
        this._description = '';
        this._videoSrc = '';
        this._category = '';
        this._videoPosition = '';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[`_${name.replace(/-([a-z])/g, g => g[1].toUpperCase())}`] = newValue;
            this.render();
        }
    }

    render() {
        const videoPositionClass = this._videoPosition ? `video-pos-${this._videoPosition}` : '';
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .content-card {
                    background: rgba(255,255,255,0.1);
                    padding: 1rem;
                    min-width: 275px;
                    min-height: 350px;
                    margin: 1rem;
                    border-radius: 12px;

                    transition: transform 0.3s ease;
                }
                .content-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.15);
                }
                .thumbnail {
                    background-position: center;
                    background-size: cover;
                    width: 100%;
                    height: 200px;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    position: relative;
                    overflow: hidden;
                }
                .thumbnail video {
                    min-width: 100%;
                    min-height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
                .video-pos-top-100 .thumbnail video {
                    top: 100%;
                }
                h3 {
                    font-size: 1.5rem;
                    margin: 0 0 1rem;
                    color: white;
                }
                p {
                    margin: 0;
                    color: rgba(255,255,255,0.8);
                    line-height: 1.6;
                }
            </style>
            <div class="content-card ${videoPositionClass}" data-category="${this._category}">
                <div class="thumbnail">
                    <video autoplay loop muted playsinline src="${this._videoSrc}"></video>
                </div>
                <h3>${this._title}</h3>
                <p>${this._description}</p>
            </div>
        `;
    }
}