let color = "#000000";
let tempColor = "#FFFFFF";
let rainbowToggler = false;
makeGrid(16);

const sizeSlider = document.querySelector(".sizePicker");
let size = document.querySelector(".sizePicker").value;
sizeSlider.onmousemove = (e) => changeSizeText();
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function makeGrid(size) {
  etchGrid = document.getElementById("etchGrid");
  while (etchGrid.firstChild) {
    etchGrid.removeChild(etchGrid.lastChild);
  }
  etchGrid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
  etchGrid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
  for (let i = 0; i < size * size; i++) {
    const block = document.createElement("div");
    block.classList.add("gridBlock", "gridBlockBorder");
    block.addEventListener("mouseover", changeBlock);
    block.addEventListener("mousedown", changeBlock);
    etchGrid.appendChild(block);
  }
}
function changeBlock(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (rainbowToggler) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
  } else {
    e.target.style.backgroundColor = color;
  }
}
function rainbowToggle() {
  rainbowToggler = !rainbowToggler;
}

function gridLinesToggle() {
  const collection = document.getElementsByClassName("gridBlock");
  console.log(collection);
  for (let i = 0; i < size * size; i++) {
    collection[i].classList.toggle("gridBlockBorder");
  }
}
function eraserToggle() {
  const temp = color;
  color = tempColor;
  tempColor = temp;
}
function changeSize() {
  size = document.querySelector(".sizePicker").value;
  makeGrid(size);
}
function changeSizeText() {
  const sizeDisplay = document.querySelector(".sizePicker").value;
  sizeText = document.querySelector(".sizePickerText");
  sizeText.innerHTML = "Size: " + sizeDisplay + "x" + sizeDisplay;
}
function clearGrid() {
  const collection = document.getElementsByClassName("gridBlock");
  console.log(collection);
  for (let i = 0; i < size * size; i++) {
    collection[i].style.backgroundColor = "#FFFFFF";
  }
}
function setColor() {
  const newColor = document.querySelector(".colorpicker").value;
  console.log(newColor);
  color = newColor;
}
