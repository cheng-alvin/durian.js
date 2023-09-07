// import { shadowRootEval } from "./shadowRootEval";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends HTMLElement {
    connectedCallback() {
      // Solution? - Alvin
      const scriptElements = this.shadowRoot.querySelectorAll("script");

      scriptElements.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        this.shadowRoot.appendChild(newScript);
        script.remove();
      });
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
