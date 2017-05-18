var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(stackMethods);
  newObj.storage = {};
  newObj.length = 0;

  return newObj;
};
 
var stackMethods = {

  push: function(value) {
    this.length++;
    this.storage[this.length] = value;
  },

  pop: function() {
    var pop = this.storage[this.length];
    delete this.storage[this.length];
    if (this.length > 0) {
      this.length--;
    }    
    return pop;
  },

  size: function() {
    return this.length;
  }  
};


