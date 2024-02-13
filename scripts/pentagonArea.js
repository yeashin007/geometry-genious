document.querySelector("#btn-pentagon").addEventListener("click", function () {
  const base = inputValue("#pentagon-base");
  const height = inputValue("#pentagon-height");
  const area = 0.5 * base * height;

  showCalculation("Base", base, "Height", height, "Area", area);

  document.querySelector("#pentagon-container").style.backgroundColor =
    "rgba(200,102,220, .2)";
});
