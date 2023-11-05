/**
 * Problem: Sort an array of numbers using the Insertion Sort algorithm.
 * Soln:  
 * 1. Need two loops, first one will start from 1 index, second one will start from the first loop, but with decrementation
 * 2. compare if the element from the first one loop, is greater than the element from the second iteration, then make the swap
 * 3. Finally return the array
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function numbersSort(array) {
    for (let i = 1; i < array.length; i++){
        for (let j = i; j > 0; j--){
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

const unsortedArray = [8, 4, 5, 7, 2, 6, 3, 1];
console.log(numbersSort(unsortedArray));

// Time complexity: O(n2);
// Space complexity: O(n);


