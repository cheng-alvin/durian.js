export function componentFactory(innerHTML) {
  return class Component extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
      this.shadowRoot.querySelectorAll("script").forEach((script) => {
        {
          (function () {
            eval(script.innerHTML); // TODO Revise fix!
          })();
        }
      });
    }
  };
}
