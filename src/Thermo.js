var Thermo = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
};

Thermo.prototype.increaseTemperature = function() {
  return this.defaultTemperature + 1;
};

Thermo.prototype.decreaseTemperature = function() {
  return this.defaultTemperature - 1;
};