function inputValue(id) {
  const input = document.querySelector(id);
  const value = Number(input.value);
  return value;
}

// Showing calculation
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

function showCalculation(para1, valu1, para2, value2, area, areaValue) {
  const select = document.querySelector("#showCalc");

  p1.textContent = `${para1}: ${valu1}`;
  p1.style.fontSize = "25px";

  p2.textContent = `${para2}: ${value2}`;
  p2.style.fontSize = "25px";

  p3.textContent = `${area}: ${areaValue}`;
  p3.style.fontSize = "25px";
  p3.style.fontWeight = "700";

  select.appendChild(p1);
  select.appendChild(p2);
  select.appendChild(p3);
}
