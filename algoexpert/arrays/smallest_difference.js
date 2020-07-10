function smallestDifference(arrayOne,arrayTwo){
    //find pair that has an absolute DIFFERENCE closest to zero
    //sort both so we can make some assumptions about moving across the arrays
    let sortFunc = function(a,b){ return a-b };

    arrayOne.sort(sortFunc);
    arrayTwo.sort(sortFunc);

    // console.log("arrayOne sorted: ",arrayOne);
    // console.log("arrayTwo sorted: ",arrayTwo);

    //choose arrayOne as our main runner
    let bestDiff = Number.MAX_SAFE_INTEGER;
    let res = [];

    //loop over main array
    for(let ptrOne=0; ptrOne < arrayOne.length;ptrOne++){
        ptrTwo = 0;

        while (ptrTwo < arrayTwo.length) {
            let currentDiff = Math.abs(arrayOne[ptrOne] - arrayTwo[ptrTwo] );

            // console.log("currentDiff " + currentDiff + ":: bestDiff: " + bestDiff );
            // console.log("indices " + ptrOne + "," + ptrTwo +" :: values " + arrayOne[ptrOne] + ", " + arrayTwo[ptrTwo] );
            // console.log("---------------------");

            if( currentDiff == 0 ) {
                //we've found an immediate match.. return it
                return [ arrayOne[ptrOne], arrayTwo[ptrTwo] ];
            } else if( currentDiff > bestDiff && arrayTwo[ptrTwo] > arrayOne[ptrOne] ){
                break;
            } else if( currentDiff <= bestDiff ){
                //update the result
                bestDiff = currentDiff;
                res = [ arrayOne[ptrOne], arrayTwo[ptrTwo] ];
            }
            ptrTwo++;
        }
    }
    return res;
}
console.log( smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]) );