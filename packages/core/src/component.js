import { DurianPrimitive } from "./durianPrimitive";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends DurianPrimitive {
    main() {
      const uuid = crypto.randomUUID();
      window.__durianData__.componentThis[uuid] = this.shadowRoot;

      this.injectJs(
        `const component = window.__durianData__.componentThis["${uuid}"];`,
      );

      this.shadowRoot.querySelectorAll("script").forEach((script) => {
        const newScript = document.createElement("script");
        [...script.attributes].forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        newScript.innerHTML = script.innerHTML;
        script.parentNode.replaceChild(newScript, script);
      });
    }

    injectJs(src) {
      const script = document.createElement("script");
      script.innerText = src;
      this.shadowRoot.appendChild(script);
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
