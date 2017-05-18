var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  
  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };
  
  someInstance.dequeue = function() {
    if (size > 0) {
      var shift = storage[1];
      delete storage[1];
      for (var i = 1; i < size; i++) {
        storage[i] = storage[i + 1];
      }
      size--;
    }
    

    return shift;
  };

  someInstance.size = function() {
    return size;
  };
  // Implement the methods below
  return someInstance;

};


