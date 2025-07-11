import { BaseComponent } from './base-component.js';
import { ShowcaseCard } from './showcase-card.js';
customElements.define('musoci-showcase-card', ShowcaseCard);
export class ContentShowcase extends BaseComponent {
    constructor() {
        super();
        this.showcaseData = [
            {
                title: 'Artist Showcases',
                description: 'Discover emerging artists and chart-toppers',
                videoSrc: './media/vid/artistshowcases.mov',
                category: 'music'
            },
            {
                title: 'Audiobooks',
                description: 'Listen to your favorite stories',
                videoSrc: './media/vid/Audiobooks.mp4',
                category: 'audio'
            },
            {
                title: 'Do It Yourself',
                description: 'Learn how to create, build and make cool and helpful things.',
                videoSrc: './media/vid/DoItYourself.mp4',
                category: 'instructional'
            },
            {
                title: 'Live Streaming',
                description: 'Stay tuned to see what\'s going on now!',
                videoSrc: './media/vid/Livestreaming.mp4',
                category: 'live'
            },
            {
                title: 'Movies',
                description: 'Immerse youself in an indepth story.',
                videoSrc: './media/vid/movies.mp4',
                category: 'movie'
            },
            {
                title: 'Podcast',
                description: 'Engage with interesting conversation.',
                videoSrc: './media/vid/Podcasts.MP4',
                category: 'audio'
            },
            {
                title: 'Original Series',
                description: 'Catch new and unseen content on this network first!',
                videoSrc: './media/vid/originalseries.mov',
                category: 'audio'
            },
            {
                title: 'New Music',
                description: 'Engage with interesting conversation.',
                videoSrc: './media/vid/musicplaylists.mp4',
                category: 'audio',
                videoPosition: 'top-100'
            },
            {
                title: 'Pay Per View',
                description: 'Watch exclusive content on demand and live.',
                videoSrc: './media/vid/payperview.mov',
                category: 'view'
            },
            // Add more showcase items here
        ];
    }

    render() {
        const duplicatedShowcaseData = [...this.showcaseData, ...this.showcaseData];
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    border-bottom: 1px solid #fff;
                    border-top: 1px solid #fff;
                }
                .carousel-container {
                    overflow: hidden;
                    padding: 0 1rem;
                    padding-bottom: 2rem;
                    width: 100%;
                    box-sizing: border-box;
                }
                .carousel-container > h2 {
                    font-size: clamp(2rem, 6vw, 2.5rem);
                    margin-bottom: 2rem;
                    color: white;
                    text-align: center;
                }
                .content-carousel {
                    display: grid;
                    gap: 2rem;
                    transition: transform 0.5s ease;
                    width: 100%;
                }

                @media (min-width: 768px) {
                    .content-carousel {
                        grid-auto-flow: column;
                        grid-auto-columns: calc((100% - 4rem) / 3);
                        animation: scrollLeft 30s linear infinite;
                    }
                    .carousel-container {
                        padding: 2rem;
                    }
                }

                @media (max-width: 767px) {
                    .carousel-container {
                        padding: 0;
                        max-width: 100vw;
                    }
                    .content-carousel {
                        grid-template-columns: 100%;
                        grid-auto-flow: column;
                        grid-auto-columns: 100%;
                        gap: 0;
                    }
                    musoci-showcase-card {
                        width: 90vw;
                        padding: 0 1rem;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                }

                @keyframes scrollLeft {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-200% - 4rem));
                    }
                }
            </style>
            <section class="content-showcase">
                <div class="carousel-container">
                    <h2>Explore Trending Content</h2>
                    <div class="content-carousel">
                        ${duplicatedShowcaseData.map(item => {
                            const videoPositionAttr = item.videoPosition ? `video-position="${item.videoPosition}"` : '';
                            return `<musoci-showcase-card
                                title="${item.title}"
                                description="${item.description}"
                                video-src="${item.videoSrc}"
                                category="${item.category}"
                                ${videoPositionAttr}>
                            </musoci-showcase-card>`;
                        }).join('')}
                    </div>
                </div>
            </section>
        `;

        this.setupCarousel();
    }

    setupCarousel() {
        const carousel = this.shadowRoot.querySelector('.content-carousel');
        const isMobile = window.innerWidth < 768;
        let currentIndex = 0;

        const scroll = () => {
            if (isMobile) {
                currentIndex = (currentIndex + 1) % this.showcaseData.length;
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            setTimeout(scroll, 3000);
        };

        window.addEventListener('resize', () => {
            const newIsMobile = window.innerWidth < 768;
            if (newIsMobile !== isMobile) {
                location.reload();
            }
        });

        if (isMobile) {
            setTimeout(scroll, 3000);
        } else {
            // Desktop: Setup seamless loop for CSS animation
            carousel.addEventListener('animationiteration', (event) => {
                if (event.animationName === 'scrollLeft') {
                    // Temporarily disable animation to reset position
                    carousel.style.animation = 'none';
                    requestAnimationFrame(() => {
                        carousel.style.transform = 'translateX(0)';
                        requestAnimationFrame(() => {
                            // Re-enable the animation
                            carousel.style.animation = 'scrollLeft 30s linear infinite';
                        });
                    });
                }
            });
        }
    }
}
customElements.define('musoci-showcase', ContentShowcase);
