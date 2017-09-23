function rot13(str) { 
  var arr=str.split('');
  var newArr = [];
  var code = str.charCodeAt(0);
  for (var i=0; i<arr.length; i++){
    if (arr[i].charCodeAt()<65 || arr[i].charCodeAt()>90){
      code = arr[i].charCodeAt();
      newArr[i]= String.fromCharCode(code);
    }
    else{
      if(arr[i].charCodeAt()<78){
        code=arr[i].charCodeAt()+13;
        newArr[i]= String.fromCharCode(code);
      }
      else{
        code=arr[i].charCodeAt()-13;
        newArr[i]= String.fromCharCode(code);
      }
        
    }
      
  }
  return newArr.join('');
}
