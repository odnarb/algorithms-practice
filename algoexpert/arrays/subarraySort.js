function subarraySort(array) {
    let maxOutofPlaceValue = Number.MIN_SAFE_INTEGER;
    let minOutofPlaceValue = Number.MAX_SAFE_INTEGER;

    let minAddr = 0;
    let maxAddr = 0;

    let result = [-1,-1];

    //generate a sorted array to compare addresses against
    let sortedArray = JSON.parse( JSON.stringify( array ) );
    sortedArray.sort(function(a,b){ return a-b;});

    // console.log("array: ", array);
    // console.log("sortedArray: ", sortedArray);

    //find the min/max values that are out of place
    for(let i=0; i < array.length;i++){

        // console.log("this vs prev (FOR MIN): ", array[i], array[i-1]);
        // console.log("this vs next (FOR MAX): ", array[i], array[i+1]);

        if( array[i] < array[i-1] && array[i] < minOutofPlaceValue ){
            minOutofPlaceValue = array[i];
        } else if( array[i] > array[i+1] && array[i] > maxOutofPlaceValue ){
            maxOutofPlaceValue = array[i];
        }
    }

    // console.log("min / max: ", minOutofPlaceValue, maxOutofPlaceValue);

    //find the address of min
    for(let i=0; i < sortedArray.length;i++){
        if( array[i] != sortedArray[i] && sortedArray[i] == minOutofPlaceValue ) {
            result[0] = i;
            break
        }
    }

    //find max separately
    for(let i=0; i < sortedArray.length;i++){
        if( array[i] != sortedArray[i] && sortedArray[i] == maxOutofPlaceValue ){
            result[1] = i;
            break;
        }
    }

    if(result[0] == result[1]){
        return [-1,-1];
    }
    return result;
}

// console.log( subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19]) );
// console.log( subarraySort([2, 1]) );
console.log( subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19]) );