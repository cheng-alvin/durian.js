export function componentFactory(innerHTML) {
  class DurianComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = innerHTML;
    }
  }
  return DurianComponent;
}
