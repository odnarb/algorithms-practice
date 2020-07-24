function nodeDepths(root) {
    return depthHelper(root, 0);
}

function depthHelper(node, depth){
    if(node == null) return 0;

    if(node.left == null && node.right == null){
        return depth;
    }

    return depth + depthHelper(node.left, depth+1) + depthHelper(node.right, depth+1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
