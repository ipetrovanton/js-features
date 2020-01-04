function hello() {
  // вместо this вернется сам объект
  console.log("Hello", this);
}

const person = {
  name: "Vlad",
  age: 44,
  // контекст вызова функции внутри объекта
  sayHello: hello,
  // метод bind изменяет контекст на Window
  sayHelloWindow: hello.bind(Window),
  logInfo: function(phone, job) {
    console.group(`${this.name} info:`);
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    console.log(`Phone is ${phone}`);
    console.log(`Job is ${job}`);
    console.groupEnd();
  }
};

const vasyan = {
  name: "Vasyan",
  age: 33
};

person.logInfo();
// с помощью bind меняется контекст
person.logInfo.bind(vasyan)();
// можно в bind передать параметры функции
person.logInfo.bind(vasyan, "+79202929292", "Jober")();

/* метод call получает в качестве параметра контекст и параметры 
с которыми вызывается метод.
Контекст обязателен к указанию */
person.logInfo.call(person, "+79292292929292", "worker");
person.logInfo.call(vasyan, "+79292292929292", "worker");
/**
 * метод apply делает тоже самое, только по другому принимает аргументы
 */
person.logInfo.apply(person, ["+7829389823", "rabotnichek"]);
person.logInfo.apply(vasyan, ["+7829389823", "rabotnichek"]);

/// ===================

/**
 * перебираем массив и перемножаем все его элементы на заданное число
 * Так делать не особо катит
 */
const array = [1, 2, 3, 4, 5];
function multArr(arr, n) {
  return arr.map(function(i) {
    return i * n;
  });
}
console.log(multArr(array, 10));

/**
 * Делаем по модному через прототипирование
 */
Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n;
  });
};
console.log(array.multBy(10));
