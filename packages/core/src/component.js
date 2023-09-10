import { DurianPrimitive } from "./durianPrimitive";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends DurianPrimitive {
    main() {
      // TODO Change variable name `componentThis`
      const uuid = crypto.randomUUID();
      window.__durianData__.componentThis[uuid] = this.shadowRoot;

      // TODO Encapsulate to file
      const EXPOSURE_SCRIPT = `'use-strict'; const component = window.__durianData__.componentThis['${uuid}'];`;

      // TODO Allow only for single loop:
      this.injectJs(EXPOSURE_SCRIPT);

      this.shadowRoot.querySelectorAll("script").forEach((script) => {
        if (script.classList.contains("durian-generated-script")) return;

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
      script.setAttribute("class", "durian-generated-script");
      this.shadowRoot.prepend(script);
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
