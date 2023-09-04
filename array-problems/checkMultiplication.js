/**
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns boolean
 * Problem: Given two array, check if the multiplied value of each element of first array exists in second array or not
 * Soln: 
 * 1. check if the array length matches or not
 * 2. iterate over the array
 * 3. create variable to find out and save the index matches with second array or not
 * 4. Remove each element from the second array if the condition matches
 * 5. Return boolean
 */

function checkMultiplication(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        let index = arr2.indexOf(arr1[i] ** 2);
        // console.log(index);
        if (index === -1) {
            return false;
        }
        arr2.splice(index, 1);
        // console.log(arr2);
    }
    return true;
}

const result = checkMultiplication([2, 3, 6], [9, 4, 36])
console.log(result)