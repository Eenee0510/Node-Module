function isPrime(num) {
  let isPrime = "";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}

console.log(isPrime(10));
