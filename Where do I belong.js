function getIndexToIns(arr, num) {
  var sortArr=arr.sort(function(a,b){
           return a-b;
  });
  var i=0;
  while (sortArr[i]<num){
    i++;
  }
  return i;
}
