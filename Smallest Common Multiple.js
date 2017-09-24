function smallestCommons(arr) {
   arr.sort(function(a,b){
    return b-a;
  });
  var newArr = [];
  var max = arr[0], min=arr[1];
 for (var i = max; i >= min; i-- ){
     newArr.push(i);
  }
  
  var n =1 ; 
  var lcm =0;
  do { 
  
   lcm = newArr[0]*newArr[1]*n;
   
  for ( i = 2; i<newArr.length;i++){
    
    
    if (lcm % newArr[i] !== 0){
      break;
    }
    
  }
    n++;
  } while(i !== newArr.length);
  return lcm;
}
