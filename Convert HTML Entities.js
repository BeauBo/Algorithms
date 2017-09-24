function convertHTML(str) {
 
 /*=======================
      My own code
 =========================*/ 
  
  // &colon;&rpar;
  
/*  var strArr = str.split('');
 
  for (var i=0; i<str.length;i++){
    switch (strArr[i]){
      case "&": strArr[i] = strArr[i].replace("&","&amp;");
       break;
        
      case "<": strArr[i] = strArr[i].replace("<","&lt;");
        break;
        
      case ">": strArr[i] = strArr[i].replace(">","&gt;");
        break;
      case '"': strArr[i] = strArr[i].replace('"',"&quot;");
        break;
        
      case "'": strArr[i] = strArr[i].replace("'","&apos;");
        break;
     }
    return strArr.join('');
  }*/
  
  /*========================
         Example Code
  ==========================*/
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;");
     
  return str;
 
}
