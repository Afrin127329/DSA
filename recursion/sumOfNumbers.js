/**
 * Problem: Given a number, find the sum of all the numbers till 0
 * Soln: 
 * 1. 
 */

function sumOfNumber(n) {
    // Using for loop
    // let sum = 0;
    // for (let i = n; i > 0; i--){
    //     console.log(i);
    //     sum += i;
    // }

    // Using Recursion 
    if (n < 0) return 0;
    return n + sumOfNumber(n -1);

}

console.log(sumOfNumber(10));