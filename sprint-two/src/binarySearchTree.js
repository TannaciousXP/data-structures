var BinarySearchTree = function(input) {

  var someInstance = {};

  someInstance.value = input;
  someInstance.left = null;
  someInstance.right = null;


  someInstance.insert = function(info) {
    debugger;
    if (this.value !== info) {
      var compare = compareNodes(this.value, info);
      if (compare) {
        if (this.left !== null) {
          this.left.insert(info);
        } else {
          this.left = BinarySearchTree(info);
        } 
      } else {
        if (this.right !== null) {
          this.right.insert(info);
        } else {
          this.right = BinarySearchTree(info);
        } 
      }
    }
  };

  var haveNode = function(tree, target) {
    if (this.left !== null) {
      return this.left.contains(target);
    }

    if (this.right !== null) {
      return this.right.contains(target);
    }
  };

  someInstance.contains = function(target) {

    if (this.value === target) {
      return true;
    }
    
    if (compareNodes(this.value, target)) {
      if (this.left !== null) {
        return this.left.contains(target);
      } 
    } else {
      if (this.right !== null) {
        return this.right.contains(target);
      }
    }

    return false;

  };

  someInstance.depthFirstLog = function(callback) {
    
    callback(this.value);
    if (this.left != null) {
      this.left.depthFirstLog(callback);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(callback);
    }  
  
  };

  var compareNodes = function(value1, value2) {
    return value1 > value2 ? true : false;
  };

  return someInstance;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
