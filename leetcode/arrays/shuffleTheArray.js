/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    if(nums.length === 0 ) return []

    let shuffled = []
    
    for(let i=0; i < n;i++){
        //for x
        shuffled[2*i] = nums[i] 
        //for y
        shuffled[(2*i)+1] = nums[i+n]
    }
    return shuffled
};

/*
    I overcomplicated the first few attempts.
    Need to fully understand the problem and go slower, then I could have finished this quicker
    Solved: 30m04s
*/