
// /*
//  ********** NOTE: **********
//  * Do not edit this code unless you see a bug!
//  */


// // This class represents an array with limited functionality and a maximum size.
// // It will ensure that you don't accidentally try to use up too much space.
// //
// // Usage:
// //   limitedArray.set(3, 'hi');
// //   limitedArray.get(3); // returns 'hi'

// var LimitedArray = function(limit) {
//   var storage = [];

//   var limitedArray = {};
//   limitedArray.get = function(index) {
//     checkLimit(index);
//     return storage[index];
//   };
//   limitedArray.set = function(index, value) {
//     checkLimit(index);
//     storage[index] = value;
//   };
//   limitedArray.each = function(callback) {
//     for (var i = 0; i < storage.length; i++) {
//       callback(storage[i], i, storage);
//     }
//   };

//   var checkLimit = function(index) {
//     if (typeof index !== 'number') {
//       throw new Error('setter requires a numeric index for its first argument');
//     }
//     if (limit <= index) {
//       throw new Error('Error trying to access an over-the-limit index');
//     }
//   };

//   return limitedArray;

// 
// };
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._key = []; //This is tuple where odd is index and even is key
};

HashTable.prototype.insert = function(k, v) {
  debugger;
   
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
  } else {
  
  //If key does not exist but value is return for index in storage
  //It means its a collison. We need to create a array to store data
    if (keyExist === -1 && valueExist !== undefined) {
      var newArray = [];
      
      //get key of existing index value;
      var collisionKey = this._key[(this._key.indexOf(index)) + 1];
  
      //Create a array of Key and Value for collision  
      newArray.push([collisionKey, valueExist]);
      newArray.push([k, v]);

      //Push the new array to storage
      this._storage.set(index, newArray);
    } else {
      //No key or no value
      if (keyExist === -1 && valueExist === undefined) {
        this._storage.set(index, v);
      }
    }
      
  }
  //Insert key and index in array
  this._key.push(index, k);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retreive = this._storage.get(index);

  if (Array.isArray(retreive)) {
    return retreive.k;
  } else { 
    return retreive;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*hash*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


