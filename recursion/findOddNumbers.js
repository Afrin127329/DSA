/**
 * Problem: Given an array of numbers, find and return an array only with the odd numbers from the array with the help of recursion and helper function 
 * Soln: 
 * 1. Create helper function for iteration
 * 2. check if the array is empty or not
 * 3. create new array variable for saving the odd numbers
 * 4. Return the array
 * 5. check time complexity and performance of the function 
 */

function findOddNumbers(array) {
    const res = helperFunc(array);
    return res;
}

let oddNum = [];
const helperFunc = (arr) => {
    // console.log(arr)
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) {
        oddNum.push(arr[0]);
    }

    helperFunc(arr.slice(1));
    return oddNum;
}
const start = Date.now();
console.log(findOddNumbers([2, 4, 6, 66, 3, 34, 74, 345, 12, 23, 93, 75, 70, 61]))
const end = Date.now();

console.log(`Time elapsed for this function is ${end - start} ms`)

// Time complexity: O(n)
// Space complexity: O(n)
