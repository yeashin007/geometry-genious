document.querySelector("#btn-ellipse").addEventListener("click", function () {
  const axis_1 = inputValue("#ellipseAxis-1");
  const axis_2 = inputValue("#ellipseAxis-2");
  const area = (Math.PI * axis_1 * axis_2).toFixed(2);

  showCalculation("Axis-1", axis_1, "Axis-2", axis_2, "Area", area);
});
