function selectionSort(array) {
    let smallestIdx = 0;
    for(let currentIdx=0; currentIdx < array.length;currentIdx++){
        //restart at the current index
        smallestIdx = currentIdx;

        //now find the smallest
        for(let i=currentIdx; i < array.length;i++){
            if( array[i] < array[smallestIdx] ){
                smallestIdx = i;
            }
        }

        //swap current with smallest
        let tmp = array[currentIdx];
        array[currentIdx] = array[smallestIdx];
        array[smallestIdx] = tmp;
    }
    return array;
}

console.log(selectionSort([8,5,2,9,5,6,3]));