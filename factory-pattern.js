/* 
===============================
FACTORY PATTERN
===============================
*/
//factory functions && prototypal inheritance
function createPerson({ name, age, occupation }) {
  const person = Object.create(createPerson.prototype);
  Object.assign(person, { name, age, occupation });

  return person;
}

createPerson.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
};

function createskyScraper({ height, floors, location }) {
  return {
    height,
    floors,
    location
  };
}

function createHouse({ area, rooms, windows, location }) {
  return {
    area,
    rooms,
    windows,
    location
  };
}

function createFactory() {
  return {
    create: function (options) {
      const categories = {
        person: createPerson,
        house: createHouse,
        skyScraper: createskyScraper
      };

      let category = categories[options.category];

      return category(options);
    },
  };
}

const factory = createFactory();

const williamPerson = factory.create({
  category: 'person',
  name: 'william',
  age: 27,
  occupation: 'developer'
});

const beachHouseHouse = factory.create({
  category: 'house',
  area: 350,
  rooms: 6,
  windows: 10,
  location: 'marry jane st, 357'
});

const oneTower = factory.create({
  category: 'skyScraper',
  height: 290,
  floors: 77,
  location: 'Av. Atlântica, Barra Sul, 4950 - Centro, Balneário Camboriú - SC'
});

williamPerson.introduce(); // Hi, my name is william, and I'm 27 years old

//constructor functions
function Person({ name, age, occupation }) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}, and I'm ${this.age} years old.`);
};

function House({ area, rooms, windows, location }) {
  this.area = area;
  this.rooms = rooms;
  this.windows = windows;
  this.location = location;
}

function skyScraper({ height, floors, location }) {
  this.height = height;
  this.floors = floors;
  this.location = location;
}

function Factory() {
  this.create = function (options) {
    const categories = {
      person: Person,
      house: House,
      skyScraper: skyScraper
    };

    let category = categories[options.category];

    return new category(options);
  };
}

const factoryInstance = new Factory();

const isaacPerson = factoryInstance.create({
  category: 'person',
  name: 'isaac',
  age: 17,
  occupation: 'designer'
});

const lakeHouseHouse = factoryInstance.create({
  category: 'house',
  area: 500,
  rooms: 6,
  windows: 12,
  location: 'kurt cobain avenue, 3042'
});

const shanghaiTower = factoryInstance.create({
  category: 'skyScraper',
  height: 632,
  floors: 128,
  location:
    '501 Yincheng Rd (M), Lujiazui, Pu Dong Xin Qu, Shang Hai Shi, China'
});

isaacPerson.introduce(); // Hi, my name is isaac, and I'm 17 years old

//ES6 class syntax
class PersonClass {
  constructor({ name, age, occupation }) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, and I'm ${this.age} years old.`);
  }
}

class HouseClass {
  constructor({ area, rooms, windows, location }) {
    this.area = area;
    this.rooms = rooms;
    this.windows = windows;
    this.location = location;
  }
}

class skyScraperClass {
  constructor({ height, floors, location }) {
    this.height = height;
    this.floors = floors;
    this.location = location;
  }
}

class FactoryClass {
  create(options) {
    const categories = {
      person: PersonClass,
      house: HouseClass,
      skyScraper: skyScraperClass
    };

    let category = categories[options.category];

    return new category(options);
  }
}

const factoryClassInstance = new FactoryClass();

const douglasPerson = factoryClassInstance.create({
  category: 'person',
  name: 'douglas',
  age: 22,
  occupation: 'software engineer'
});

const familyHouse = factoryClassInstance.create({
  category: 'house',
  area: 350,
  rooms: 5,
  windows: 10,
  location: 'superman avenue, 882'
});

const altinoArantes = factoryClassInstance.create({
  category: 'skyScraper',
  height: 161,
  floors: 35,
  location: 'Rua João Brícola, 24 - Centro, São Paulo - SP, 01014-900'
});

douglasPerson.introduce(); // Hi, my name is douglas, and I'm 22 years old