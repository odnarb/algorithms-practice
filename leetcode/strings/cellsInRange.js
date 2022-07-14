/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {

  //stole this solution.. need to remember destructuring for readability
  const [fromLetter, fromNum, ,toLetter, toNum] = s;

  const ret = [];
  let l1 = fromLetter.charCodeAt(0)
  let l2 = toLetter.charCodeAt(0)
  for (; l1 <= l2; ++l1) {
    let n1 = +fromNum //The + also converts any string to an int
    let n2 = +toNum
    for (; n1 <= n2; ++n1) {
      ret.push(String.fromCharCode(l1) + n1);
    }
  }
  return ret;
}
/* My original solution.. sucky to read...
var cellsInRange = function(s) {
        let list = []

        //get the difference between cols
        let cols = s.split(":")

        let firstCol = cols[0][0]
        let lastCol = cols[1][0]

        let firstRow = parseInt(cols[0][1])
        let lastRow = parseInt(cols[1][1])

        let numCols = lastCol.charCodeAt() - firstCol.charCodeAt() + 1
        let numRows = lastRow - firstRow + 1

        // console.log(numCols, numRows)
        // console.log(firstRow, lastRow)

        // horizontal is easy
        if(firstCol === lastCol) {
            //just make rows and return
            for(let i=firstRow; i < (firstRow+numRows); i++) {
                list.push(firstCol + i)
            }
        } else {
            for(let i=0; i < numCols; i++) {
                for(let j=firstRow; j < (firstRow+numRows); j++) {
                    list.push( String.fromCharCode(firstCol.charCodeAt() + i) + "" + j)
                }
            }
        }
        return list
};
*/
console.log(cellsInRange("K1:K5"))
console.log(cellsInRange("K1:L2"))
console.log(cellsInRange("U7:X9"))
console.log(cellsInRange("W5:W8"))

