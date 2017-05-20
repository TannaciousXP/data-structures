



// Instantiate a new graph
var Graph = function() {
  // this.graph = [];
  // this.edges = [];
  this.nodesList = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.graph.push({name: node, edge: [];});
  this.nodesList.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodesList.indexOf(node) > -1) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodesList.length; i++) {
    if (this.nodesList[i] === node) {
      this.nodesList.splice(i, 1);
    }
  }
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(node)) {
      this.edges.splice(i, 1);
    }
  }
  // _.each(this.nodesList, function(nod, idx) {
  //   if (nod === node) {
  //     this.nodesList.splice(idx, 1);
  //   }
  // });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {    
    if (this.edges[i].indexOf(fromNode) > -1 && this.edges[i].includes(toNode)) {
      return true;
    } 

  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodesList.length; i++) {
    cb(this.nodesList[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





