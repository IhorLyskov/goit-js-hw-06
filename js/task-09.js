// Напиши скрипт, который изменяет цвета фона элемента `<body>` через инлайн стиль при клике на `button.change-color` и выводит значение цвета в `span.color`.

// ```html
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// ```

// Для генерации случайного цвета используй функцию `getRandomHexColor`.
//
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
  let hex6digits = Math.floor(Math.random() * 16777215).toString(16);
  while (hex6digits.length < 6) {
    hex6digits = "0" + hex6digits;
  }
  return "#" + hex6digits;
}
