function palindromeCheck(string){
    let isPalindrome = false;

    //a string is a plaindrone when the left half == the right half backwards

    //get midpoint, ceil/floor helps us ignore the mid integer if length is odd
    let leftPtr = Math.floor((string.length-1)/2);
    let rightPtr = Math.ceil((string.length-1)/2);

    while(leftPtr >= 0 && rightPtr < string.length){
        let leftChar = string[leftPtr];
        let rightChar = string[rightPtr];

        if( leftChar !== rightChar ) {
            return false;
        } else {
            leftPtr--;
            rightPtr++;
        } //endif
    } //end while

    return true;
}

console.log( palindromeCheck("aaaaaafaaaa") ); // false
console.log( palindromeCheck("aaaafaaaa") ); // true
console.log( palindromeCheck("aaaafaaa") ); // false