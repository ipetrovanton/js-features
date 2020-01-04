console.log("Hello");

const person = {
  age: 25,
  name: "Maxim",
  greet: function() {
    console.log("Hello, greet!");
  }
};

// создание объекта через наследование
const person1 = Object.create(person, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: "hello"
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() {
      return 10;
    },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  },
  // вот тут ж*па какая-то происходит - без геттера не фурычит
  m: {
    get: function() {
      console.log("Why do I work?!");
    }
  }
});

const myObject = {
  name: "myObject",
  greet: function() {
    console.log("HI!");
  },
  myMethod: function() {
    console.log("Hello from my Object");
  }
};

function myMethod() {
  console.log("Hello");
}
