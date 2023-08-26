export function componentFactory(innerHTML) {
  return class Component extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML; // TODO Fix js not running as committed in 58c9038
    }
  };
}
