function sumAll(arr) {
  
  
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var newArr = [min];
  var newNum = min;
  for (var i=1; i<= max-min; i++){
    newNum +=1;
    newArr[i]=newNum;
  }
  
  var sum= newArr.reduce(function(a,b){
      return a+b;
  });
  
  return sum;  
  
 
}
