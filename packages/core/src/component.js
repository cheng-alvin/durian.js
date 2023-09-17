import { DurianPrimitive } from "./durianPrimitive";

export function componentFactory(innerHTML) {
  innerHTML = innerHTML.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

  return class Component extends DurianPrimitive {
    main() {
        this.style = "display: block;";

        const EXPOSURE_SCRIPT = `'use-strict'; const component = window.__durianData__.componentThis['${this.componentUUID}'];`;

        const jsWrapper = document.createElement("div");
	    this.shadowRoot.appendChild(jsWrapper)
        jsWrapper.setAttribute("class", "durian-js-wrapper");
        jsWrapper.setAttribute("id", this.componentUUID);
        jsWrapper.attachShadow({ mode: "open" });

        this.injectJs(EXPOSURE_SCRIPT, jsWrapper);

        const scripts = this.shadowRoot.querySelectorAll("script");
        scripts.forEach((script, index) => {
          if (script.classList.contains("durian-generated-script")) return;

          const newScript = document.createElement("script");
          [...script.attributes].forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });

          newScript.innerHTML = script.innerHTML;
          jsWrapper.appendChild(newScript);
          script.remove();

          if (index === scripts.length - 1 )
            this.removed.forEach((element) => {
              this.shadowRoot.appendChild(element)
            });
        });

    }

    injectJs(src, wrapper) {
      const script = document.createElement("script");
      script.innerText = src;
      script.setAttribute("class", "durian-generated-script");
      wrapper.appendChild(script);
    }

    constructor() {
      super();

      // TODO Change variable name `componentThis`
      this.componentUUID = crypto.randomUUID();
      window.__durianData__.componentThis[this.componentUUID] = this.shadowRoot;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;

      this.removed = [];
      this.shadowRoot.querySelectorAll("*").forEach((element) => {
        if (!element.tagName.includes("-")) return;

        this.removed.push(element);
        element.remove();
      });
    }
  };
}
