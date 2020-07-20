function patternMatcher(pattern, string){

    //early exit
    if( pattern.length > string.length ){
        return [];
    }

    //switch y's and x's?
    let swapped = false;

// console.log("orig pattern: " + pattern);

    //swap patterns to lock onto some y ?
    let tempPattern = swapPattern(pattern);
    if( pattern[0] !== tempPattern[0] ){
        swapped = true;
        pattern = tempPattern;
    }

    //get a char map of the pattern
    let map = { "x": 0, "y": 0 };

    //this actually changes our map locally (it's like a pass by ref)
    let firstY = getPatternCharMapAndFirstY(pattern, map);

    //if no y's.. do a simple replace
    if( map["y"] > 0 ){

        //solve for y.. xxyxxy = 4x+2y = string.length
        //we need a series of tries..different lengths of x and y
        let tries = getTries(map, string);

// console.log(" new pattern: " + pattern);
// console.log("tries: ", tries);

        //test for pattern matching
        let sub = "", x_chunk = "", y_chunk = "";
        for(let i=0; i < tries.length;i++){
            let x_chunk = string.substr( 0, tries[i][0]);
            let y_chunk = string.substr( (x_chunk.length*firstY), tries[i][1]);

            // console.log("x_chunk: " + x_chunk + " :: y_chunk: " + y_chunk);

            //try substituting each chunk and get a pattern from it
            generatedString = generateString(pattern, x_chunk, y_chunk);

// console.log("generatedString: ", generatedString);

            //now compare the patterns
            if( generatedString == string ){
                //if we swapped earlier, just swap the result
                if( swapped ){
                    return [ y_chunk, x_chunk ];
                }
                //otherwise return the x,y ordering
                return [ x_chunk, y_chunk ];
            }
        }
        return [];
    } else {

        let resPattern = "";

        //we know the length of each word of the pattern.. string.length / pattern
        let subStrLength = string.length / pattern.length;

        if( subStrLength%1 == 1 ) return [];

        //just try a variable length of x and sub as we go
        let sub = string.substr(0, subStrLength);

        for(let i = 0; i < string.length;i+=subStrLength){
            if( sub == string.substr(0, subStrLength) ) {
                resPattern += "x";
            }
        }
        if( resPattern == pattern ){
            if( swapped ){
                return ["", sub];
            }
            return [sub, ""];
        }
        return [];
    }
}

function getPatternCharMapAndFirstY(pattern, map){
    let firstY = -1;

    for(let i = 0; i < pattern.length;i++){
        //record the location of the first y
        if( pattern[i] == "y" && firstY == -1 ) firstY = i;

        map[ pattern[i] ] = (map[ pattern[i] ]+1) || 1;
    }
    return firstY;
}

function swapPattern(pattern){
    let tempPattern = "";
    //if the first char of the pattern is a y, flip the x's and y's
    if(pattern[0] == "y"){
        for(let i = 0; i < pattern.length;i++){
            if( pattern[i] == "y") tempPattern += "x";
            if( pattern[i] == "x") tempPattern += "y";
        }
        //now return our swapped pattern
        return tempPattern;
    }
    //else return the original
    return pattern;
}

function generateString(pattern, x_chunk, y_chunk){
    let string = "";
    for(let i =0; i < pattern.length; i++){
        if( pattern[i] == "x"){
            string += x_chunk;
        } else if ( pattern[i] == "y"){
            string += y_chunk;
        }
    }
    return string;
}

function getTries(map, string){
    let tries = [];
    let x = 0;
    let y = 1;

    while( y > 0 ){
        x++;
        y = (string.length - map["x"]*x) / map["y"];

        if(y <= 0 || y%1 !== 0) continue;

        tries.push([x,y]);
    }
    return tries;
}


console.log( patternMatcher("xxyxxy", "gogopowerrangergogopowerranger") );
console.log( patternMatcher("xyxy", "abab") );
console.log( patternMatcher("yxyx", "abab") );
console.log( patternMatcher("yxx", "yomama") );
console.log( patternMatcher("yyxyyx", "gogopowerrangergogopowerranger") );
console.log( patternMatcher("xyx", "thisshouldobviouslybewrong") );
console.log( patternMatcher("xxxx", "testtesttesttest") );
console.log( patternMatcher("xxxx", "testtesttesttest") );
console.log( patternMatcher("yyyy", "testtesttesttest") );
console.log( patternMatcher("xxyxyy", "testtestwrongtestwrongtest") );
console.log( patternMatcher( "xxxx", "testtesttesttest" ) );
console.log( patternMatcher( "yyyy", "testtesttesttest" ) );
console.log( patternMatcher("xyxxxyyx", "baddaddoombaddadoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom") );
console.log( patternMatcher("yxyyyxxy", "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom") );
console.log( patternMatcher("xyxxxyyx", "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom") );