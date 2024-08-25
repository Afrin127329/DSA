const str = "racecar";
let reverseString = "";

function palindrome(string) {
  for (let i = 0; i <= string.length - 1; i++) {
    reverseString = string[i] + reverseString;
  }
  if (string.length !== reverseString.length) return false;
  if (string === reverseString) {
    return true;
  }
  return false;
}

console.log(palindrome(str));
