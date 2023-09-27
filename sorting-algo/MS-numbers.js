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
    
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
    // console.log(leftArr, rightArr)

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftAr, rightAr) {
    let temp = []
    while (leftAr.length && rightAr.length) {
        if (leftAr[0] <= rightAr[0]) {
            temp.push(leftAr.shift())
            // console.log(temp)
        } else {
            temp.push(rightAr.shift())
        }
    }
    return [...temp, ...rightAr, ...leftAr];
}


const unsortedArray = [8, 4, 5, 7, 2, 6, 3, 1];
console.log(mergeSort(unsortedArray));

// Time complexity: O(n log n);
// Space complexity: O(n);
