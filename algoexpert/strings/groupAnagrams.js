function groupAnagrams(words){
    let visited = {};

    let result = [];
    //loop through the array of strings
    for(let i=0; i < words.length; i++){
        //determine if this is an anagram of that
        let currentWord = words[i];
        let nextPtr = i+1;

        //store the current word as its own anagram
        if( visited[ currentWord ] ) {
            continue;
        } else {
            visited[ currentWord ] = 1;
        }

        // console.log( "BEFORE adding result : ", result, currentWord);

        //add to the result array
        result.push([currentWord]);

        // console.log( "AFTER adding result : ", result);

        while( nextPtr < words.length && visited[currentWord] ){
            let nextWord = words[nextPtr];

            // console.log( "checking anagram: ", currentWord, nextWord);

            // add to the array
            if( isAnagram(currentWord, nextWord) ){
                result[i].push(nextWord);

                // console.log( "adding nextWord: ", nextWord);

                //and mark it as visited
                visited[ nextWord ] = 1;
            }
            //move along the array.. no need to move back to compare
            nextPtr++;

            // console.log( "current result: ", result);
            // console.log( "current visited: ", visited);
        }
    }
    return result;
}

function isAnagram(string1, string2){
    let charMap = {};

    //only consider strings of equal length
    if( string1.length !== string2.length ) return false;

    //loop through the chars of s1 and make a char map
    for(let i=0; i < string1.length;i++){
        //increment or init to zero
        let currentChar = string1[i];
        charMap[currentChar] = (charMap[currentChar]++ ) || 1;
    }

    // console.log("char map: ",  charMap );

    for(let i=0; i < string2.length;i++){
        //increment or init to zero
        let currentChar = string2[i];
        charMap[ currentChar ] = (charMap[currentChar]--) || -1;

        // console.log("middle :: char map2: ",  charMap );

        //semi-early return
        if( charMap[ string2[i] ] < 0 ) return false;
    }

    //if we've reached this point string1 is an anagram of string2
    return true;
}

// console.log( groupAnagrams(["yo", "act", "flop", "tac", "cat", "oy", "olfp"]) );

// console.log( groupAnagrams( ["zxc", "asd", "weq", "sda", "qwe", "xcz"] ) );

console.log( groupAnagrams( ["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"] ) );

// console.log( groupAnagrams(  ["abc", "abe", "abf", "abg"] ) );