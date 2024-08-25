const str1 = "heart";
const str2 = "earth";
let anagramCheck = false;

function anagram(string1, string2) {
  if (string1.length !== string2.length) return anagramCheck;

  // Native Method for converting string to array
  // for (let i = 0; i < string1.length; i++) {
  //   str1Array.push(string1[i]);
  // }
  // for (let i = 0; i < string2.length; i++) {
  //   str2Array.push(string2[i]);
  // }
  let str1Array = Array.from(string1).sort();
  let str2Array = Array.from(string2).sort();
  for (let i = 0; i < str1Array.length; i++) {
    // console.log(str1Array[i]);
    // console.log(str2Array[i]);
    if (str1Array[i] === str2Array[i]) {
      anagramCheck = true;
    } else {
      anagramCheck = false;
    }
  }
  return anagramCheck;
}

console.log(anagram(str1, str2));
