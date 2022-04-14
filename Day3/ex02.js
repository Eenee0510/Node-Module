function ftoc(c) {
  let f = 0;
  return (f = (5 / 9) * (c - 32));
}
function ctof(x) {
  let y = 0;
  return (y = (9 / 5) * x + 32);
}

console.log(ftoc(35));
console.log(ctof(35));
