function convertToRoman(num) {
 var deciArr= [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000];
 var romanArr=["I",'II','III','IV','V','VI','VII','VIII','IX','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M'];
 var resultArr=[];
  
 var amoutOfM=(num - num%1000)/1000;
  
 var remainder = num%1000; 
    
  for(var i=0; i<amoutOfM;i++){
      resultArr.push("M");
    }
    
  while(remainder>0){
    
    i=0;
    
    while(deciArr[i]<=remainder){
      i++;
    }
      
    var index = i-1;
    
    resultArr.push(romanArr[index]);
    remainder=remainder-deciArr[index];
  }
  

 return resultArr.join('');
}

