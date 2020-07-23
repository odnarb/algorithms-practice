function insertionSort(array) {
    for(let currentIdx=0; currentIdx < array.length;currentIdx++){
        if( array[currentIdx] > array[currentIdx+1] ){
            //swap to the left
            let tmp = array[currentIdx];
            array[currentIdx] = array[currentIdx+1];
            array[currentIdx+1] = tmp;

            //bubble backwards
            for(let i=currentIdx; i >= 0;i--){
                if( array[i-1] > array[i] ){
                    //swap to the left
                    let tmp = array[i];
                    array[i] = array[i-1];
                    array[i-1] = tmp;
                } else {
                    //the subarray is sorted, let it go
                    break;
                }
            }
        }
    }
    return array;
}

console.log(insertionSort([8,5,2,9,5,6,3]));