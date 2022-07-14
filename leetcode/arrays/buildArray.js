/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    if(nums.length === 0) return []
    
    let ans = new Array(nums.length)
    for(let i=0; i < nums.length;i++){
        ans[i] = nums[nums[i]]
    }
    return ans
};

/*
    This was a matter of looping over the array and following their instruction of ans[i] = nums[nums[i]]..
*/