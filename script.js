let color = "#000000";
makeGrid(16);
function makeGrid(size){
    etchGrid = document.getElementById("etchGrid");
    block = document.createElement("div");
    block.classList.add('gridBlock');
    for(let i = 0; i < size * size; i++){
    etchGrid.appendChild(block);
    }
}

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
