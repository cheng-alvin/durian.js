import { DurianComponent } from "./durianComponent.js";

/**
 * Initializes the durian framework. If imported as a module,
 * otherwise, it will be initialized automatically when imported as a `<script>`.
 *
 * @author cheng-alvin
 *
 * @global Uses `__durianData__.executed` to check if the function has been executed already.
 * @note All durian.js data are stored under the `window.__durianData__` object namespace.
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
  if (window?.__durianData__?.executed || false) return;

  if (!bypassBrowserCheck) {
    if (typeof window?.__durianData__ !== "undefined")
      throw new Error(
        "Detected data conflict in the reserved `window.__durianData__` object is already in use! Please rename the object for durian to work properly, all durian data are stored under the `window.__durianData__` object.",
      );

    if (typeof window === "undefined")
      throw new Error(
        "Durian can only be used in a browser environment! Try using a bundler like `webpack` or`parcel`! We cannot find the `window` object present inside a browser's Javascript environment, make sure Javascript is allowed and enabled in your browser!",
      );

    if (!window.customElements)
      throw new Error(
        "Durian requires the `customElements` API to be present in the browser. Please download and link a polyfill package like `@webcomponents/custom-elements` or `@webcomponents/webcomponentsjs`!",
      );

    if (!window.ShadowRoot)
      throw new Error(
        "Durian requires the `ShadowRoot` API to be present in the browser. Please download and link a polyfill package like `@webcomponents/shadydom` or `@webcomponents/webcomponentsjs`!",
      );
  } else {
    console.warn(
      "Bypassing browser checks, could be problematic later on if not setup correctly!",
    );
  }

  customElements.define("durian-component", DurianComponent);
  window.__durianData__.executed = true;
}

__durian__();
