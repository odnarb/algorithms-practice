//subsequence needs to appear as well as in the same order
function isValidSubsequence(array, sequence) {
  // Write your code here.

    //this is the bruteforce approach
    /*
    //loop through the elements in question
    for(let i=0; i < sequence.length;i++){
        let findThis = sequence[i];
        let found = false;
        for(let j=0; j < array.length;j++){
            if ( findThis == array[j] ){
                found = true;
                break;
            }
        }
        if( !found ) return false;
    }
    return true;
    */

    let mainArrPtr = 0;
    let sequenceItem = 0;
    let sequencePtr = 0;

    //one loop..bounded by the main array..
    while( mainArrPtr < array.length && sequencePtr < sequence.length){
        if( sequence[sequencePtr] == array[mainArrPtr] ){
            sequencePtr++;
        }
        mainArrPtr++;
    }
    return (sequencePtr == sequence.length);
}


console.log( isValidSubsequence( [5,1,22,25,6,-1,8,10], [1,6,-1,10] ) );
console.log( isValidSubsequence( [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1] ) );