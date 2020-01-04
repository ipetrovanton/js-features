// результат функции будет выведен с задержкой после следующих вызовов
setTimeout(() => {
  console.log("Surprise!");
}, 0);
console.log("Start1");
console.log("Start2");

// Функция является браузерной и не входит в сецификацию JS
window.setTimeout(() => {
  console.log("Hello!");
}, 2000);

// http://latentflip.com
// здесь можно поиграться
