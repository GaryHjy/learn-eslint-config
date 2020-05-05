const a = 1;

// eslint-disable-next-line no-shadow
function test(a, b) {
  return a + b;
}

// eslint-disable-next-line no-console
console.log(a);

// eslint-disable-next-line no-console
console.log(test(1, 2));
