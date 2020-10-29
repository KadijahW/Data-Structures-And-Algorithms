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

const isPalindrome = (str) => {
    let stack = new Stack()

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    console.log(stack)

    let reversed = ""

    while (!stack.isEmpty()) {
        reversed += stack.pop();

    }
    console.log("res", reversed)

    return reversed === str
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isPalindrome("racecar"))

