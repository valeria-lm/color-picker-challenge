let inputColor = document.querySelector("#color");
let inputHex = document.querySelector("#hex");

inputColor.addEventListener("input", () => {
  let color = inputColor.value;
  inputHex.value = color;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelectorAll(".circle").forEach(circle => circle.style.backgroundColor = color);
});

//Button to copy the color code
let inputHexCode = document.getElementById("hex");
let btnCopyAnswer = document.getElementById("copyAnswer");
let spanCopyBlock = document.getElementById("copyBlock");
spanCopyBlock.addEventListener("click", function (e) {
  inputHexCode.select();
  let successful = document.execCommand("copy");

  if (successful) btnCopyAnswer.innerHTML = "Copied!";
  else btnCopyAnswer.innerHTML = "Error";
});
