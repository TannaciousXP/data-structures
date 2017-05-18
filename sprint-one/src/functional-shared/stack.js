var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    length: 0
  };
  
  // someInstance['storage'] = {};
  // someInstance.length = 0;
  _.extend(someInstance, stackMethods);


  return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

stackMethods.pop = function() {
  var pop = this.storage[this.length];
  delete this.storage[this.length];
  if (this.length > 0) {
    this.length--;
  }    
  return pop;
};

stackMethods.size = function() {
  console.log(this.length);
  return this.length;
};