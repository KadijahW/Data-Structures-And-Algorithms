// First in first out
class Queue {

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
        // Check if array length is zero
        return this.arr.length === 0;
    }
}


let q = new Queue()
console.log(q)
q.enqueue("a")
q.enqueue("b")
q.enqueue("c")

 
console.log(q)
