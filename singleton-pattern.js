/* 
==========================
SINGLETON PATTERN
==========================
*/
class Singleton {
  static instance;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.data = [];
    }
    return Singleton.instance;
  }

  addData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}

console.log(Singleton.instance);

const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.addData('michael');
instance2.addData('john');
console.log(instance1.getData());
console.log(instance2.getData());

console.log(instance1 === instance2); //instance1 and 2 are the same