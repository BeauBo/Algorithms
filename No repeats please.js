function permAlone(str) {
  var arr=str.split('');
 // var permutation=[];
  var regex = /([a-z]|[A-Z])\1+/;
  var num=0;
  function swap(a,b){
    var tem = arr[a];
    arr[a] = arr[b];
    arr[b]= tem;
  }
  function generate(int){
    if (int===1 && !regex.test(arr.join(''))){
      num++;
    }else{
      for (var i=0; i<int; i++){
        generate(int-1);
        swap(int%2 ? 0 : i,int-1);
      }
    }
  }
  generate(arr.length);
/*  permutation=permutation.filter(function(val){
    return !val.match(regex);
  });*/
  return num;
}
