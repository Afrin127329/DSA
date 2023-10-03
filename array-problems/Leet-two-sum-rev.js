/**
 * Problem: Given an array and a targeted value, find the sum of two values from the array that matches the targeted value
 * Optimized Soln: 
 * 1. Firstly iterate over each element of the array
 * 2. create a remaning variable that is saved from target - elements from the first iteration
 * 2. create second iteration, and check if the remaining element matches with any element of second iteration, if matched, return the index of both iteration
 * 3. Else, break the loop and return false
 */

function twoSum(array, target) {
    for (let i = 0; i < array.length; i++){
        let remaining = target - array[i];
        for (let j = i + 1; j < array.length; j++){
            if(remaining === array[j]) return [i, j]
        }
    }
    return false;
}

console.log(twoSum([2, 3, 5, 6], 9))

// Time complexity: O(n2)
// Space complexity: o(1);