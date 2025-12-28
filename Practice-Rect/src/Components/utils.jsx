export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

const comp = {
  divide,
  modulus,
  power,
};

export default comp;
