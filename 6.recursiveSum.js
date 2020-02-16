// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


const recursiveSum = (arr) => {
    let sum = 0
for(let elem of arr){
    if(elem){
        sum += elem
    }
}
return sum;

}

const arr1 = [5, 2, 9, 11]
recursiveSum(arr1) // should return 27
