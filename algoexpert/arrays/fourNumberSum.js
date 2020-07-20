//get all quadruplets that sum to the target sum
function fourNumberSum(array, targetSum) {
    let resultSet = [];

    let seenPairs = {};

    for(let i=0; i < array.length;i++){

        //iterate AFTER current number (i)
        for(let j=i+1; j < array.length;j++){

            //compute the difference
            let diff = targetSum - (array[i] + array[j]);

            //if you've seen this, add its pairs to the result set
            if( seenPairs[diff] ){
                //add to result set
                addtoResultSet(resultSet, seenPairs[diff], array[i], array[j]);
            }
        } //end for

        if( i > 0 ){
            //iterate BEFORE current number (i)
            for(let j = 0; j < i;j++){
                //compute the SUM
                let sum = array[i] + array[j];

                //init this diff
                if(seenPairs[sum] == undefined ){
                    seenPairs[sum] = [];
                }

                //store diff in hash
                seenPairs[sum].push([ array[i], array[j] ])
            }
        }
    } //end for
    return resultSet;
}

function addtoResultSet(resultSet, seenPairs, a, b){
    // console.log("seen pairs: ", seenPairs);

    for(let i=0; i < seenPairs.length;i++){
        let thisQuad = JSON.parse(JSON.stringify(seenPairs[i]));
        thisQuad.push(a);
        thisQuad.push(b);
        resultSet.push(thisQuad);
    }
}

console.log( "resultSet: ", fourNumberSum([7,6,4,-1,1,2], 16) );