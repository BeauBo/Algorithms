function destroyer(arr) {
  var args=arr.slice.call(arguments);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<args.length;j++){
      if (arr[i]===args[j])
        delete arr[i];
    }
  }
  return arr.filter(Boolean);
}