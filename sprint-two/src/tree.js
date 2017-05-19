var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var hasTarget = function(tree) {
    if (tree.value === target) {
      result = true;
    } else if (tree.children) {
      _.each(tree.children, function(child) {
        hasTarget(child);
      });
    } 
    
  };
  hasTarget(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
  O(n);
 */
