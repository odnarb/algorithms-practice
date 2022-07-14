/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let numJewels = 0
    let jewelsHash = {}

    //count occurrences
    for(let i=0; i < jewels.length;i++){
        if(jewelsHash[ jewels[i] ] === undefined){
            jewelsHash[ jewels[i] ] = 0
        }
        jewelsHash[ jewels[i] ] += 1
    }

    // now find the jewels
    for(let i=0; i < stones.length;i++){
        if( jewelsHash[ stones[i] ] ) numJewels += 1
    }

    return numJewels
};

/*
Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3


Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

console.log(numJewelsInStones("aA","aAAbbbb"))
console.log(numJewelsInStones("z","ZZ"))