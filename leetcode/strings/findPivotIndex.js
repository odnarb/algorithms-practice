/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let lSum = 0
    let rSum = 0

    // console.log("nums: ", nums)

    function sum(start,end) {
        let sum = 0
        for(let i=start; i <= end;i++){
            sum += nums[i]
        }
        return sum
    }

    for(let pivot=0; pivot < nums.length;pivot++){
        //update the sums
        if( pivot === 0 ){
            lSum = 0
            rSum = sum(pivot+1,nums.length-1)
        } else if( pivot === nums.length ){
            lSum = sum(0,pivot-1)
            rSum = 0
        } else {
            lSum = sum(0,pivot-1)
            rSum = sum(pivot+1,nums.length-1)
        }

        // console.log(`sum() lSum:${lSum}`)
        // console.log(`sum() rSum:${rSum}`)

        if(lSum === rSum){
            return pivot
        }
    }
    return -1
}


console.log(pivotIndex([1,7,3,6,5,6]))

console.log(pivotIndex([1,2,3]))

console.log(pivotIndex([2,1,-1]))