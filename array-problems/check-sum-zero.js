/** 
 * Problem: Given an array, as an input, find the pair whose sum is Zero
 * Soln: 
 * 1. iterate over the array
 * 2. condition checking
 * 3. Return the pair
 * 
 * Time complexity: o(n2)
 */

const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function sumZeroPair(arr) {
    // Outer Loop
    for (let number of arr) {
        // Inner Loop
        for (let j = 1; j < arr.length; j++){
            if (number + arr[j] === 0) {
                return [number, arr[j]];
            }
        }
    }
}

const result = sumZeroPair(array);
console.log(result);