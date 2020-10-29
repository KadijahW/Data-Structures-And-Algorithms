// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


// const recursiveSum = (arr) => {
//     let sum = 0
// for(let elem of arr){
//     if(elem){
//         sum += elem
//     }
// }
// }

// const recursiveSum = (arr) => {
//   if(arr.length === 1){return arr[0]}arr.push(arr[0] + arr[1])
//   console.log(arr)
//     let sum = 0
// arr.shift()
// arr.shift()
// console.log(arr)
// recursiveSum(arr)
// }

const recursiveSum = (arr) => {
    if(!arr.length) return 0
    return arr.pop() + recursiveSum(arr)
  }
    
const arr1 = [5, 2, 9, 11]
recursiveSum(arr1) // should return 27
