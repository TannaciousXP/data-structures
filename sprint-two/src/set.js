var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage.indexOf(item) === -1) {
    this.storage.push(item);  
  }  
};

setPrototype.contains = function(item) {
  if (this.storage.indexOf(item) > -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var indexOf = this.storage.indexOf(item);
  if (indexOf > -1) {
    this.storage.splice(indexOf, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  O(n);
 */
