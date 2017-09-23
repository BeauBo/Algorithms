function factorialize(num) {
  var product=1;
  if(num === 0){
    product =1;
    
  }
  else{
    for (var i =1; i<=num; i++){
      product *= i;
    }
  
  }
  return product;
}
