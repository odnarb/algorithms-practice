/**
 * @param {number[]} nums
 * @return {number}
 */

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 var numIdenticalPairs = function(nums) {
   if(nums.length === 0 ) return 0

   let numPairs = 0

   let seen = {}

   for(let i=0; i < nums.length;i++){
      if( seen[ nums[i] ] === undefined ) {
         seen[ nums[i] ] = 1
      } else {
         seen[ nums[i] ] += 1
      }
   }

   // console.log(seen)

   let sum = 0

   const keys = Object.keys(seen)
   for(let j=0; j < keys.length;j++){
      let key = keys[j]
      let val = seen[key]
      let total = summation( val-1 )
      // console.log(`summation(${val-1}): `, total)
      numPairs += total
   }

   return numPairs
};

const summation = (num) => {
   let res = 0;
   for(let i = 1; i <= num; i++){
      res += i;
   };
   return res;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log("------------")
console.log(numIdenticalPairs([1,1]))
console.log("------------")
console.log(numIdenticalPairs([1,1,1]))
console.log("------------")
console.log(numIdenticalPairs([1,1,1,1]))
console.log("------------")
console.log(numIdenticalPairs([1,1,1,1,1]))
console.log("------------")
console.log(numIdenticalPairs([1,1,1,1,1,1]))

/*
   Solved[40m00s]
   This came down to using a hash and then running a summation over those values (minus 1)
   This was a little more difficult to identify the pattern, but once I wrote out the example by hand using several methods
   I was able to figure out one that worked.
   Did not use any provided solution..
*/