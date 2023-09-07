/**
 * Problem: Given an array of numbers, find the index of the input
 * Soln: 
 * 1. iterate over array elements
 * 2. check if the array is empty or not
 * 3. if the value is found, return the index else return -1;
 */

function findValue(array, inputVal) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === inputVal) return i;
    }

    return -1;
}

console.log(findValue([4,3,6,3,7], 3))