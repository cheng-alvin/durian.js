import { componentFactory } from "./component.js";
import { DurianPrimitive } from "./durianPrimitive.js";

export class DurianComponent extends DurianPrimitive {
  main() {
    const name = this.getAttribute("name");
    this.validateComponentAttributes();
    const componentHTML = this.innerHTML + this.removedScripts;
    customElements.define(name, componentFactory(componentHTML));
  }

  constructor() {
    super();
    this.removedScripts = "";
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          this.sanitizeContent(mutation.addedNodes);
        }
      });
    });

    observer.observe(this, { childList: true, subtree: true });
  }

  validateComponentAttributes() {
    const name = this.getAttribute("name");

    if (!name) {
      throw new Error(
        "The `name` attribute is required in ALL durian components! Try finding a name-less component in your html!",
      );
    }

    if (!name.includes("-")) {
      throw new SyntaxError(
        `Component names must include a dash \`-\`! Try adding a dash to: \`${name}\`!`,
      );
    }
  }

  // TODO remove temporary polyfill
  // ------------------------------
  sanitizeContent(nodes) {
    nodes.forEach((node) => {
      if (node.nodeName === "SCRIPT") {
        this.removedScripts = this.removedScripts.concat(node.outerHTML);
        node.remove(); // Remove <script> tags
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        this.sanitizeContent(node.childNodes);
      }
    });
  }
  // ------------------------------
}
