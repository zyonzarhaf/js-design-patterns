/*
==============================
MODULE PATTERN
==============================
*/
const myModule = (function () {
  //private stuff
  let name = 'john',
    age = 27;

  function setAge(value) {
    age = value;
  }

  //public stuff
  return {
    getName: function () {
      return name;
    },

    getAge: function () {
      return age;
    },

    haveBirthday: function () {
      age++; //the only way to mess with the age is through this public func
    },
  };
})();

console.log(myModule.getName());
console.log(myModule.getAge());
myModule.haveBirthday();
console.log(myModule.getAge());

//since the IIFE has already been executed
//deliberately changing object values to access private stuff will result in reference error:

/* myModule.haveBirthday = function(value){
        setAge(value);
    };
    myModule.haveBirthday(38);
    console.log(myModule.getAge()); */

/*

==============================
REVEALING MODULE PATTERN
==============================
*/
const myRevealingModule = (function () {
  //private stuff
  let name = 'winters',
    age = 65;

  function setAge(value) {
    age = value;
  }

  //public stuff
  function getName() {
    return name;
  }

  function getAge() {
    return age;
  }

  function haveBirthday() {
    age++;
  }

  return {
    getName,
    getAge,
    haveBirthday,
  }; //we just pass in the references
  //easier to expose different stuff without changing the body of the func
})();

console.log(myRevealingModule.getName());
console.log(myRevealingModule.getAge());
myRevealingModule.haveBirthday();
console.log(myRevealingModule.getAge());