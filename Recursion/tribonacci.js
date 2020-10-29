// Implement recursive Nth Tribonacci  number
//f(n-1) + f(n-2) + f(n-3)
//memomization- A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.
const tribonacci = (n) => {
    let memo = {
                0:0, 
                1:0, 
                2:1
                }; 
  
    if(memo[n] !== undefined) return memo[n]; 
    memo[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3); 
      return memo[n]; 
   
  }
  console.log(tribonacci (4))
