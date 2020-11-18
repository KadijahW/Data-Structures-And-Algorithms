const binarySearch = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        let middle = Math.floor((low + high) / 2) //low [-1,0,3] high [5,9,12]
        let guess = nums[middle] 
       
        if (guess === target) {
            return middle
        } else if (guess > target) {
            high - middle - 1
        } else {
            low = middle + 1
        } 
    }
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2))