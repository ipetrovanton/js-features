const people = [
  { name: "Alex", age: 24, budget: 24000 },
  { name: "Max", age: 20, budget: 25000 },
  { name: "Alena", age: 30, budget: 23909 },
  { name: "Vasya", age: 40, budget: 23425 },
  { name: "Sweta", age: 27, budget: 57890 },
  { name: "Lucya", age: 23, budget: 89200 },
  { name: "Micha", age: 25, budget: 23098 },
  { name: "Jora", age: 28, budget: 89234 },
  { name: "Yura", age: 21, budget: 29383 },
  { name: "Gosha", age: 25, budget: 89000 }
];

// Foreach
people.forEach(element => {
  console.log(element);
});

for (let person of people) {
  console.log(person);
}

// Map
const newPeople = people.map(person => {
  return { age: person.age, name: person.name };
});
console.log(newPeople);

// Filter
const adults = people.filter(person => {
  if (person.age >= 25) {
    return true;
  }
});
const adultsShort = people.filter(person => person.age >= 25);
console.log(adults, adultsShort);

// Reduse
const amount = people.reduce((total, person) => {
  return total + person.budget;
}, 0);
const amountShort = people.reduce((total, person) => total + person.budget, 0);
const amountShort1 = people.reduce(
  (total, person) => total + person.budget,
  1000000
);
console.log(amount, amountShort, amountShort1);
// Find
const gosha = people.find(person => person.name === "Gosha");
console.log(gosha);

//FindIndex
const index = people.findIndex(person => person.name === "Gosha");
console.log(index);
