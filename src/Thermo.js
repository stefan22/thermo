var Thermo = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSaveMode = true;
  this.maxTemperature = 25;
};

Thermo.prototype.increaseTemperature = function() {
  return this.defaultTemperature + 1;
};

Thermo.prototype.decreaseTemperature = function() {
  return this.defaultTemperature - 1;
};

Thermo.prototype.powerSaveButton = function() {
  if (this.powerSaveMode == true) {
    this.maxTemperature = 25;
  } else if (this.powerSaveMode == false) {
    this.maxTemperature = 32;
  } else {
    this.powerSaveMode = true;
    this.maxTemperature = 25;
  }
};
