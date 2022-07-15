/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0) return -1
    let l = nums.length
    let left = [...nums]
    let right = [...nums]
    left[0] = nums[0]
    right[l-1] = nums[l-1]

    for(let i = 1; i < l; i++){
        left[i] = nums[i] + left[i-1]
        right[l-1-i] = nums[l-1-i] + right[l-i]
    }

    for(let i=0; i < l; i++){
        if(left[i] === right[i]) return i
    }
    return -1
}


console.log(pivotIndex([1,7,3,6,5,6]))

console.log(pivotIndex([1,2,3]))

console.log(pivotIndex([2,1,-1]))