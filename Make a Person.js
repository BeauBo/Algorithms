var Person = function(firstAndLast) {
   var arr =  firstAndLast.split(' ');
  this.getFirstName = function(){
   
  return arr[0];
};
    this.getLastName  = function(){
   
  return arr[arr.length -1];
};
    this.getFullName = function (){
   
  if (arr >=2)
    return arr[0]+" "+arr[1] +" "+arr[2];
  else
    return arr[0]+" "+arr[1];
};
   this.setFirstName = function(first){
      
  arr[0] = first;
 
};
    this.setLastName  = function(last){
  arr[arr.length -1] = last;
  
};  
    this.setFullName  = function(firstAndLast){
  arr = firstAndLast.split(' ');
  
};
    
};
