/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    if(nums.length === 0) return 0

    let numSmaller = []
    let hash = {}

    //get a sorted version
    let sorted = [...nums].sort((a,b) => a-b)

    sorted.map((val,idx) => { if(hash[ val ] === undefined){ hash[ val ] = idx }})
    nums.map((val,idx) => { numSmaller[idx] = hash[ nums[idx] ] })

    //this is more verbose, old style
    // //hash the val-numbers
    // for(let i=0; i < sorted.length;i++){
    //     //this will also override the index where first duplicates were
    //     let val = sorted[i]
    //     if(hash[ val ] === undefined) hash[ val ] = i
    // }

    // //loop to get the original
    // for(let i=0; i < nums.length;i++){
    //     numSmaller[i] = hash[ nums[i] ]
    // }
    return numSmaller
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))


// Solved in 45m24s
// I took my time, but I doubted myself and looked at someone else's answer.
// Then I used array map functions which ended up being more performant than the old style code.