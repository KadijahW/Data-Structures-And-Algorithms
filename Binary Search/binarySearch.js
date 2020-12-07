const binarySearch = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        let middle = Math.floor((low + high) / 2) 
        let guess = nums[middle] 
       
        if (guess === target) {
            return middle
        } else if (guess > target) {
            high = middle - 1
        } else {
            low = middle + 1
        } 
    }
    return -1
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2))
console.log(binarySearch([5], 5))