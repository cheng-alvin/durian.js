import { DurianComponent } from "./durianComponent.js";
import { DurianProp } from "./durianProp.js";

/**
 * Initializes the durian framework. If imported as a module,
 * otherwise, it will be initialized automatically when imported as a `<script>`.
 *
 * @author cheng-alvin
 *
 * @param {boolean} [bypassBrowserCheck=false] - Bypasses the browser `window` checks.
 * @note Browser checks would always run when imported as a `<script>`.
 *
 * @example
 * import __durian__ from "@durian/core";
 * __durian__();
 *
 * // or
 *
 * require("@durian/core")();
 *
 * @example
 * // Without browser checks
 * import __durian__ from "@durian/core";
 * __durian__(true);
 *
 * // or
 *
 * require("@durian/core")(true);
 *
 * @returns {void}
 */

export default function __durian__(bypassBrowserCheck = false) {
  if (typeof window === "undefined")
    throw new Error(
      "Durian can only be used in a browser environment! Try using a bundler like `webpack` or`parcel`! We cannot find the `window` object present inside a browser's Javascript environment, make sure Javascript is allowed and enabled in your browser!",
    );

  if (window.durianExecuted) return;

  customElements.define("durian-component", DurianComponent);
  customElements.define("durian-prop", DurianProp);
  window.durianExecuted = true;
}

__durian__();
