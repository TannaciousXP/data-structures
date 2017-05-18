var Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = Object.create(queueMethods);
    someInstance.length = 0;
    someInstance.storage = {};
    return someInstance;
};

var queueMethods = {
    enqueue: function(value) {
        this.length++;
        this.storage[this.length] = value;
    },
    dequeue: function() {
        if (this.length > 0) {
            var shift = this.storage[1];
            delete this.storage[1];
            for (var i = 1; i < this.length; i++) {
                this.storage[i] = this.storage[i + 1];
            }
            this.length--;
        }
        return shift;
    },
    size: function() {
        return this.length;
    }
};
