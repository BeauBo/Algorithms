function pairElement(str) {
  
 var paired = [];
 
  function match(char){
    
    switch (char){
      
     case "A": 
               paired.push(['A','T']);
       break;
     case "T": 
               paired.push(['T','A']);
       break;
     case "C": 
               paired.push(['C','G']);
       break;
     case "G": 
               paired.push(['G','C']);
       break;
      
       
   }
    
  }
 
  
 for (var i=0; i<str.length; i++){
   
   match(str[i]);
   
 } 
 
  
  return paired;
}
