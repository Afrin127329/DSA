/**
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 * Problem: Optimized solution of checkMultiplication problem
 */

/** function checkMultiplication(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for(i = 0; i < arr1.length; i++) {
        // console.log(arr1[i])
        // 1st example of condition
        if (!arr2.includes(arr1[i] ** 2)) {
            return false;
        }

    }
    return true;

}

const result = checkMultiplication([2, 3, 6], [9, 4, 36]);
console.log(result)
*/

function checkMultiplication(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let sequenceCounter1 = {}
    let sequenceCounter2 = {}

    for (let val of arr1) { // n times comparison
        // console.log(val)
        sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
    }
    // console.log(sequenceCounter1)
    for (let val of arr2) { // n times comparison
        sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
    }
    // console.log(sequenceCounter2)
    for (let key in sequenceCounter1) { // n times comparison
        // console.log(key)
        if (!(key ** 2) in sequenceCounter2) {
            return false;
        }
        // checking map values in both map
        if (sequenceCounter2[key ** 2] !== sequenceCounter1[key]) {
            return false;
        }
    }
    return true;
}

const result = checkMultiplication([2, 3, 6], [9, 4, 36]);
console.log(result)

// Time complexity = n + n + n = 3n or O(n);


