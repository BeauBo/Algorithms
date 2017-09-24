function sumFibs(num) {
   var fibonacci = [1,1];
   var oddFibonacci=[];
 
  var currentNum=0;
  
  for (var i=2; currentNum + fibonacci[i-2] <= num; i++ ){
    currentNum = fibonacci[i-2]+fibonacci[i-1];
    fibonacci.push(currentNum);
    
  }
    
  
 oddFibonacci = fibonacci.filter(function(item){
    return item%2 == 1;
  });
  return oddFibonacci.reduce(function(a,b){
   return a+=b;
  });
  
 
 }
