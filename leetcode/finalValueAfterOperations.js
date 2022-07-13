/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    if(operations.length === 0) return 0

    let x = 0

    for(let i=0; i < operations.length;i++){
        let op = operations[i]
        if ( operations[i] === "--X" || operations[i] === "X--"){
            x-=1
        } else if ( operations[i] === "++X" || operations[i] === "X++") {
            x+=1
        }
    }
    return x
};