/**
 * Problem: Given a string, count the characters from the string and return as a map
 * Soln: 
 * 1. Create an empty map to save the characters
 * 2. iterate over the string
 * 3. Have to be case sensitive and ignore other characters
 * 4. Replace spaces
 * 5. Push every character to the emplty map
 * 6. Return the map
 */

const str = 'Hello Everyone';

function charCount(string) {
    let charCountedList = {};
    for (let i = 0; i < string.length; i++){
        let char = string[i].toLowerCase();
        // console.log(charCountedList[char])
        if (!charCountedList[char]) {
            charCountedList[char] = 1;
        } else {
            charCountedList[char]++;
        }
    }
    return charCountedList;
}

const result = charCount(str);
console.log(result)
