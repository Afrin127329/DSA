/**
 * Problem: Given an array, calculate the sum of all the elements of an array
 * Soln: 
 * 1. Create a variable to save the current number
 * 2. Iterate over the array
 * 3. Ignore other elements which is not a number
 * 4. Add elements to the created variable
 * 5. Return the sum variable
 * 6. Demonstrate time and space complexity of the problem
 */

function sumOfArrayNumbers(array) {
    // Using for loop
    // let sum = 0;
    // for (let i = 0; i < array.length; i++){
    //     // Refactor by error checking
    //     if(typeof array[i] !== 'number') continue;
    //         sum += array[i];
    // }
    // return sum;

    // Recursion 1st Solution
    // if (array.length === 0) return 0;
    // let rest = array.splice(0, 1);
    // // console.log(rest[0])
    // let sum = sumOfArrayNumbers(array);
    // return rest[0] + sum;

    // Recursion 2nd Solution
    if (array.length === 0) return 0;
    let rest = array.slice(1);

    return array[0] + sumOfArrayNumbers(rest);
}

console.log(sumOfArrayNumbers([3, 5, 4, 3, 8]))

// Time complexity: O(n2)
// Space complexity: O(n)

// Refactored code with lowest time complexity

function sumOfArrayNumbers2(array) {
    return helperSum(array, 0);
}

function helperSum(arr, index) {
    if (arr.length === index) return 0;

    return arr[index] + helperSum(arr, index + 1);
}

console.log(sumOfArrayNumbers2([3, 5, 4, 3, 8]))

// Time complexity: O(n);
// Space complexity: O(n);