function threeNumberSum(array, targetSum){
    let res = [];

    //sort items in array
    array.sort(function(a,b){ return (a-b); });

    // console.log( "sorted arr: ", array );

    //place a point at the end
    let right = 0;
    let left = 0;
    let sum = 0;

    //loop thru array, leaving spaces for the end
    for(let main=0; main < array.length; main++) {
        //place a pointer just after the main pointer
        left = main+1;

        //and another at the end of the array, each iteration
        right = array.length-1;

        while( right > left ){
            sum = array[main] + array[left] + array[right];

            console.log( "indices check: ", main, left, right );
            console.log( "check: ", [ array[main], array[left], array[right] ] );

            if( ( array[main] + array[left] + array[right] ) == targetSum ){
                res.push([ array[main], array[left], array[right] ]);
            }

            if( sum <= targetSum ) {
                left++;
            } else {
                right--;
            }
        }
        if(main == array.length-3) break;
    }
    return res;
}

// console.log( threeNumberSum([12,3,1,2,-6,5,-8,6],0) );
console.log( threeNumberSum([1,2,3],6) );