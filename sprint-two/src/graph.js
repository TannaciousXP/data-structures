

// Instantiate a new graph
var Graph = function() {

  this.node = {};
  this.size = 0;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.size ++;
  this.node[this.size] = Node(node.value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var nodeObj in this.node) {
    if (nodeObj.value === node.value) {
      return true;
    }
  }
  
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // look through this.node with for in 
  // if (node === this.node)
  var nodeEdge = [];
  var tempNode = {};
  for (var nodeObj in this.node) {
    if (node.value === nodeObj.value) {
      nodeEdge = nodeObj.edges;
      tempNode = nodeObj;
      break;
    }
  }
  for (var i = 0; i < nodeEdge.length; i++) {
     indexOf(this.node.edges(nodeEdge[i])  
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var Node = function(value) {

  this.value = value;
  this.edges = [];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


