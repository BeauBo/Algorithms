function fearNotLetter(str) {
  var missLetters = '';
  
 
  for (var i=0; i<str.length; i++){
    var first = str.charCodeAt(i);
    var next = str.charCodeAt(i+1);
    var diff = next - first;
    
    if (diff > 1 ){
      for (var j = 1; j<diff;j++){
        missLetters += String.fromCharCode(first+j);
      }
      
    }
    
  }
    if (missLetters == "")
  return undefined;
    else
   return missLetters;

  
}
