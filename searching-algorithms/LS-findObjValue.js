/**
 * Problem: Given an Array of objects, find the object value exists or not based on the value provided by the argument
 * Soln: 
 * 1. Iterate over the Array
 * 2. Condition for value check
 * 3. return boolean
 */

const array = [
    {
        username: 'Anil',
        email: 'anil32@gmail.com'
    },
    {
        username: 'Parth',
        email: 'parth345@gmail.com'
    },
    {
        username: 'Biswas',
        email: 'biswas3222@gmail.com'
    },
    {
        username: 'Megha',
        email: 'megha10@gmail.com'
    },
]

function findObjKey(arr, value) {
    for (let item of arr) {
        // console.log(item["username"]);
        if (item['username'] === value) {
            return true;
        }
    }
    return false;
}

const result = findObjKey(array, 'Megha');
console.log(result);