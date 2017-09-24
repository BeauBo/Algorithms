var curInv = arr1.reduce(function(acc,curr){
    acc[curr[1]] = curr[0];
    return acc;
  },{});
  var newInv = arr2.reduce(function(acc,curr){
    acc[curr[1]] = curr[0];
    return acc;
  },{});
   
  var updated_arr = arr2.reduce(function(acc,curr){
    if(curInv.hasOwnProperty(curr[1])){
      var sum = curInv[curr[1]] + curr[0];
      acc.push([sum,curr[1]]);
    }
    else{
      acc.push(curr);
    }
    return acc;
  },arr1.filter(function(val){
    return !newInv.hasOwnProperty(val[1]);
  }));
    return updated_arr.sort(function(a,b){
      if(a[1]>b[1])
        return 1;
      if(a[1]<b[1])
        return -1;
      if(a[1]==b[1])
        return 0;
    });
  
 
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
