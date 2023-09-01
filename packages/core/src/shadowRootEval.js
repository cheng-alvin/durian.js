/**
 * @deprecated
 */

export function shadowRootEval($) {
  console.warn(
    "`shadowRootEval()` using the `<script>` is deprecated, support for `<script>` will be removed in the future!",
  );

  $.querySelectorAll("script").forEach((script) => {
    eval(script.innerHTML); // Potential fix? - Alvin <eventide1029@gmail.com>
  });
}
