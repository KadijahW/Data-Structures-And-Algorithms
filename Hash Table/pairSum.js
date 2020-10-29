// Given an array of numbers sorted in ascending order (least to greatest), and a
// separate number (a "target" sum), determine if any 2 different numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum.
// Return false if no 2 numbers in the array add up to sum.function pairSum(arr, target) { }

function pairSum(arr, target) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let sum = target - arr[i]
        if (obj[sum] || obj[arr[i]]) {
            return true
        } else {
            obj[sum] = true
        }
    }
    return false
}

// normal test cases
console.log('true?', pairSum([1, 1, 2, 3, 4, 5], 7));
console.log('true?', pairSum([1, 2, 3, 4, 4, 5], 7));
console.log('true?', pairSum([1, 3, 5, 7, 8, 9, 10], 16));
console.log('false?', pairSum([1, 2, 3, 4, 5], 10));
console.log('false?', pairSum([1, 2, 3, 7, 8], 7));
console.log('false?', pairSum([1, 2, 3, 4, 5], 2));
// edge test cases
console.log('false?', pairSum([1], 2));
console.log('false?', pairSum([], 2));
