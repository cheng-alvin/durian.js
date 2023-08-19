import { DurianComponent } from "./durianComponent.js";

/**
 * Initializes the durian framework. If imported as a module,
 * otherwise, it will be initialized automatically when imported as a `<script>`.
 *
 * @example
 * import __durian__ from "@durian/core";
 * __durian__();
 *
 * // or
 *
 * require("@durian/core")();
 *
 * @returns {void}
 */

export default function __durian__() {
  customElements.get("durian-component") ||
    customElements.define("durian-component", DurianComponent);
}
