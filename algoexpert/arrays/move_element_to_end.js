function moveElementToEnd(array, toMove){

    //set a pointer to the original ending
    let left = 0;
    let right = array.length-1;

    // console.log( array );

    while( left < array.length && right >= left ){

        let value = array[left];

        // console.log( "left: " + left + ":: right: " + right + " :: current val: " + value );
        if( value != toMove ){
            left++;
        } else {

            // console.log( "current array: ", array );

            //delete this item, push it onto the end of the array
            array.splice(left,1);
            array.push(value);
            right--;
        }
    }
    return array;
}
console.log( moveElementToEnd([2,1,2,2,2,3,4,2], 2) );
