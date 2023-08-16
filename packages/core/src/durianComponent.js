import { componentFactory } from "./component.js";
import __durian__ from "./index.js";

export class DurianComponent extends HTMLElement {
  async connectedCallback() {
    await this.sleep(10);
    this.style = "display: none;";
    const name = this.testComponentNaming(this.getAttribute("name"));
    const componentHTML = this.innerHTML;
    customElements.define(name, componentFactory(componentHTML));
  }

  testComponentNaming(name) {
    if (!name.includes("-"))
      throw new SyntaxError(
        `Component names must include a dash \`-\`! Try adding a dash to: \`${name}\`!`,
      );

    return name;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

__durian__();
