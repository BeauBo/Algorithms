function titleCase(str) {
  
  var arr=str.toLowerCase().split(" ");
  var arrUpperCase=[];
  for (var i=0;i<arr.length;i++){
    arrUpperCase[i] = arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
  }
  var titleCaseStr = arrUpperCase.join(" ");
  return titleCaseStr;
}
