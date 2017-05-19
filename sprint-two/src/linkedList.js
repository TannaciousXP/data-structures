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
    
    // var testNode = list.head;
    
    // while (testNode.next !== null) {
    //   if (testNode.value === target) {
    //     return true;
    //   } else {
    //     testNode = testNode.next;
    //   }
    // } 
    // if (testNode.value === target) {
    //   return true;
    // }
    // return false;
    
    var hasTarget = function(testNode) {
      var result = false;
      if (testNode.value === target) {
        result = true;
      } else if (testNode.next !== null) {
        return hasTarget(testNode.next);
      }
      return result;
    };
    
    return hasTarget(list.head);
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
  O(n)
 */
