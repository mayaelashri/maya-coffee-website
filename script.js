function changeText() {
  document.getElementById("title").innerText = "Enjoy your coffee 🤎";
  document.getElementById("text").innerText = "Text changed successfully ";
}

function changeLayout() {
  let box = document.getElementById("boxes");

  if (box.style.flexDirection === "column") {
    box.style.flexDirection = "row";
  } else {
    box.style.flexDirection = "column";
  }
}
