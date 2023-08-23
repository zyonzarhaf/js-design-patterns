/* 
===============================
CONSTRUCTOR PATTERN
=============================== */
//factory function && prototypal inheritance
function createCar({ id, manufacturer, model, year, state, doors, color }) {
  const car = Object.create(createCar.prototype);
  Object.assign(car, { id, manufacturer, model, year, state, doors, color });

  return car;
}

createCar.prototype.drive = function () {
  console.log(`Driving the ${this.manufacturer} ${this.model}.`);
};

createCar.prototype.paint = function (newColor) {
  console.log(
    `Changing ${this.manufacturer} ${this.model} color to ${newColor}.`
  );
  this.color = newColor;
};

const beetleCar = createCar({
  id: 1,
  manufacturer: 'volkswagen',
  model: 'type 1',
  year: 1978,
  state: 'manufacturer new',
  doors: 2,
  color: 'black'
});

const newBeetleCar = createCar({
  id: 2,
  manufacturer: 'volkswagen',
  model: 'a5',
  year: 2019,
  state: 'used',
  doors: 4,
  color: 'yellow'
});

beetleCar.drive();

//constructor function
function Car({ id, manufacturer, model, year, state, doors, color }) {
  this.id = id;
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.state = state;
  this.doors = doors;
  this.color = color;
}

Car.prototype.drive = function () {
  console.log(`Driving the ${this.manufacturer} ${this.model}.`);
};

Car.prototype.paint = function (newColor) {
  console.log(
    `Changing ${this.manufacturer} ${this.model} color to ${newColor}.`
  );
  this.color = newColor;
};

const golfCar = new Car({
  id: 3,
  manufacturer: 'volkswagen',
  model: 'gti',
  year: 2003,
  state: 'used',
  doors: 2,
  color: 'white'
});

const escortCar = new Car({
  id: 4,
  manufacturer: 'ford',
  model: 'xr3',
  year: 1987,
  state: 'used',
  doors: 2,
  color: 'blue'
});

escortCar.paint('black');

//ES6 class syntax
class CarClass {
  constructor({ id, manufacturer, model, year, state, doors, color }) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.state = state;
    this.doors = doors;
    this.color = color;
  }

  drive() {
    console.log(`Driving the ${this.manufacturer} ${this.model}.`);
  }

  paint(newColor) {
    console.log(
      `Changing ${this.manufacturer} ${this.model} color to ${newColor}.`
    );
    this.color = newColor;
  }
}

const bmwCar = new CarClass({
  id: 5,
  manufacturer: 'bmw',
  model: '328i',
  year: 2003,
  state: 'used',
  doors: 2,
  color: 'white'
});

const audiCar = new CarClass({
  id: 6,
  manufacturer: 'audi',
  model: 'TT',
  year: 2015,
  state: 'used',
  doors: 2,
  color: 'grey'
});

audiCar.drive();
audiCar.paint('blue');

const cars = [beetleCar, newBeetleCar, golfCar, escortCar, bmwCar, audiCar];