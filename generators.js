function* numbergen(n = 100) {
  for (let i = 0; i <= n; i++) {
    yield console.log(i);
  }
}

const num = numbergen(17);

for (let k = 0; k <= 100; k++) {
  num.next();
}
