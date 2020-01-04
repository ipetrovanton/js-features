const delay = ms => {
  return new Promise(r =>
    setTimeout(() => {
      r(), console.log("Time delay is ", ms);
    }, ms)
  );
};

delay(2000).then(() => console.log("2 sec"));

// https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/todos";

function fetchTodos() {
  console.log("Fetch todos started...");
  return delay(2000)
    .then(() => {
      return fetch(url);
    })
    .then(response => response.json());
}

fetchTodos()
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));

async function fetchTodosAsync() {
  try {
    await delay(5000);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Goodbuy!");
  }
}

fetchTodosAsync();
