//powerset == all possible subsets (including the empty set)
//iterative solution
function powerset(array) {
    //init with the empty set
    let pow = [[]];

    //additive to the power set
    for(let i=0; i < array.length;i++){

        //save the length, otherwise if we do pow.length in the loop structure it'll be ever increasing (infinite loop)
        let powLen = pow.length;

        //loop through power set
        for(let j=0; j < powLen;j++){

            //get a copy of the current set in question
            let thisSet = JSON.parse( JSON.stringify( pow[j] ) );

            thisSet.push(array[i]);
            pow.push(thisSet);
        }
    }
    return pow;
}

function powerSetRecursive(array, index = null){
    //base case
    if( index == null ) {
        index = array.length-1;
    } else if( index < 0 ){
        return [[]];
    }

    let currentElement = array[index];
    let subsets = powerSetRecursive(array, index-1);

    //save the length, otherwise if we do subsets.length in the loop structure it'll be ever increasing (infinite loop)
    //python does not have this issue
    let subsetsLen = subsets.length;
    //additive to the power set
    for(let i=0; i < subsetsLen;i++){

        //get a copy of the current set in question
        let thisSet = JSON.parse( JSON.stringify( subsets[i] ) );

        thisSet.push(currentElement);
        subsets.push(thisSet);
    }
    return subsets;
}

// console.log( powerset([1,2,3]) );

console.log( powerSetRecursive([1,2,3]) );