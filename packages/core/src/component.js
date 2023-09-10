import { DurianPrimitive } from "./durianPrimitive";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends DurianPrimitive {
    main() {
      // TODO Change variable name `componentThis`
      const uuid = crypto.randomUUID();
      window.__durianData__.componentThis[uuid] = this.shadowRoot;

      // TODO Allow only for single loop:
      this.injectJs(
        "'use-strict'; if (typeof component === 'undefined') { const component = window.__durianData__.componentThis['${uuid}']; }",
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
