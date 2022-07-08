const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.Btns = refs.container.querySelectorAll("[data-action]");
  refs.value = refs.container.querySelector("#value");
  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.Btns[0].addEventListener("click", () => {
    this._refs.Btns[0].dataset.action === "decrement"
      ? this.decrement()
      : this.increment();
    this.updateValueUI();
  });

  this._refs.Btns[1].addEventListener("click", () => {
    this._refs.Btns[1].dataset.action === "increment"
      ? this.increment()
      : this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({ rootSelector: "#counter" });
