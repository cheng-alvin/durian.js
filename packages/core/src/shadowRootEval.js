export function shadowRootEval($) {
  $.querySelectorAll("script").forEach((script) => {
    eval(script.innerHTML); // Potential fix? - Alvin <eventide1029@gmail.com>
  });
}
