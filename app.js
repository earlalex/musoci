import { BaseComponent } from './components/base-component.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Router } from './router.js';
import { HomePage } from './pages/home-page.js'; // Will be created from pages/index.js

// Placeholder Page Components (can be moved to their own files later)
class SubscriptionsPage extends BaseComponent {
    render() { this.shadowRoot.innerHTML = `
        <style>
        :root {
            --deep-blue: #2082C5;
            --magenta-purple: #A12B91;
            --black: #000000;
            --gradient: linear-gradient(135deg, var(--deep-blue) 0%, var(--magenta-purple) 100%);
        }
        body {
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #fff;
        }
        *,
        *::before,
        *::after {
        box-sizing: border-box;
        }

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
        }

        .cards_item {
        display: flex;
        padding: 1rem;
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
        background-color: var(--deep-blue);
        font-size: 18px;
        font-weight: 700;
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
        background-color: var(--magenta-purple);
        font-size: 12px;
        font-weight: 700;
        }

        @media (min-width: 40rem) {
        .cards_item {
            width: 50%;
        }
        }

        @media (min-width: 56rem) {
        .cards_item {
            width: 33.3333%;
        }
        }

        .main > h2 {
            color: #fff;
        }

        .card {
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        color: #000000;
        }

        .card_content {
        position: relative;
        padding: 16px 12px 32px 24px;
        margin: 16px 8px 8px 0;
        max-height: 290px;
        min-height: 350px;
        overflow-y: scroll;
        }

        .card_content::-webkit-scrollbar {
        width: 8px;
        }

        .card_content::-webkit-scrollbar-track {
        box-shadow: 0;
        border-radius: 0;
        }

        .card_content::-webkit-scrollbar-thumb {
        background-color: var(--black);
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
        background-color: var(--gradient);
        content: "";
        }

        hr {
        margin: 24px auto;
        width: 50px;
        border-top: 2px solid var(--gradient);
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
            <section class="page">
        <h1>For Your Entertainment</h1>
        <div class="main">
            <h2>Viewers</h2>
            <ul class="cards">
              <li class="cards_item">
                <div class="card">
                  <div class="card_image">
                    <img src="../media/img/free-pass.jpg" alt="MuSocÍ Free Discovery Pass" />
                    <span class="card_price">Free</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">MuSocÍ Free Discovery Pass</h2>
                    <div class="card_text">
                      <p>Experience the MuSocÍ Free Discovery Pass - your intro gateway into the next generation of entertainment.  Stream music, movies, & social energy like never before!  Craving deeper access, exclusive drops, and real connection? When you;re ready to experience an interactive world where fans do more than watch -- they engage.  Unlocking more features with deeper access is just one upgrade away.</p>
                    </div>
                  </div>
                </div>
              </li>
          
              <li class="cards_item">
                <div class="card">
                  <div class="card_image">
                    <img src="../media/img/musoci-member.jpg" alt="a Reuben sandwich on wax paper." />
                    <span class="card_price"><span>$</span>$2.99 mo</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">MuSocÍ Member</h2>
                    <div class="card_text">
                      <p>MEMBERSHIP PASS TO THE FIRST FLOOR ...Unlock the first tier of exclusive content, and innovative entertainment.  Interact with your favorite influencers on the Fandelirius channel.  This enables you to send in video messages, questions, requests, and even vote your favorite creators into Prime Time!  Your requests will be aired LIVE.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
          
              <li class="cards_item">
                <div class="card">
                  <div class="card_image">
                    <img src="../media/img/eros-ladder.jpg" alt="A side view of a plate of figs and berries." />
                    <span class="card_price"><span>$</span>3.99 mo</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">Eros Ladder</h2>
                    <div class="card_text">
                      <p>Subscribe to Eros Ladder, a bold, provocative channel dedicated to the Art of Erotic Entertainment. Subscribers gain exclusive access to a curated collection of steamy, edgy adult content - featuring seductive performances, provocative storytelling, and boundary-pushing visuals.  Designed for those who crave something daring after dark, Eros Ladder invites viewers to climb into a world where sensuality takes center stage.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <h2>Creators</h2>
            <ul class="cards">
            <li class="cards_item">
                <div class="card">
                <div class="card_image">
                    <img src="../media/img/playlister.jpg" alt="A side view of a plate of figs and berries." />
                    <span class="card_price"><span>$</span>29.99yr</span>
                </div>
                <div class="card_content">
                    <h2 class="card_title">Playlister</h2>
                    <div class="card_text">
                    <p>This is your launchpad to the screen!  Submit unlimited music or videos, get rated by real fans, and climb the charts to unlock prime-time features.  Track your rise with monthly analytics, earn streaming royalties, and broaden your audience with every play. Broadcast to Roku, Amazon Fire TV, and IOS, & affiliated networks..  This isn't just exposure - it's your pathway to real visibility, growth, & revenue.
                    </p>
                    </div>
                </div>
                </div>
            </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image">
                    <img src="../media/img/creators-club.jpg" alt="A side view of a plate of figs and berries." />
                    <span class="card_price"><span>$</span>49.99 mo</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">MuSocÍ Creator's Club</h2>
                    <div class="card_text">
                      <p>Ready to take your content to the next level?  You'll own your very own Video On Demand channel - streaming on Roku, Amazon Fire TV, & IPhone Mobile apps & affiliated networks worldwide.  Monetize with pay-per-view, monthly subscriptions, livestream from social media, & earn royalties, - all with monthly analytics preview channel placement, & fan engagement  tools. This isn't just streaming --it's creator - powered television!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
          
              <li class="cards_item">
                <div class="card">
                  <div class="card_image">
                    <span class="note">Attention Erotic Entertainers!</span>
                    <img src="../media/img/eros-ladder-vip.png" alt="A side view of a plate of figs and berries." />
                    <span class="card_price"><span>$</span>9.99mo</span>
                  </div>
                  <div class="card_content">
                    <h2 class="card_title">Eros Ladder VIP Creator Membership</h2>
                    <div class="card_text">
                      <p>For the Visionaries, the Risk Takers, the erotic Icons in the Making.  Welcome to the top tier of more creative freedom and exposure-Eros VIP.  More than a membership, it's a launchpad for your sensual storytelling, & a path to real growth, visibility, and income.  Unlimited content submissions, advance audience growth, detailed monthly analytics, content monetization & featured content slots.  Broadcast reach on Roku, Amazon Fire TV, & IOS apps. Eros VIP memberships partake from a profit-sharing pool based on monthly subscribers.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h2>Pick Your Subscription</h2>
            <a href="https://musocitvnetwork.tvspublishingservice.com/sign-up.html?channelId=6ee8f081-d92c-4680-b12c-96d9884e6b06">
              <button class="cta-button pulse">Sign Up Today</button>
            </a>
          </div>
          <hr>
    </section>
    <section style="background-image: url('../media/img/fandelirius.jpg');background-size: cover;padding:1rem;">
        <div style="background-color: rgba(0,0,0,0.6); padding: 1rem;">
            <h2>Fandelirius</h2>
            <hr>
            <p style="padding: 1rem;"><span><span>$</span>4.99</span> Your audience connection with FanDelirious, the ultimate engagement tool for creators.  With this add-on, your fans can submit requests, questions, & personalized prompts—giving them a direct line to you and your content.  Whether it's inspiration for your next scene or intimate Q&A moments, FanDelirious helps you build deeper bonds, boost loyalty, & grow a fiercely dedicated following.</p>
        </div>
    </section>
        `; }
}
customElements.define('subscriptions-page', SubscriptionsPage);

