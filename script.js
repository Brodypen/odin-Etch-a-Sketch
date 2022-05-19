let color = "#000000";
let eraserToggler = false;
makeGrid(16);

const sizeSlider = document.querySelector(".sizePicker");
let size = document.querySelector(".sizePicker").value;
sizeSlider.onmousemove = (e) => changeSizeText()
function makeGrid(size) {
  etchGrid = document.getElementById("etchGrid");
  while (etchGrid.firstChild) {
    etchGrid.removeChild(etchGrid.lastChild);
  }
  etchGrid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
  etchGrid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
  block = document.createElement("div");
  block.classList.add("gridBlock", "gridBlockBorder");
  block.addEventListener('mousedown', changeBlock);
  for (let i = 0; i < size * size; i++) {
    etchGrid.appendChild(block.cloneNode(true));
  }
}
function changeBlock(e){

}
function rainbowToggle() {}
function darkenToggle() {}
function gridLinesToggle() {
  const collection = document.getElementsByClassName("gridBlock");
  console.log(collection);
  for (let i = 0; i < size * size; i++) {
    collection[i].classList.toggle("gridBlockBorder");
  }
}
function eraserToggle() {

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
function clearGrid() {}
