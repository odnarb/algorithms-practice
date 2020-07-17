function longestSubstringWithoutDuplication(string) {
    if( string.length < 2 ) return string;

    //track the longest
    let longest = "";

    let charMap = {};

    let left = 0, right = 1;

    //move left & right pointers
    charMap[ string[0] ] = 0;

    //while no violation
    while( right < string.length ){
        console.log( charMap );

        //add to the char map, its index and move pointer to the right while it's unique
        if( charMap[ string[right] ] == undefined ){
            charMap[ string[right] ] = right;
            //store the string as the longest?

            let temp = string.substr( left, (right-left+1) );
            if(temp.length > longest.length){
                longest = temp;
                // console.log( "New longest, left, right: ", longest, left, right );
            }

            //keep moving
            right++;
        } else {
            //reset the left pointer to the starting char of the violation (plus 1)
            let newLeft = charMap[ string[right] ] + 1;

            // console.log("New start char::index =>", string[right], charMap[ string[right] ] );

            //reset the map
            charMap = {};

            //save the coords
            charMap[ string[newLeft] ] = newLeft;

            //reset left & right
            left = newLeft;
            right = left + 1;

            // console.log( "After reset: ", charMap );

        } //endif

        // console.log( "After iteration END: ", charMap );
    } //end while

    return longest;
}

console.log( longestSubstringWithoutDuplication("clementisacap") ); //mentisac