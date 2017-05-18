var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    length: 0
  };
  _.extend(someInstance, queueMethods);  
  
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var shift = this.storage[1];
    delete this.storage[1];
    for (var i = 1; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];  
    }
    this.length--;
  }
  return shift;
};

queueMethods.size = function() {
  return this.length;
};