function dropElements(arr, func) {
  
/*============================
       My own code
==============================*/   
/*   var newArr = arr.filter(func);  
   var index = arr.indexOf(newArr[0]);
  var result = arr.slice(index,arr.length);
   if (index == -1)
     return result =[];
return result;*/

/*=============================
      The code i like
  =============================*/
  /* return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length,arr.length);*/

/*===========================
     the use of shift()
  ============================*/
  
  var loops = arr.length;
  for (var i=0; i<loops; i++){
    if (func(arr[0]))
      break;
    else
      arr.shift();
  }
  return arr;
}
