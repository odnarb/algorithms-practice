function getPermutations(array) {
    let perms = [];
    perms = permHelper(0,array,perms);
    return perms;
}

function permHelper(index,array,perms){
    if( index == array.length-1){
        perms.push( JSON.parse(JSON.stringify(array) ) );
    } else {
        for(let j=index; j < array.length;j++){
            array = swap(array, index,j);
            permHelper(index+1,array,perms);
            array = swap(array,index,j);
        }
    }
    return perms;
}

function swap(array, i, j){
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
    return array;
}

console.log( getPermutations([1, 2, 3]) );