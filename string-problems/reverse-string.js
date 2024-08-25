const str = "Hello";
let reverseStr = "";

function reverseString(string) {
  for (let i = 0; i <= string.length - 1; i++) {
    reverseStr = string[i] + reverseStr;
  }
}

console.log(reverseString(str));
