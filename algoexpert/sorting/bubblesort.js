function bubbleSort(array) {
    let didSwap = true;

    while(didSwap){
        //assume no
        didSwap = false;

        for(let i=0; i < array.length;i++){
            if( i < array.length-1 && array[i] > array[i+1] ){
                //swap
                let tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;

                //record that we did the swap
                didSwap = true;
            }
        }
    }
    return array;
}
console.log(bubbleSort([8,5,2,9,5,6,3]));