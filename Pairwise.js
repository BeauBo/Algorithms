function pairwise(arr, arg) {
  
/*  var pairedArr = arr;
  
 return pairedArr.reduce(function(acc,curr,index){
   var pairedNum = arg - curr;
   var sum=0;
   if(pairedArr.indexOf(pairedNum) !==-1 && pairedArr.indexOf(pairedNum) !== index){
     sum =index + pairedArr.indexOf(pairedNum);
     pairedArr.splice(index,1,NaN);
      pairedArr.splice(pairedArr.indexOf(pairedNum),1,NaN);
     return acc+sum;
   }
   
   return acc;
 },0);*/
 
 var pairedArr = arr;
  var sum = 0;
  for (var i=0; i<arr.length; i++){
    for (var j=i+1; j<arr.length; j++){
      if (arr[i]+arr[j] == arg){
         sum += i+j;
        arr[i] = NaN;
        arr[j]= NaN;
      }
    }
  }
 return sum;
}
