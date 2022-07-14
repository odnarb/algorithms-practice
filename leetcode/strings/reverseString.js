/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0; i < s.length/2;i++){
        let tmp = s[i]
        s[i] = s[s.length - i - 1]
        s[s.length-i-1] = tmp
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))