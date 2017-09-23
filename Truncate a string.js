function truncateString(str, num) {
  var truncateString = "";
  if (num > 3){
    if (str.length > num)
      truncateString = str.slice(0,num-3)+"...";
    else
      truncateString = str;
   }
  else
    truncateString = str.slice(0,num)+"...";
  
  return truncateString;
}
