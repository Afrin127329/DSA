/**
 * Problem: Given a sorted array of numbers, find the index of a target value.
 * Soln: 
 * 1. Initialize left and right pointers to the start and end of the array.
 * 2. While left pointer is less than or equal to right pointer:
 *    a. Calculate the middle index as (left + right) / 2.
 *    b. If the middle element is equal to the target value, return the middle index.
 *    c. If the middle element is less than the target value, update left pointer to middle + 1.
 *    d. If the middle element is greater than the target value, update right pointer to middle - 1.
 * 3. If the target value is not found, return -1.
 */

function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (sortedArray[middle] === target) {
            return middle;
        } else if (sortedArray[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));

// Time complexity: O(log n)
// Space complexity: O(1)
