
// the case when the first positon is vowel
  var re = /[aeiou]/gi;
  if (re.test(str[0]) ){
      str = str+"way";
      }
  else{
// find the index of the left most vowel 
    /*======================
          My own code
    ========================*/
    /* var index = 0;
     for (  index=0; index<str.length; index++){
        var chr = str[index];
        if (chr == 'a' || chr =='e' || chr =='i'|| chr =='o'||chr == 'u'){
            break;
        }
      }*/
      
    /*========================
          Example Code
    ==========================*/
    var index = str.indexOf(str.match(re)[0]);
     
    str = str.substr(index,str.length-index)+str.substr(0,index)+"ay";
   }
  
  
  
  
  return str;

}
