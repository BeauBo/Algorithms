function addTogether() {

/*=====================
  My own code
  =====================*/
/*  var args = Array.prototype.slice.call(arguments);
  
  
  if (args.every(function(item){
    return typeof(item) == "number";
  })) { 
  
    
    if (arguments.length >= 2){
     
      return args.reduce(function(a,b){
        return a += b;
      });
    }
    else if (arguments.length == 1){
      
     return function addSecondNum(item){
       if (typeof(item) === "number")
         return item + args[0];
       else
         return undefined;
     };
    }
   }
  
  else
    return undefined;*/
    
  /*=========================
     Example Code
    =========================*/  
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")? undefined : args.length > 1 ? args.reduce((acc,n) => acc+=n,0) : (n) => typeof n === "number"? n+args[0] : undefined;
  
  
}
