const initWidth = 30;
const initHeight = 30;
const step = 10;

const refs = {
  controls: document.querySelector("#controls"),
  inputNumber: controls.children[0],
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const countBoxes = Number(refs.inputNumber.value);
  if (countBoxes > 0) {
    let textBoxes = "";
    for (let i = 0; i < countBoxes; i += 1) {
      textBoxes += `<div style="background-color: ${getRandomHexColor()}; 
        width:${i * step + initWidth}px; 
        height:${i * step + initHeight}px;"></div>`;
    }
    refs.divBoxes.innerHTML = textBoxes;
    refs.divBoxes.setAttribute("style", "display: flex; margin-top: 10px");
  }
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.divBoxes.removeAttribute("style");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
