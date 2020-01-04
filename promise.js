// console.log("Request date...");

// // все круто, но получается слишком большая вложенность
// setTimeout(() => {
//   console.log("Preparing data...");

//   const backEndData = {
//     server: "DataServer",
//     port: 2000,
//     status: "working"
//   };

//   setTimeout(() => {
//     backEndData.modified = true;
//     console.log("Data recieved", backEndData);
//   }, 2000);
// });

// все тоже самое, но с промисами
/**
 * resolve - в случае успеха
 * reject - не успешное выполнение операции
 */
// const prom = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");

//     const backEndData = {
//       server: "DataServer",
//       port: 2000,
//       status: "working"
//     };
//     resolve(backEndData);
//   }, 2000);
// });

// prom.then(data => {
//   console.log("Promise resolved", data);
// });

// prom.then(data1 => {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data1.modified = false;
//       resolve(data1);
//       console.log(`Data recived ${data1}: `, data1);
//     }, 2000);
//   });
//   p2.then(clientData => {
//     clientData.modified = true;
//     console.log("Data recieved", clientData);
//   });
// });

// Другой вариант с return (чейним)
const myNewProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing date");
    const myData = {
      name: "Vasya",
      age: 30,
      status: "ok"
    };
    console.log(myData);
    resolve(myData);
  }, 1000);
});

myNewProm.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (data.status = "modified"), resolve(data);
      console.log(data);
    }, 1000);
  })
    .then(clientData => {
      clientData.newField = true;
      console.log(clientData);
      return clientData;
    })
    .then(data => {
      data.newField = "Чейним промисы";
      console.log(data);
    });
});

// обработка ошибок и finally
myNewProm.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (data.err = "Error"), reject(data);
    }, 3000);
  })
    .catch(err => console.error("Error: ", err))
    .finally(() => {
      console.log("Finelly!");
    });
});

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(2000).then(() => {
  console.log("After 2 sec");
});

// Принимает в себя все промисы и
// возвращает значение только после выполнения последнего
Promise.all([sleep(200), sleep(3000), sleep(5000)]).then(() => {
  console.log("Promise.all ended");
});
