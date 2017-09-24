function spinalCase(str) {
  
  var newStr=str[0];
  for (var i=1;i<str.length; i++){
   if((/[A-Z]/g).test(str[i])==true)
     newStr = newStr+' '+str[i];
   
    else
      newStr += str[i];
  }
  
//  return str.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+|_+/g,"-").toLowerCase();  //alternative
  return newStr.replace(/_ /g,"-").replace(/  /g,"-").replace(/ /g,'-').toLowerCase();
 // return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); //alternative
}
