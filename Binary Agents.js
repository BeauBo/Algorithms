function binaryAgent(str) {
/*====================
      My own code
  ====================*/
/*  var arr = str.split(' ');
  var newStr =[];
  var code=[];
  for (var i=0; i<arr.length; i++){
   code.push(Number.parseInt(arr[i],2));
   newStr.push(String.fromCharCode(code[i]));
  }
  return newStr.join("");*/

/*=========================
     Example Code
   =========================*/ 
  return String.fromCharCode(...str.split(' ').map(function(item){return parseInt(item,2);}));
  
}
