// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в `input` и нажимает кнопку `Создать`, после чего рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов очищается.

// ```html
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// ```

// Создай функцию `createBoxes(amount)`, которая принимает один параметр -число. Функция создает столько `<div>`, сколько указано в `amount` и добавляет их в `div#boxes`.

// 1. Размеры самого первого `<div>` - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в
//    формате HEX. Используй готовую функцию `getRandomHexColor` для получения цвета.

// Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем самым удаляя все созданные элементы.

const refs = {
  controls: document.querySelector("#controls"),
  // inputNumber: document.querySelector("#controls").firstChild,
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

// console.log(inputNumber, buttonCreate, buttonDestroy, divBoxes);
console.log(controls, buttonCreate, buttonDestroy, divBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
