import { componentFactory } from "./component.js";
import { DurianPrimitive } from "./durianPrimitive.js";
import __durian__ from "./index.js";

export class DurianComponent extends DurianPrimitive {
  main() {
    const name = this.getAttribute("name");
    this.validateComponentAttributes();

    const componentHTML = this.innerHTML;
    customElements.define(name, componentFactory(componentHTML));
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

__durian__();
