const refs = {
  inputFontSize: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};

function setFontSize() {
  refs.textSpan.style.fontSize = refs.inputFontSize.value + "px";
}

setFontSize();

refs.inputFontSize.addEventListener("input", setFontSize);
