function binarySearch(array, target) {
    let leftPtr = 0;
    let rightPtr = array.length;
    let mid = 0;

    while( leftPtr <= rightPtr ){
        mid = Math.floor( (leftPtr + rightPtr) / 2);

        if( array[mid] == target ) return mid;
        if( array[mid] > target ){
            rightPtr = mid-1;
        } else {
            leftPtr = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 74));