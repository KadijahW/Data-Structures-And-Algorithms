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

const recursiveSum = (arr) => {
    sum(arr)
}
const sum = (arr) => {
let count = 0
for(let elem of arr){
if(arr.length === null){
console.log(count)
}else {
console.log(count += elem)
}

}
}
    
const arr1 = [5, 2, 9, 11]
recursiveSum(arr1) // should return 27
