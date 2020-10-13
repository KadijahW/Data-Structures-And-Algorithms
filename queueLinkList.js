class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    enqueue(val) {
        let node = new Node(val);
        let current;

        if(this.head === null){
           this.head = node
            current = node
            this.tail = node
        } else{
            this.tail.next = node 
            this.tail = node
        }
        this.length += 1

        // if(this.head === null){
        //     this.head = node;
        //     current = this.head;
        // }else{
        //     current = this.head;
        //     while(current.next){
        //         current = current.next;
        //     }
        //     current.next = node
        // }
        // this.length +=1
    }

    dequeue() {
       let current = this.head;
       if(current){
        let val = current.val;
        current = current.next;
        this.head = current;
        this.length -= 1
        return val
       }
    }

    peek() {
       if(this.head){
           return this.head.value
       }
       return null
    }

    isEmpty() {
        return this.length === 0
    }
}

let que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
console.log("enqueue", que)

que.dequeue()
console.log("dequeue", que)
