//1. Implement a Binary Search Tree (BST) and Perform Insertions and Deletions:


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this._insertRecursive(this.root, newNode);
  }

  _insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertRecursive(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertRecursive(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this._deleteRecursive(this.root, value);
  }

  _deleteRecursive(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      const minRightSubtree = this._findMin(node.right);
      node.value = minRightSubtree.value;
      node.right = this._deleteRecursive(node.right, minRightSubtree.value);
    } else if (value < node.value) {
      node.left = this._deleteRecursive(node.left, value);
    } else {
      node.right = this._deleteRecursive(node.right, value);
    }

    return node;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

//2. Find the Height of a Binary Tree:


function findTreeHeight(root) {
  if (!root) {
    return -1;
  }
  const leftHeight = findTreeHeight(root.left);
  const rightHeight = findTreeHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

//3. Implement an In-Order Traversal using Recursive and Iterative Methods:


// Recursive
function inOrderRecursive(root) {
  if (root) {
    inOrderRecursive(root.left);
    console.log(root.value);
    inOrderRecursive(root.right);
  }
}

// Iterative using a stack
function inOrderIterative(root) {
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    console.log(current.value);

    current = current.right;
  }
}

//4. Find the Lowest Common Ancestor in a Binary Tree:


function lowestCommonAncestor(root, p, q) {
  if (!root) {
    return null;
  }

  if (root.value === p.value || root.value === q.value) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}

//5. Check if a Binary Tree is Balanced:


function isBalanced(root) {
  if (!root) {
    return true;
  }

  const leftHeight = findTreeHeight(root.left);
  const rightHeight = findTreeHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
    return true;
  }

  return false;
}

//6. Serialize and Deserialize a Binary Tree:


function serialize(root) {
  const result = [];

  function preorder(node) {
    if (!node) {
      result.push(null);
      return;
    }

    result.push(node.value);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return result;
}

function deserialize(data) {
  const stack = [];
  const root = new TreeNode(data[0]);
  stack.push(root);

  for (let i = 1; i < data.length; i++) {
    let currentNode = null;
    while (stack.length > 0 && data[i] > stack[stack.length - 1].value) {
      currentNode = stack.pop();
    }

    if (currentNode) {
      currentNode.right = new TreeNode(data[i]);
      stack.push(currentNode.right);
    } else {
      currentNode = stack[stack.length - 1];
      currentNode.left = new TreeNode(data[i]);
      stack.push(currentNode.left);
    }
  }

  return root;
}

//7. Implement a Function to Validate a Binary Search Tree (BST):


function isValidBST(root) {
  return _isValidBST(root, -Infinity, Infinity);
}

function _isValidBST(node, min, max) {
  if (!node) {
    return true;
  }

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return _isValidBST(node.left, min, node.value) && _isValidBST(node.right, node.value, max);
}