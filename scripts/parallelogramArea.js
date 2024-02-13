document
  .querySelector("#btn-parallelogram")
  .addEventListener("click", function () {
    const base = inputValue("#parallelogram-base");
    const height = inputValue("#parallelogram-height");
    const area = base * height;

    showCalculation("Base", base, "Height", height, "Area", area);
  });
