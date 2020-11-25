const searchIndex = (nums, target) => {
    if (nums.length === 0) return 0 // if arr is empty return 0
    let low = 0; //beginning index
    let high = nums.length - 1; //end of array
     
    if(nums[high] < target) return high + 1  // if target is higher than the end of the array

    while( low < high ){
        let mid = Math.floor((low + high) / 2) // split arr in half
        if(nums[mid] < target){ // if. the mid point in less than target
            low = mid + 1 // low to = next index
        }else {
            high = mid //high to = mid point
        }
    }
    return low  
};

console.log(searchIndex([1,3,5,6],5))