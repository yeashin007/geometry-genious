document.querySelector("#btn-triangle").addEventListener("click", function () {
  const base = inputValue("#triangle-base");
  const height = inputValue("#triangle-height");
  const area = (0.5 * base * height).toFixed(2);

  showCalculation("Base", base, "Height", height, "Area", area);
  document.querySelector("#tiangle-container").style.backgroundColor =
    "rgba(255,0,0, .2)";
});
