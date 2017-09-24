function steamrollArray(arr) {
  
  var flattenedArr=[];
  
  var steamRoll = function(item){
    if(Array.isArray(item)){
      for ( var i=0; i<item.length; i++)
        steamRoll(item[i]);
    }
    else{
      flattenedArr.push(item);
    }
  }; 
  arr.forEach(steamRoll);
  return flattenedArr;
}
