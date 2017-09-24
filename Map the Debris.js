function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriod = 0;
  var newArr =[];
  
  
  arr.forEach(function(val){
    orbitalPeriod = 2*Math.PI*Math.sqrt(Math.pow(earthRadius+val.avgAlt,3)*Math.pow(GM,-1));
    orbitalPeriod = Math.round(orbitalPeriod);
    delete val.avgAlt;
    
    val.orbitalPeriod = orbitalPeriod;
    newArr.push(val);
  });
  return newArr;
  
   
}
