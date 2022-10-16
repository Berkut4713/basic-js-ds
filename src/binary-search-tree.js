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

  remove(data) {
    this.rootValue = removeNode(this.rootValue, data);
    function removeNode(node, data) {
      if (!node) {return null;}
      if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
      } else if (node.data > data) {
          node.left = removeNode(node.left, data);
          return node;
      } else {
          if (!node.left && !node.right) {return null;}
          if (!node.left) {
            node = node.right;
            return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let currentData = node.right.data;
        let nextNode = node.right.left;
        while (nextNode) {
          currentData = nextNode.data;
          nextNode = nextNode.left;
        }
        node.data = currentData;
        node.right = removeNode(node.right, currentData);
        return node;
      }
    }
  }

  min() {
    let firstNode = this.rootValue;
    if (!firstNode) {return null;}
    let currentNode = firstNode.data;
    let nextNode = firstNode.left;
    while (nextNode) {
      currentNode = nextNode.data;
      nextNode = nextNode.left;
    }
    return currentNode;
  }

  max() {
    let firstNode = this.rootValue;
    if (!firstNode) {return null;}
    let currentNode = firstNode.data;
    let nextNode = firstNode.right;
    while (nextNode) {
      currentNode = nextNode.data;
      nextNode = nextNode.right;
    }
    return currentNode;
  }
}

module.exports = {
  BinarySearchTree
};