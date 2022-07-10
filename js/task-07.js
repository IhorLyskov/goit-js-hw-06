const refs = {
  inputFontSize: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};

refs.textSpan.style.fontSize = refs.inputFontSize.value + "px";

refs.inputFontSize.addEventListener("input", onInputFontSize);

function onInputFontSize(event) {
  refs.textSpan.style.fontSize = refs.inputFontSize.value + "px";
}
