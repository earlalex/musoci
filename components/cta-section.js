import { BaseComponent } from './base-component.js';

export class CTASection extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .cta-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 8rem 5%;
                    min-height: 600px;
                    background-image: url('../media/img/cta-section.jpg');
                    background-size: cover;
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
                <div id="video_holder"></div><script type="text/javascript" src="https://vod-lb-cdn.tvstartupengine.com/tvs-asset/library/clappr.min.js"></script><script type="text/javascript">var clapprPlayer = new Clappr.Player({"parentId": "#video_holder","source": "https://live-us-cdn-2.tvstartupengine.com/live/playlist-prod-48f34a03-64c1-4d53-a8b3-86e30b982038/index.m3u8","width": "1280","height": "720","autoPlay": true,"plugins": {"core": [], "playback": []}});</script>
            </section>
        `;
    }
}
