export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends HTMLElement {
    connectedCallback() {
      // Solution? - Alvin
      this.shadowRoot.querySelectorAll("script").forEach((script) => {
        const newScript = document.createElement("script");
        [...script.attributes].forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        newScript.innerHTML = script.innerHTML;
        script.parentNode.replaceChild(newScript, script);
      });
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
