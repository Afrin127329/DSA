/**
 * Problem: Sort an array of numbers using the Selection Sort algorithm.
 * Soln:  
 * 1. Iterate over the array elements from the beginning.
 * 2. For each iteration, take a lowest variable as the first index
 * 3. On the second loop, compare if the lowest is less than each element from the second iteration, and if it's true, make that element as the lowest one
 * 4. Now that we have the lowest, we need to swap it by creating a temporary variable
 * 5. To reduce the iteration numbers, check if the first iteration element index is not equal to the lowest one
 * 6. Finally return the array
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function numbersSort(array) {
    for (let i = 0; i < array.length; i++){
        let lowest = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
        // console.log(array, i, lowest);
        let temp = array[i];
        if (temp > array[lowest]) {
            array[i] = array[lowest];
            array[lowest] = temp;
        }
        }
    }
    return array;
}

const unsortedArray = [8, 4, 5, 7, 2, 6, 3, 1];
console.log(numbersSort(unsortedArray));

// Time complexity: O(n2);
// Space complexity: O(n);


