export function shadowRootEval(root) {
  root.querySelectorAll("script").forEach((script) => {
    eval(script.innerHTML); // TODO Revise fix!
  });
}
