document.querySelector("#btn-rectangle").addEventListener("click", function () {
  const length = inputValue("#rectangle-length");
  const width = inputValue("#rectangle-width");
  const area = (length * width).toFixed(2);

  showCalculation("Length", length, "Width", width, "Area", area);

  document.querySelector("#rectangle-container").style.backgroundColor =
    "rgba(0,255,0, .2)";
});
