function truthCheck(collection, pre) {
 
  return collection.every(function(obj){
    return obj[pre];
  });

}
