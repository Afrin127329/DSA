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
    let isSwap;
    for (let i = 0; i < array.length; i++){
        isSwap = false;
        for (let j = 0; j < array.length - 1; j++){
            console.log(array, array[j], array[j + 1])
            let temp = array[j];
            if (array[j] < array[j + 1]) continue;
            if (array[j] > array[j + 1]) {
                // swaping to the right
                array[j] = array[j + 1];
                // swaping to the left
                array[j + 1] = temp;
                isSwap = true;
            }
        }
        if (!isSwap) break;

    }
    return array;
}

const unsortedArray = [8, 4, 5, 7, 2, 6, 3, 1];
console.log(numbersSort(unsortedArray));

// Time complexity: O(n2);
// Space complexity: O(n);


