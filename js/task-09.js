const refs = {
  body: document.querySelector("body"),
  hexColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

setBackgroundColor();

refs.button.addEventListener("click", setBackgroundColor);

function setBackgroundColor() {
  const hexValue = getRandomHexColor();
  refs.hexColor.textContent = hexValue;
  refs.body.setAttribute("style", `background-color: ${hexValue}`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
