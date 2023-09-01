/**
 * Problem: Given an array of strings, return a new array only with the unique elements, define it's time and space complexity
 * Soln: 
 * 1. Take a new variable as a new Array
 * 2. iterate over the array
 * 3. check condition with includes built in method
 * 4. Return the unique array
 */

const arrName = ['Sakib', 'Tasif', 'Roksana', 'Piya', 'Nishat', 'Tasif', 'Roksana'];

function findUniqueArrayElem(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++){
        // console.log(array[i]);
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]); 
        }
    }
    return uniqueArray;
}

const result = findUniqueArrayElem(arrName);
console.log(result);

/**
 * Time Complexity: O(n2);
 * Space Complexity: O(n);
 */