var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {

    //Create new instance for Node
    var newNode = Node(value);
    
    //Increase length and add Node to LinkedList;
    list.length++;
    list[length] = newNode;
    
    //Check for first object vs. existing List
    if (list.length === 1) {
      list.head = newNode;  
    } else {
      list.tail.next = newNode;
    }
    
    //Change the tail to new Object created
    list.tail = newNode;

  };
  // should remove the head from the list when removeHead is called
  // should return the value of the former head when removeHead is called
  list.removeHead = function() {
    // create a variable to store the removedHead
    if (list.head === null) {
      return null;
    } 
    var removedHead = list.head.value;
    
    
    if (list.length === 1) {
      list.head = null;
      list.tail = null;      
    } else {
      list.head = list.head.next;
    }
    delete list[1];
    list.length--;
    
    
    // return variable removedHead
    return removedHead;
  };

  list.contains = function(target) {
    //Assign Head to first object
    // debugger;
    
    var testNode = list.head;
    
    while (testNode.next !== null) {
      if (testNode.value === target) {
        return true;
      } else {
        testNode = testNode.next;
      }
    } 
    
    return false;
    // var testNode = list.head;
    // var hasTarget = function(testNode) {
    //   var result = false;
    //   if (testNode.next !== null) {
    //     if (testNode.value === target) {
    //       return result = true;
    //     } else {
    //       testNode = testNode.next;
    //       hasTarget(testNode);
    //     } 
    //   } else if (testNode.next === null) {
    //     if (test.value === target) {
    //       return result = true;
    //     } else {
    //       return result;
    //     }
    //   }
    // };
    // return hasTarget(testNode);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
