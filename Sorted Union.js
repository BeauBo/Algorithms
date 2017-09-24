function uniteUnique(arr) {
 /*========================
        My own code
 ==========================*/
/*  for (var i=1; i<arguments.length; i++){
    for (var j=0;j<arguments[i].length; j++){
      if (arguments[0].indexOf(arguments[i][j]) == -1){
        
       arguments[0].push(arguments[i][j]);
      }
      
    }
  }*/
 
 /*=============================
           Example Code
 ===============================*/
  
  var newArr =[];
  var args = Array.prototype.slice.call(arguments);
  newArr = args.reduce(function(arrA,arrB){
    return arrA.concat(arrB.filter(function(item){
      
      return arrA.indexOf(item) == -1;
    }));
  });
  
  return newArr;
}
