import { BaseComponent } from '../components/base-component.js';
import { SubscriptionCard } from '../components/subscription-card.js';

class SubscriptionsPage extends BaseComponent {
    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="/styles.css">
            <style>
                /* Keep page layout styles here */
                .main {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .cards {
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    justify-content: center; /* Center cards */
                }

                .cards_item {
                    display: flex; /* Already in host of subscription-card */
                    padding: 1rem; /* Already in host of subscription-card */
                    /* width: 100%; */ /* Let the card component manage its width or use media queries here */
                }

                /* Responsive adjustments for card items */
                @media (min-width: 40rem) { /* approx 640px */
                    .cards_item {
                        width: 50%;
                    }
                }

                @media (min-width: 56rem) { /* approx 896px */
                    .cards_item {
                        width: 33.3333%;
                    }
                }

                .main > h2 {
                    color: #fff; /* Assuming this is desired for page headings */
                    text-align: center;
                }

                hr {
                    margin: 24px auto;
                    width: 50px;
                    border-top: 2px solid var(--gradient); /* Assuming --gradient is globally defined or replaced */
                }

            </style>
            <section class="page">
                <h1>For Your Entertainment</h1>
                <div class="main">
                    <h2>Viewers</h2>
                    <ul class="cards">
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/free-pass.jpg"
                                imageAlt="MuSocÍ Free Discovery Pass"
                                price="Free"
                                title="MuSocÍ Free Discovery Pass"
                                text="Experience the MuSocÍ Free Discovery Pass - your intro gateway into the next generation of entertainment. Stream music, movies, & social energy like never before! Craving deeper access, exclusive drops, and real connection? When you're ready to experience an interactive world where fans do more than watch -- they engage. Unlocking more features with deeper access is just one upgrade away."
                            ></subscription-card>
                        </li>
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/musoci-member.jpg"
                                imageAlt="MuSocÍ Member"
                                price="<span>$</span>2.99 mo"
                                title="MuSocÍ Member"
                                text="MEMBERSHIP PASS TO THE FIRST FLOOR ...Unlock the first tier of exclusive content, and innovative entertainment. Interact with your favorite influencers on the Fandelirius channel. This enables you to send in video messages, questions, requests, and even vote your favorite creators into Prime Time! Your requests will be aired LIVE."
                            ></subscription-card>
                        </li>
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/eros-ladder.jpg"
                                imageAlt="Eros Ladder"
                                price="<span>$</span>3.99 mo"
                                title="Eros Ladder"
                                text="Subscribe to Eros Ladder, a bold, provocative channel dedicated to the Art of Erotic Entertainment. Subscribers gain exclusive access to a curated collection of steamy, edgy adult content - featuring seductive performances, provocative storytelling, and boundary-pushing visuals. Designed for those who crave something daring after dark, Eros Ladder invites viewers to climb into a world where sensuality takes center stage."
                            ></subscription-card>
                        </li>
                    </ul>
                    <h2>Creators</h2>
                    <ul class="cards">
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/playlister.jpg"
                                imageAlt="Playlister"
                                price="<span>$</span>29.99yr"
                                title="Playlister"
                                text="This is your launchpad to the screen! Submit unlimited music or videos, get rated by real fans, and climb the charts to unlock prime-time features. Track your rise with monthly analytics, earn streaming royalties, and broaden your audience with every play. Broadcast to Roku, Amazon Fire TV, and IOS, & affiliated networks.. This isn't just exposure - it's your pathway to real visibility, growth, & revenue."
                            ></subscription-card>
                        </li>
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/creators-club.jpg"
                                imageAlt="MuSocÍ Creator's Club"
                                price="<span>$</span>49.99 mo"
                                title="MuSocÍ Creator's Club"
                                text="Ready to take your content to the next level? You'll own your very own Video On Demand channel - streaming on Roku, Amazon Fire TV, & IPhone Mobile apps & affiliated networks worldwide. Monetize with pay-per-view, monthly subscriptions, livestream from social media, & earn royalties, - all with monthly analytics preview channel placement, & fan engagement tools. This isn't just streaming --it's creator - powered television!"
                            ></subscription-card>
                        </li>
                        <li class="cards_item">
                            <subscription-card
                                imageSrc="../media/img/eros-ladder-vip.png"
                                imageAlt="Eros Ladder VIP Creator Membership"
                                price="<span>$</span>9.99mo"
                                title="Eros Ladder VIP Creator Membership"
                                text="For the Visionaries, the Risk Takers, the erotic Icons in the Making. Welcome to the top tier of more creative freedom and exposure-Eros VIP. More than a membership, it's a launchpad for your sensual storytelling, & a path to real growth, visibility, and income. Unlimited content submissions, advance audience growth, detailed monthly analytics, content monetization & featured content slots. Broadcast reach on Roku, Amazon Fire TV, & IOS apps. Eros VIP memberships partake from a profit-sharing pool based on monthly subscribers."
                                note="Attention Erotic Entertainers!"
                            ></subscription-card>
                        </li>
                    </ul>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem 0;">
                    <h2>Pick Your Subscription</h2>
                    <a href="https://musocitvnetwork.tvspublishingservice.com/sign-up.html?channelId=6ee8f081-d92c-4680-b12c-96d9884e6b06" style="text-decoration: none;">
                        <button class="cta-button pulse">Sign Up Today</button>
                    </a>
                </div>
                <hr>
            </section>
            <section style="background-image: url('../media/img/fandelirius.jpg'); background-size: cover; padding:1rem;">
                <div style="background-color: rgba(0,0,0,0.6); padding: 1rem; color: #fff;">
                    <h2 style="text-align: center;">Fandelirius</h2>
                    <hr>
                    <p style="padding: 1rem; text-align: center;"><span><span>$</span>4.99</span> Your audience connection with FanDelirious, the ultimate engagement tool for creators. With this add-on, your fans can submit requests, questions, & personalized prompts—giving them a direct line to you and your content. Whether it's inspiration for your next scene or intimate Q&A moments, FanDelirious helps you build deeper bonds, boost loyalty, & grow a fiercely dedicated following.</p>
                </div>
            </section>
        `;
    }
}

customElements.define('subscriptions-page', SubscriptionsPage);
export { SubscriptionsPage };
