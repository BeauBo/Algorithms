function palindrome(str) {
  var underScoreRemovedStr=str.replace(/_/g,"");
  var nonalphanumericRemovedStr=underScoreRemovedStr.replace(/[^\w]/g,"");
  var lowerStr=nonalphanumericRemovedStr.toLowerCase();
  var arr =lowerStr.split("");
  var reversedArr=arr.reverse();
  var jointStr=reversedArr.join("");
  
  
  if (lowerStr==jointStr)
    return true;
  else
    return false;
}
