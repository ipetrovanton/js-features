// Функция с замыканием - возвращает другую функцию
function createCalFunction(n) {
  return function(m = 1) {
    console.log(1000 * n * m);
  };
}
const calc = createCalFunction(732);
// в calc лежит возващаемая функция из createcalFunction
calc(120);
calc();

function createIncrementor(n) {
  return function(num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addten = createIncrementor(10);
console.log(addOne(7));
console.log(addten(17));

/**
 * Функция генерирует ссылки
 * @param {*} domain
 */
function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = urlGenerator("com");
url = comUrl("google");
console.log(url);
url = comUrl("netflix");
console.log(url);

/// =================================>
// Пишем свою функцию bind

function logPerson() {
  console.log(`Name: ${this.name}, age: ${this.age}, job: ${this.job}`);
}

const person1 = {
  name: "Vasya",
  age: 25,
  job: "frontman"
};

const person2 = {
  name: "Luda",
  age: 38,
  job: "secretary"
};

function bind(context, fn) {
  return function(..._args) {
    fn.apply(context, _args);
  };
}

bind(person1, logPerson)();
bind(person, logPerson)();
