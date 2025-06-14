import { BaseComponent } from './base-component.js';
import {MainHero} from './main-hero.js';
import {PageHero} from './page-hero.js';
import {Navigation} from './navigation.js';

export class Header extends BaseComponent {
    constructor () {
        super();
        console.log('setting up hero and nav');
        // if (!customElements.get('musoci-hero')) customElements.define('musoci-hero', window.location.pathname == '/' || window.location.pathname == '/index.html' ? MainHero : PageHero);
        if (!customElements.get('musoci-hero')) customElements.define('musoci-hero', MainHero);
        if (!customElements.get('musoci-navigation')) customElements.define('musoci-navigation', Navigation);
        console.log(customElements.get('musoci-hero'))
    }

    render () {
        
        return this.shadowRoot.innerHTML = `
            <musoci-hero></musoci-hero>
            <musoci-navigation></musoci-navigation>
        `;
    }
}