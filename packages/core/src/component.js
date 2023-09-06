// import { shadowRootEval } from "./shadowRootEval";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
