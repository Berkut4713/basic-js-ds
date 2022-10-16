const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
  }
  add(data) {
    this.rootValue = addData(this.rootValue, data);
    function addData(node, data) {
      if (!node) {return new Node(data);}
      if (node.data === data) {return node;}
      if (node.data < data) {node.right = addData(node.right, data);}
      if (node.data > data) {node.left = addData(node.left, data);}
      return node;
    }
  }

  has(data) {
    return checkValue(this.rootValue, data);

    function checkValue(node, data) {
      if (!node) {return false;}
      if (node.data === data) {return true;}
      if (node.data < data) {return checkValue(node.right, data);
      } else {return checkValue(node.left, data);}
    }
  }

  find(data) {
    return searchNode(this.rootValue, data);

    function searchNode(node, data) {
      if (!node) {return null;}
      if (node.data === data) {return node;}
      if (node.data > data) {return searchNode(node.left, data);}
       else {return searchNode(node.right, data);}
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};