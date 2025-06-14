export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.props = {};
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Override in child components
  }
}