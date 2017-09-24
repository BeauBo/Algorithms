function sym(args) {
args = Array.prototype.slice.call(arguments); 
 return args.reduce(function(acc,current){
   var accFiltered = acc.filter(function(val){
     return current.indexOf(val) == -1;
   });
   var currentFliterd = current.filter(function(val){
     return acc.indexOf(val) == -1;
   });
   return  accFiltered.concat(currentFliterd).filter(function(val,pos,self){
     return self.indexOf(val) == pos;
   }).sort(function(a,b){
     return a-b;
   });
 }); 
