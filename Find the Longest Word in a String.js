function findLongestWord(str) {
  var arr=str.split(" ");
  var LongestWord=0;
  for(var i=0; i<arr.length;i++){
    if(LongestWord<arr[i].length){
      LongestWord=arr[i].length;
    }
  }
  
  return LongestWord;
}
