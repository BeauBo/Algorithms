function sumPrimes(num) {
   
 var primeArr=[2];

  for (var i=3; i<=num ; i++){
    for (var j=2; j<i; j++){
      if (i%j === 0)
        break;
    }
    if (i-j ==0)
      primeArr.push(i);
    
    
  }
  
  
  return primeArr.reduce(function(a,b){
    return a += b;
  });
 
}
