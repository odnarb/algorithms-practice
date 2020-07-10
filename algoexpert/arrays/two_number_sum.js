/*
Two number sum

test input:
    array: [3,5,-4,8,11,1,-1,6]
    targetsum: 10

output: [-1,11]
*/
function twoNumberSum(array, targetSum){

    for(let i=0; i < array.length;i++){
        for(let j=i+1; j < array.length;j++){
            let sum = array[i] + array[j];
            if( sum == targetSum ) return [array[i], array[j]];
        }
    }
    return [];
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));