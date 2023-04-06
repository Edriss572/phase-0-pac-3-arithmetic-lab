function add(a,b) {
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function increment(a) {
  return a += 1;
}

function decrement(a) {
  return a -= 1;
}

function makeInt(f) {
  let n = parseInt(f,10);
  return n;
}

function preserveDecimal(i) {
  let n = parseFloat(i);
  return n;
}