class SubmitContentPage extends BaseComponent {
    render() { this.shadowRoot.innerHTML = '<div style="padding:2rem; color:white; text-align:center;"><h1>Submit Content Page</h1><p>Submit your creative content through this portal.</p></div>'; }
}
customElements.define('submit-content-page', SubmitContentPage);

export class MusociApp extends BaseComponent {
    constructor() {
        super();

        // Define components essential for the app shell and routing
        if (!customElements.get('musoci-header')) customElements.define('musoci-header', Header);
        if (!customElements.get('musoci-footer')) customElements.define('musoci-footer', Footer);
        if (!customElements.get('home-page')) customElements.define('home-page', HomePage);
        // Placeholder pages are defined above

        this.routes = {
            'home': HomePage,
            'subscriptions': SubscriptionsPage,
            'submit-content': SubmitContentPage,
            // Define other routes here as you create more pages
        };
    }

    connectedCallback() {
        super.connectedCallback(); // Calls this.render()
        
        const routerOutlet = this.shadowRoot.querySelector('#router-outlet');
        if (routerOutlet) {
            this.router = new Router(this.routes, routerOutlet);
            this.router.navigateTo('home'); // Set the default route
        } else {
            console.error("MusociApp: #router-outlet not found in shadow DOM.");
        }

        // Listen for custom 'navigate' events dispatched by links
        this.shadowRoot.addEventListener('navigate', (event) => {
            const { routeName, params } = event.detail;
            if (this.router && routeName) {
                this.router.navigateTo(routeName, params);
            }
        });
    }

    render() {
        
        console.log('App Render Function')
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: flex; flex-direction: column; min-height: 100vh; }
                #router-outlet { flex-grow: 1; }
            </style>
            <musoci-header></musoci-header>
            <main id="router-outlet"><!-- Routed page content will appear here --></main>
            <musoci-footer></musoci-footer>
        `;
    }
}

customElements.define('musoci-app', MusociApp);