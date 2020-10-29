class Stack {
    constructor() {
        this.arr = []
    }

    isEmpty() {
        return this.arr.length === 0
    }

    push(value) {
        this.arr.push(value)
    }

    pop() {
        return this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }
}

// Fill stack
// let s = new Stack()
// s.push("{")
// s.push("(")
// s.push(")")
// s.push("}")
// s.push("}")


// console.log(s)

// const sum = (s) => {
//   let result = []
//   let num;
//   while (!s.isEmpty()) {
//     num = s.pop()
//     result.push(num)
//   }
//   console.log(result)
// }
// sum(s)

// function isBalanced(s) {
//  let stack = s
//  let count = 0

// // console.log("here", stack)
// // console.log("S", s)

//   while(!stack.isEmpty()){
 

// if(stack.peek() === '{' || stack.peek() === '('||stack.peek() === '['){
//     count++
//     stack.pop()
// } else if(stack.peek() === '}' || stack.peek()===']'|| stack.peek()===')'){
//     count--
//     stack.pop()

// }
//   }
// if(count === 0) return true
// return false
// }

function isBalanced(str) {
    let stack = new Stack()
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    for(let i = 0; i < str.length; i++){
        if(str[i] === '{' || str[i] === '(' || str[i] === '['){
            stack.push(str[i])
        console.log("stack", stack)

        }
    
        else {
            let open = stack.pop()
            // console.log("opposite", op)

            if (str[i] !== map[open]) {return false};
        }
    }
        if (stack.isEmpty()) {return true};

    return false;
}

console.log(isBalanced("{[()]"))

