document.querySelector("#btn-triangle").addEventListener("click", function () {
  const triangleBase = inputValue("#triangle-base");

  const triangleHeight = inputValue("#triangle-height");

  const triangleAria = 0.5 * triangleBase * triangleHeight;

  showCalculation(
    "Base",
    triangleBase,
    "Height",
    triangleHeight,
    "Area",
    triangleAria
  );
});
