/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p] = nums[i]
            p++
        }
    }
    
    for (let i = p; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))

console.log(moveZeroes([0]))

/*
    The crux here was to save the index of the last swap, when nonzero..
    Instead of focusing on the zero, we move or swap the nonzeros first.
    Think opposites at times..
    Then backfilling at the last pointer address with zeros gives us the rest.

    O(n)
*/
