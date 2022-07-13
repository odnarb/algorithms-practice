/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    if(nums.length === 0) return []
    let newLen = nums.length*2
    let ans = new Array(newLen)
    for(let i=0; i < newLen;i++){
        ans[i] = nums[i%nums.length]
    }
    return ans
};