function confirmEnding(str, target) {
  var arr = str.split(" ");
  if (arr[arr.length-1].substr(arr[arr.length-1].length-target.length)===target)
    return true;
  else
  return false;
}
