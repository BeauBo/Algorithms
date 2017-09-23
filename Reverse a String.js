function reverseString(str) {
  var arr = [];
  var reversedArr=[];
  arr = str.split("");
  reversedArr = arr.reverse();
  str = reversedArr.join("");
  return str ;
}
