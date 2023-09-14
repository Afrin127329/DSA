/**
 * Problem: Sort an array of numbers using the Bubble Sort algorithm.
 * Soln:  
 * 1. Iterate over the array elements from the beginning.
 * 2. For each iteration, compare adjacent elements and swap them if they are in the wrong order.
 * 3. Continue iterating and swapping until no more swaps are needed in a pass.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function numbersSort(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            let temp = array[j];
            console.log(array, array[j], array[j + 1])
            if (array[j] > array[j + 1]) {
                // swaping to the right
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(numbersSort(unsortedArray));

// Time complexity: O(n2);
// Space complexity: O(n);


