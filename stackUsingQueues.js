class Queue1{

    constructor() {
        this.arr = [];
    }

    enqueue(value) {
        this.arr.push(value);
    }

    dequeue() {
        return this.arr.shift();
    }

    peek() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.que = new Queue1()
    this.maniQueue = new Queue1() //using to hold the elements as. we manipulate the main queue.
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.que.enqueue(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.que.isEmpty()){
        return null
    }
    
    while(!this.que.isEmpty()){
        //while main queue is not empty
        let popped = this.que.dequeue() //saving element in a variable
        if(this.que.isEmpty()){
            //push the last element dequeued back in main queue
            this.que.enqueue(popped)
        }else{
            //add elements to queue that's being manipulated
            this.maniQueue.enqueue(popped)
        }
    }
    //once we get the top element as the first in queue then push elements from the manipulated queue back into main 
    while(!this.maniQueue.isEmpty()){
        let el = this.maniQueue.dequeue()
        this.que.enqueue(el)
    }
    
    return this.que.dequeue() 
    //returning last element in stack which is now first in queue and acting like pop for stack.
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    let elem; 
     while(!this.que.isEmpty()){
        elem = this.que.dequeue()
            this.maniQueue.enqueue(elem)
    }
    while(!this.maniQueue.isEmpty()){
        let el = this.maniQueue.dequeue()
        this.que.enqueue(el)
    }
    return elem;
};
// 1 - 2 - 3
//1- 2 -3 elem = 3

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.que.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */