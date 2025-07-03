
var MyQueue = function() {
    this.mainStack = [];   // Holds elements in queue order (front at top)
    this.helperStack = []; // Used temporarily during push
};

/** 
 * Pushes element x to the back of queue
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Step 1: Move all elements from mainStack to helperStack
    while (this.mainStack.length > 0) {
        this.helperStack.push(this.mainStack.pop());
    }

    // Step 2: Push the new element to helperStack
    this.helperStack.push(x);

    // Step 3: Move everything back to mainStack
    while (this.helperStack.length > 0) {
        this.mainStack.push(this.helperStack.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.mainStack.pop();
};

/**
 * Get the front element
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack[this.mainStack.length - 1];
};

/**
 * Returns true if the queue is empty, false otherwise
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length === 0;
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */