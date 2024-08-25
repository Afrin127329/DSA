const number = 10;

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

for (let i = 0; i < number; i++) {
  console.log(fibonacci(i));
}
