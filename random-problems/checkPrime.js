const num = 13;

function checkPrime(n) {
  if (n === 0 || n === 1) return false;

  if (n === 2) return true;
  for (let i = 2; i <= n / 2; i++) {
    console.log(i);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPrime(num));
