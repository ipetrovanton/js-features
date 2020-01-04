// Objects
const person = {
  name: "Vladimir",
  age: 30,
  job: "Worker"
};

const po = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting props ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target!`);
    }
  },
  has(target, prop) {
    return ["age", "name", "job"].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log(`Deleting... ${prop}`);
    delete target[prop];
  }
});

// Function
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log("Calling fn...");

    return target.apply(thisArg, args).toUpperCase();
  }
});

// Class
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log("construct...");
    return new target(...args);
  }
});

const p = new PersonProxy("Max", 25);
