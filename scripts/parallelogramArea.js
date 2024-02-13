document
  .querySelector("#btn-parallelogram")
  .addEventListener("click", function () {
    const base = inputValue("#parallelogram-base");
    const height = inputValue("#parallelogram-height");
    const area = (base * height).toFixed(2);

    showCalculation("Base", base, "Height", height, "Area", area);

    document.querySelector("#parallelogram-container").style.backgroundColor =
      "rgba(255,85, 150, .2)";
  });
