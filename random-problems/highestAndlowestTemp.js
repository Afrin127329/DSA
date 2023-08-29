/** 
 * Problem: Given an array of temperature, find the highest and lowest temperature and return the remaining temperature
 * Soln: 
 * 1. create two variables of highest and lowest temperature
 * 2. iterate over the array 
 * 3. Refactor by error checking
 * 4. conditions for saving the variables
 * 5. Return the remaining temperature
 */
const temperature = [24, 36, 0, -56, 14, -29, 'error', -44, 19, 47];

const remainingTemp = (arr) => {
    // 1. create two variables of highest and lowest temperature
    let highestTemp = arr[0];
    let lowestTemp = arr[0];

    // 2. iterate over the array
    for (let i = 0; i < arr.length; i++){
        // 3. Refactor by error checking
        if (typeof arr[i] !== 'number') continue;
        // 4. conditions for saving the variables
        if (highestTemp < arr[i]) {
            highestTemp = arr[i]
        }
        if (lowestTemp > arr[i]) {
            lowestTemp = arr[i]
        }
    }
        // console.log(highestTemp, lowestTemp);
        // 5. Return the remaining temperature
        return highestTemp - lowestTemp;
}

console.log(remainingTemp(temperature));


