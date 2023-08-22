export function componentFactory(innerHTML, useShadow) {
  return class Component extends HTMLElement {
onConnectedCallback(){
// TODO Add loading without `ShadowRoot` with the `DurianPrimitive` class
}

    constructor() {
      super();
	if(!useShadow) return; 
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = innerHTML;
    }
  };
}
