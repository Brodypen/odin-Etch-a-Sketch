let color = "#000000";
makeGrid(16);
function makeGrid(size){
    etchGrid = document.getElementById("etchGrid");
    while(etchGrid.firstChild){
        etchGrid.removeChild(etchGrid.lastChild);
    }
    etchGrid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    etchGrid.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    block = document.createElement("div");
    block.classList.add('gridBlock');
    for(let i = 0; i < size * size; i++){
    etchGrid.appendChild(block.cloneNode(true));
    }
}

function rainbowToggle() {}
function darkenToggle() {}
function gridLinesToggle() {}
function eraserToggle(){

}
function changeSize() {
  const size = document.querySelector(".sizePicker").value;
  makeGrid(size);
}
function changeSizeText() {
  const size = document.querySelector(".sizePicker").value;
  sizeText = document.querySelector(".sizePickerText");
  sizeText.innerHTML = "Size: " + size + "x" + size;
}
function clearGrid() {}
