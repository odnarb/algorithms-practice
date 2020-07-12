function longestPeak(array){
    let longestPeakLength = 0;
    let isPeak = false;

    let leftPtr = 0;
    let rightPtr = 0;

    //loop through and detect peaks
    for(let i=1; i < array.length-1;i++){
        //is this a peak? (left is less and right is less)
        isPeak = ( array[i-1] < array[i] && array[i] > array[i+1] );

        if( isPeak ){
            //loop left until non-incrasing
            leftPtr = i-2;
            while (leftPtr >= 0 && array[leftPtr] < array[leftPtr+1]){
                leftPtr--;
            }

            //loop right until non-decreasing
            rightPtr = i+2;
            while (rightPtr < array.length && array[rightPtr] < array[rightPtr-1]){
                rightPtr++;
            }

            //check length of peak and if it's the longest
            let currentPeakLength = rightPtr - leftPtr - 1;
            longestPeakLength = Math.max(currentPeakLength, longestPeakLength)
        }
    }

    return longestPeakLength;
}
console.log( longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]) ); // 6

console.log( longestPeak([1, 3, 2]) ); // 3

console.log( longestPeak([1, 2, 3, 4, 5, 1]) ); // 6

console.log( longestPeak([1, 3]) );
console.log( longestPeak([1]) );
console.log( longestPeak([]) );