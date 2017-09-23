function whatIsInAName(collection, source) {
  
  var arr = [];
  
  var arrKeys= Object.keys(source);
  
  return collection.filter(function(obj){
    return arrKeys.every(function(key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
