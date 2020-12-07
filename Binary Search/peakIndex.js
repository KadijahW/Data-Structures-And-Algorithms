const peakIndex = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low < high) { //while low and high aren't the same
        
        const mid = Math.floor((high + low) / 2); 
       
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) { 
            // check if mid point is greater than prev index && greater than the index after
            return mid;
            
        } else if (arr[mid] > arr[mid - 1]) {
            //if mid point is greater than previous index then mid becomes low
            low = mid;
        } else {
            high = mid;
        }
    }
    return 0;
};

console.log(peakIndex([0,1,0]))