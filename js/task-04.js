const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  initialStep = 1,
} = {}) {
  this.counterValue = initialValue;
  this.step = initialStep;
  this.refs = this.getRefs(rootSelector);

  this.bindEvents();
  this.updateValue();
};

CounterPlugin.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.buttons = refs.container.querySelectorAll("[data-action]");
  refs.value = refs.container.querySelector("#value");
  return refs;
};

CounterPlugin.prototype.bindEvents = function () {
  this.refs.buttons[0].addEventListener("click", () => {
    this.refs.buttons[0].dataset.action === "decrement"
      ? this.decrement()
      : this.increment();
    this.updateValue();
  });

  this.refs.buttons[1].addEventListener("click", () => {
    this.refs.buttons[1].dataset.action === "increment"
      ? this.increment()
      : this.decrement();
    this.updateValue();
  });
};

CounterPlugin.prototype.updateValue = function () {
  this.refs.value.textContent = this.counterValue;
};

CounterPlugin.prototype.increment = function () {
  this.counterValue += this.step;
};

CounterPlugin.prototype.decrement = function () {
  this.counterValue -= this.step;
};

new CounterPlugin({ rootSelector: "#counter" });
