function factorial(n){
    if(n ===1)return 1
    
  if(n >= 2 && n <= 12) {
  return n *factorial(n-1)
    }
  }
  
  console.log(factorial(3))