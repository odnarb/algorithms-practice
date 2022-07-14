/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let origStr = new Array(s.length).fill(".")
    for(let i=0; i < s.length; i++){
        origStr[ indices[i] ] = s[i]
    }
    return origStr.join("")
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))
console.log(restoreString("abc",[0,1,2]))
