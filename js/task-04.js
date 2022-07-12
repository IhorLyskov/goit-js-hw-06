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
  refs.buttonDecrement = refs.container.querySelector(
    '[data-action="decrement"]'
  );
  refs.buttonIncrement = refs.container.querySelector(
    '[data-action="increment"]'
  );
  refs.value = refs.container.querySelector("#value");
  return refs;
};

CounterPlugin.prototype.bindEvents = function () {
  this.refs.buttonDecrement.addEventListener("click", () => {
    this.decrement();
    this.updateValue();
  });

  this.refs.buttonIncrement.addEventListener("click", () => {
    this.increment();
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
