/**
 * Problem: Sort an array of numbers using the Bubble Sort algorithm.
 * Soln: 
 * 1. Iterate over the array elements from the beginning.
 * 2. For each iteration, compare adjacent elements and swap them if they are in the wrong order.
 * 3. Continue iterating and swapping until no more swaps are needed in a pass.
 * 4. Repeat steps 1-3 for the required number of passes (equal to the length of the array).
 * 5. The array is sorted when no swaps are made in a pass.
 */

function bubbleSort(array) {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swaps were made in this pass, the array is already sorted
        if (!swapped) {
            break;
        }
    }
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(unsortedArray);
console.log(unsortedArray);

// Time complexity: O(n^2)
// Space complexity: O(1)
