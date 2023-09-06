import { componentFactory } from "./component.js";
import { DurianPrimitive } from "./durianPrimitive.js";

export class DurianComponent extends DurianPrimitive {
  main() {
    const name = this.getAttribute("name");
    this.validateComponentAttributes();

    const componentHTML = this.innerHTML
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

    customElements.define(name, componentFactory(componentHTML));
  }

  constructor() {
    super();
    this.executed = false;
    const observer = new MutationObserver((mutations) => {
      if (this.executed) return;

      this.innerHTML = this.innerHTML
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
      this.executed = true;
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
}
