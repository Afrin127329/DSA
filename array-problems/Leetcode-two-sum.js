/**
 * Problem: Given an array and a targeted value, find the sum of two values from the array that matches the targeted value
 * Soln: 
 * 1. Firstly iterate over each element of the array
 * 2. then we need another iteration and check if the targeted value is matched or not, if matched, return the index of the two elements
 * 3. Else, break the loop and return false
 */

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target) return [i, j]
        }
    }
    return false;
}

console.log(twoSum([2, 3, 5, 6], 9))

// Time complexity: O(n2)
// Space complexity: o(1);