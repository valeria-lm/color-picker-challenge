let inputColor = document.querySelector("#color");
let inputHex = document.querySelector("#hex");

inputColor.addEventListener("input", () => {
  let color = inputColor.value;
  inputHex.value = color;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".circle:nth-child(1)").style.background = color;
  document.querySelector(".circle:nth-child(2)").style.background = color;
  document.querySelector(".circle:nth-child(3)").style.background = color;
  document.querySelector(".circle:nth-child(4)").style.background = color;
  document.querySelector(".circle:nth-child(5)").style.background = color;
  document.querySelector(".circle:nth-child(6)").style.background = color;
});
