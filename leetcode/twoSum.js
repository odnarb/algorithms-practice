/*
https://leetcode.com/problems/two-sum/description/

I was directed to this problem via an online course: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310382#learning-tools
*/

/*
Given an numsay of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

----------------------

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
*/

function twoSums(nums, target){
    const seen = {}

    for(let i=0; i < nums.length;i++){
        let need = target - nums[i]
        if(seen[need] !== undefined){
            return [ i , seen[need] ]
        }
        seen[ nums[i] ] = i
    }
    return []
}

console.log(twoSums([2,7,11,15], 9))

console.log(twoSums([3,3], 6))

console.log(twoSums([3,3], 7))

console.log(twoSums([0,0], 1))

console.log(twoSums([-1,0], 6))


console.log(twoSums([3,2,4], 6))

/*
    Solved in 90m30s
    I needed help on this one so I looked up a solution.

    I did in fact use a hash on my own, but I tried sorting first, then iterating through the array.
    I was trying to do x+y=target comparisons when I just needed to do target-x = y and store that in the hash..
    In the end I overcomplicated it.

    Need to remember to use all algebra basics..
*/