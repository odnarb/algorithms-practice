/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //remove or ignore non-ascii
    const sPrime = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()

    if(sPrime.length === 0) return true

    // console.log("sPrime: ", sPrime)

    for(let i=0; i < sPrime.length/2;i++){
        if( sPrime[i] !== sPrime[sPrime.length - i -1] ) return false
    }
    return true
};

//Regex was a big one here that helped...

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))