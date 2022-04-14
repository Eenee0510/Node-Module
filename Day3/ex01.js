function max(x, y, z) {
  let mx = 0;
  if (x > y && x > z) {
    return (mx = x);
  } else if (y > x && y > z) {
    return (mx = y);
  } else if (z > x && z > y) {
    return (mx = z);
  }
}
console.log(max(2, 3, 4));
console.log(max(2, 3, 2));
console.log(max(2, 2, 2));
console.log(max(-1, -2, -2));
