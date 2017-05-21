
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._key = []; //This is tuple where odd is index and even is key
  count = 0;
  this._timeToDouble = this._limit * .75;
  this._timeToHalve = this._limit * .25;
  this._bucket = [];
  
};

HashTable.prototype.insert = function(k, v) {
   
  //Get the new index for the key given
  var index = getIndexBelowMaxForKey(k, this._limit);

  //Get index of key on Key array to check if key is new key duplicate
  var keyExist = this._key.indexOf(k);

  //Check if the value has been inserted for the index
  var valueExist = this._storage.get(index, this._limit);

  //If key exist and value in storage is not undefined. 
  // It means its a duplicate. We need to overwrite
  if (keyExist > -1 && valueExist !== undefined) {
    this._storage.set(index, v);
    var replace = this._bucket.indexOf([k, valueExist]);
    this._bucket[replace] = [k, v];
    
  } else {
  
  //If key does not exist but value is return for index in storage
  //It means its a collison. We need to create a array to store data
    if (keyExist === -1 && valueExist !== undefined) {
      var newArray = [];
      
      //get key of existing index value;
      var collisionKey = this._key[(this._key.indexOf(index)) + 1];
  
      //Create a tuple of Key and Value for collision  
      newArray.push(collisionKey, valueExist);
      newArray.push(k, v);

      //Push the new array to storage
      this._storage.set(index, newArray);
      this._bucket.push([k, v]); 
      count++;
    } else {
      //No key or no value
      if (keyExist === -1 && valueExist === undefined) {
        this._storage.set(index, v);
        this._bucket.push([k, v]); 
        this._count++;
      }
    }
  
      
  }
 
  //Insert key and index in array
  this._key.push(index, k);
  this.double(this._count);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retreive = this._storage.get(index);

  if (Array.isArray(retreive)) {
    return retreive[(retreive.indexOf(k) + 1)];
  } else { 
    return retreive;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._count--;
  if (this._count < this._timeToHalve) {
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
  }
};

HashTable.prototype.double = function(count) {
  if (count > this._timeToDouble) {
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < this._bucket.length; i++) {
      this.insert(this._bucket[i][0], this._bucket[i][1]);
    }
  }
};

/*hash*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


