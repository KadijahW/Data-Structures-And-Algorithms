// Q1.
// Given a linked list, write a function to traverse it and print each value in order. 

class Node {
  constructor(val) {
    this.head = null
    this.next = null
    this.val = val
  }
}

// Create nodes
let n1 = new Node(556)
let n2 = new Node(41)
let n3 = new Node(33)
let n4 = new Node(150)
let n5 = new Node(11)

// Connect nodes, in turn creating the list
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

// Implement your code to traverse
const traverse = (val) => {
 let newNode = new Node(val);
       if(this.val === null){
       this.val = newNode;
      } 
       else { 
       let curr = this.val;
       while(curr.next !== null){
       curr = this.next;
      }
       curr.next = newNode;
      }
}

// example
traverse(n1)

// should print out:
// 556
// 41
// 33
// 150
// 11
