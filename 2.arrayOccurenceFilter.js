// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution must work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]

const occurrenceFilter = (arr, n) => {
    let obj ={}
  console.log(arr)
    // console.log(obj)
  
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]] += 1 
    }else{
      obj[arr[i]] = 1
    }
  }
  console.log(obj)
  let newArr = []
  // return obj
  for(let j in obj){
    if(obj[j] >= n){
     newArr.push(j) 
    }
  }
  return newArr
  }

occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3) // Returns [1, 3]
