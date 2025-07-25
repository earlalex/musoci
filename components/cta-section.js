import { BaseComponent } from './base-component.js';

export class CTASection extends BaseComponent {
    constructor() {
        super();
        this.player = null;
    }

    connectedCallback() {
        this.render();
        this.loadPlayerScript();
    }

    disconnectedCallback() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }

    loadPlayerScript() {
        // Check if Clappr is already loaded to prevent re-loading the script
        if (window.Clappr) {
            this.initPlayer();
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://vod-lb-cdn.tvstartupengine.com/tvs-asset/library/clappr.min.js';
        script.onload = () => this.initPlayer();
        script.onerror = () => console.error('Failed to load the Clappr player script.');
        document.head.appendChild(script);
    }

    initPlayer() {
        const videoHolder = this.shadowRoot.querySelector('#video_holder');
        if (videoHolder && typeof Clappr !== 'undefined' && !this.player) {
            this.player = new Clappr.Player({
                parent: videoHolder,
                source: "https://live-us-cdn-2.tvstartupengine.com/live/playlist-prod-48f34a03-64c1-4d53-a8b3-86e30b982038/index.m3u8",
                autoPlay: true,
                mute: true,
                controls: true,
            });
            this.player.on(Clappr.Events.PLAYER_READY, () => {
                // After the player is ready, check if it's paused.
                // The `autoPlay` might have been blocked by the browser.
                if (this.player.is(Clappr.State.PAUSED)) {
                    // If it's paused, attempt a "ghost click" on the container
                    // to trigger play. Clappr often attaches a play/pause
                    // handler to its main container.
                    videoHolder.click();
                }
            });
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --deep-blue: #2082c5;
                    --magenta-purple: #a12b91;
                    --black: #000000;
                    --gradient: linear-gradient(
                        135deg,
                        var(--deep-blue) 0%,
                        var(--magenta-purple) 100%
                    );
                    border-bottom: 1px solid #fff;
                    border-top: 1px solid #fff;
                }
                .cta-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 8rem 5%;
                    min-height: 600px;
                    background-color: var(--gradient);
                    background-size: cover;
                }
                #video_holder {
                    width: 100%;
                    max-width: 1280px;
                    position: relative;
                    /* 16:9 aspect ratio (720 / 1280 = 0.5625) */
                    padding-top: 56.25%;
                }
                #video_holder > div { /* Target Clappr's container */
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100% !important; /* Override inline styles from player */
                    height: 100% !important;
                }
                .cta-section span {
                    background: rgba(0, 0, 0, 0.8);
                    padding: 2rem;
                }
            </style>
            <section class="cta-section" id="join">
                <h1>
                    Live Preview
                </h1>
                <div id="video_holder"></div>
            </section>
        `;
    }
}
customElements.define('musoci-cta', CTASection);
