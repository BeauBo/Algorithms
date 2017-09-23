function myReplace(str, before, after) {
 /*====================================
           My own code
 ======================================*/
  var splitedStr = str.split(' ');
  var index = splitedStr.findIndex(function(item){
    return item == before;
  });
  
   if (splitedStr[index][0]== splitedStr[index][0].toUpperCase()){
     var re = new RegExp(after[0]);
   var  newAfter=after.replace(re,after[0].toUpperCase());
     var reg = new RegExp(before);
     str = str.replace(reg,newAfter);
   }
   else{
      var regu = new RegExp(before);
      str =  str.replace(regu,after);
   }
   
   
   /*=================================
               Example Code
   ===================================*/
  var index = str.indexOf(before);
 
  if (str[index]== str[index].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1); 
  }
  str = str.replace(before,after);
  return str ;

}
