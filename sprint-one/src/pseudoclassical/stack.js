var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.length = 0;

};
 
Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

Stack.prototype.pop = function() {
  var pop = this.storage[this.length];
  delete this.storage[this.length];
  if (this.length > 0) {
    this.length--;
  }    
  return pop;
};

Stack.prototype.size = function() {
  console.log(this.length);
  return this.length;
};


