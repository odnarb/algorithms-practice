/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length === 0) return []
    let ans = []
    let sum = 0
    for(let i=0; i < nums.length;i++){
        sum += nums[i]
        ans[i] = sum
    }
    return ans
};