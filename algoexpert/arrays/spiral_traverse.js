
/*

[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]]

should return: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
*/

function spiralTraverse(array){
    let result = [];

    let startRow = 0, startCol=0, endRow=array.length-1, endCol=array[0].length-1;

    //check bounds
    while( (startRow <= endRow) && (startCol <= endCol) ){
        //traverse the perimeter

        //get the top
        for(let col = startCol;col <= endCol;col++){
            result.push( array[startRow][col] );
        }

console.log("after top: ", result);

        //get the right
        for(let row = startRow+1;row <= endRow;row++){
            result.push( array[row][endCol] );
        }

console.log("after right: ", result);

        //get the bottom
        for(let col = endCol-1; col >= startCol;col--){
            if (startRow == endRow) break;
            result.push( array[endRow][col] );
        }

console.log("after bottom: ", result);

        //get the left
        for(let row = endRow-1; row > startRow;row--){
            if (startCol == endCol) break;
            result.push( array[row][startCol] );
        }

console.log("after left: ", result);

        //set new bounds
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }//end while

    return result;
}

console.log( spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]) );