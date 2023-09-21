/**
 * Problem: Sort an array of numbers using the Merge Sort algorithm.
 * Soln:  
 * 1. Divide the array into two halves.
 * 2. Recursively apply Merge Sort to each half.
 * 3. Merge the sorted halves back together.
 * 4. Return the merged array.
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    // Recursively apply Merge Sort to each half
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    // Merge the sorted halves back together
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const unsortedArray = [8, 4, 5, 7, 2, 6, 3, 1];
console.log(mergeSort(unsortedArray));

// Time complexity: O(n log n);
// Space complexity: O(n);
