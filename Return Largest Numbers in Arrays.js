function largestOfFour(arr) {
  var largestNum=0;
  var newArr = [];
  for (i=0;i<arr.length;i++){
    largestNum=arr[i][0];
    for(j=1;j<arr[i].length;j++){
      if(largestNum<=arr[i][j])
        largestNum=arr[i][j];
    }
    newArr[i]=largestNum;
    
  }
  return newArr;
}
