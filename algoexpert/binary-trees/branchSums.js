// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
    let sumsList = [];
    let sum = 0;

    sumHelper(root, 0, sumsList);
    return sumsList;
}

function sumHelper(node, sum, sumsList) {
    if( node == null ) return;

    let thisSum = sum + node.value;
    if(node.left == null && node.right == null){
        sumsList.push(thisSum);
        return;
    }
    sumHelper(node.left, thisSum, sumsList);
    sumHelper(node.right, thisSum, sumsList);
}

// they do something with their code.. probably build the tree per node and then call our function

// let tree = {
//     "nodes": [
//       {"id": "1", "left": "2", "right": "3", "value": 1},
//       {"id": "2", "left": "4", "right": "5", "value": 2},
//       {"id": "3", "left": "6", "right": "7", "value": 3},
//       {"id": "4", "left": "8", "right": "9", "value": 4},
//       {"id": "5", "left": "10", "right": null, "value": 5},
//       {"id": "6", "left": null, "right": null, "value": 6},
//       {"id": "7", "left": null, "right": null, "value": 7},
//       {"id": "8", "left": null, "right": null, "value": 8},
//       {"id": "9", "left": null, "right": null, "value": 9},
//       {"id": "10", "left": null, "right": null, "value": 10}
//     ],
//     "root": "1"
//   }

// console.log( branchSums(tree) );