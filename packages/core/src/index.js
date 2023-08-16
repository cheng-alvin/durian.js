import { DurianComponent } from "./durianComponent.js";

export default function __durian__() {
  customElements.get("durian-component") ||
    customElements.define("durian-component", DurianComponent);
}
