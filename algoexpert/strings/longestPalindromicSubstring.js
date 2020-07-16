function longestPalindromicSubstring(string){

    if(string.length == 1) return string;
    if(string.length == 2 && string[0] == string[1]) return string;

    let longestPalindrome = "";

    let evenStart = 0;
    let oddStart = 0;

    // console.log("string: ", string);

    //iterate through with one pass
    //check even and odd length (mid char and with a mid char)
    for(let i=0; i < string.length; i++){

        //don't need to allocate new vars, but it might help with disambiguity
        evenStart  = findPalindrome(string, i, i+1);

        if( i-1 >= 0 ){
            oddStart = findPalindrome(string, i-1, i+1);
        }

        //choose the longest palindrome of the two
        if( evenStart.length > longestPalindrome.length ){
            longestPalindrome = evenStart;
        }
        if ( oddStart.length > longestPalindrome.length ){
            longestPalindrome = oddStart;
        }
    }
    return longestPalindrome;
}

function findPalindrome(string, leftPtr, rightPtr){

    // console.log("find Pal: ", leftPtr, rightPtr, string[leftPtr], string[rightPtr]);

    while(leftPtr >= 0 && rightPtr < string.length && string[leftPtr] === string[rightPtr]){
        leftPtr--;
        rightPtr++;
    }

    //correct the palindrome ptrs
    leftPtr++;
    rightPtr--;

    let palLength = rightPtr - leftPtr + 1;
    let longestPalindrome = string.substr( leftPtr, palLength );

    // console.log("find Pal: ", leftPtr, rightPtr, longestPalindrome);

    return longestPalindrome;
}

console.log( longestPalindromicSubstring("") );
console.log( longestPalindromicSubstring("a") );
console.log( longestPalindromicSubstring("ab") );
console.log( longestPalindromicSubstring("aa") );
console.log( longestPalindromicSubstring("abaxyzzyxf") );
console.log( longestPalindromicSubstring("it's highnoon") );
console.log( longestPalindromicSubstring("noon high it is") );