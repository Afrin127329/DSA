/**
 * Prob: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

    Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
    Return k.

    Soln: 
    1. 
 */

    function removeElem(nums, val) {
        let k = 0;
        // let temp = [];
        for (let i = 0; i < nums.length; i++){
            // console.log(nums[k]);
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
                // temp.push(nums[i]);
            } 
        }
        return k;
    }
    
    console.log(removeElem([3,2,2,3], 3))