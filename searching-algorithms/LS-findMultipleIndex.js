/**
 * Problem: Given an array of numbers, find the indexes of the input
 * Soln: 
 * 1. iterate over array elements
 * 2. check if the array is empty or not
 * 3. create an array to save the indexes
 * 4. return -1 if the value is not found, else return the array of indexes
 */

function findMultipleIndex(array, inputVal) {
    let indexes = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === inputVal) {
            indexes.push(i);
        } 
    }
    
    if (indexes.length === 0) {
        return -1;
    } else {
        return indexes;
    }
}

console.log(findMultipleIndex([4, 3, 6, 3, 7, 3], 3))

// Time complexity: O(n)