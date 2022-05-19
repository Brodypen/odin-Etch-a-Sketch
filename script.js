let color = "#000000";
function rainbowToggle() {}
function darkenToggle() {}
function gridLinesToggle() {}
function eraserToggle(){

}
function changeSize() {
  const size = document.querySelector(".sizePicker").value;
  console.log(size);
}
function changeSizeText() {
  const size = document.querySelector(".sizePicker").value;
  sizeText = document.querySelector(".sizePickerText");
  sizeText.innerHTML = "Size: " + size + "x" + size;
}
function clearGrid() {}
