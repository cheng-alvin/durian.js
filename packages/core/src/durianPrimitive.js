export class DurianPrimitive extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await this.sleep(10);
    this.style = "display: none;";
    this?.main();
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
