/*
    an array is monotonic if:
        its elements from left-right:
            are entirely non-increasing
            or entirely non-decreasing
*/
function isMonotonic(array){

    if (array.length < 2) return true;

    let direction = 0;

    for(let i = 0; i < array.length;i++) {
        left = array[i];
        right = array[i+1];

        if( left > right && direction == 0){
            direction = -1;
        } else if( left > right && direction == 1){
            return false;
        } else if( left < right && direction == 0){
            direction = 1;
        } else if( left < right && direction == -1){
            return false;
        }
    }
    return true;
}

console.log( isMonotonic([-1,-5,-1100,-1100,-1101,-1102,-9001]) );
console.log( isMonotonic([]) );
console.log( isMonotonic([1]) );
console.log( isMonotonic([1,2]) );
console.log( isMonotonic([2,1]) );
console.log( isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001]) );
console.log( isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]) );

