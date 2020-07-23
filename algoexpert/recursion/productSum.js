// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth) {
    let total = 0;
    if( depth == undefined ) depth = 1;

    for(let i=0; i < array.length;i++){
        console.log(i, array[i]);
        if( Array.isArray(array[i]) ){
            total += depth * productSum(array[i], depth+1);
        } else {
            total += depth*array[i];
        }

    }
    return total;
}


console.log( productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]) );
