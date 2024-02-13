document.querySelector("#btn-rhombus").addEventListener("click", function () {
  const diagonal_1 = inputValue("#rhombus-diagonal-1");
  const diagonal_2 = inputValue("#rhombus-diagonal-2");
  const area = 0.5 * diagonal_1 * diagonal_2;

  showCalculation(
    "Diagonal-1",
    diagonal_1,
    "Diagonal-2",
    diagonal_2,
    "Area",
    area
  );

  document.querySelector("#rhombus-container").style.backgroundColor =
    "rgba(0,0,255, .2)";
});
