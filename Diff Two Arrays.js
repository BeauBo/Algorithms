function diffArray(arr1, arr2) {
  var newArr = [];
  var concatedArr=arr1.concat(arr2);
  
  newArr = concatedArr.filter(function(item){
    
  return arr1.includes(item)==false || arr2.includes(item)==false;
      
    
    
  });
  
  return newArr;
}
