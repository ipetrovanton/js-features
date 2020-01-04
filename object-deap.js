const person = Object.create(
  {},
  {
    name: {
      value: "Vasya"
    },
    age: {
      value: 29
    }
  }
);

console.log(person);

// Цикл не работает, так как поля инкапсулированы
for (let key in person) {
  console.log("Key:", key);
}

const person1 = Object.create(
  {},
  {
    name: {
      value: "vasyan",
      enumerable: true, // доступ в цикле
      writable: true, // изменение поля
      configurable: true // удаление
    },
    birthOfYear: {
      value: 1993
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthOfYear;
      },
      set(value) {
        console.log("New age:", value);
      }
    }
  }
);

for (let key in person1) {
  console.log("Key: ", key, " Value: ", person1[key]);
}

// меняем цвет
const style = Object.create(
  // первый аргумент принимает прототип
  { color: (document.body.style.background = "green") },
  {
    color: {
      set(value) {
        document.body.style.background = value;
      }
    }
  }
);
