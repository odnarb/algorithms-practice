function findThreeLargestNumbers(array) {
    //initialize the largest array
    let sortFunc = function(a,b){ return a-b; };
    let largest = [ array[0], array[1], array[2] ].sort(sortFunc);

    if( array.length > 3 ) {
        for(let i=3; i < array.length;i++){
            if( array[i] > largest[0] ){
                largest[0] = array[i];
                largest.sort(sortFunc);
            }
        }
    }
    return largest.sort(sortFunc);
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])); // 141 541 17
