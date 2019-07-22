function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    var newArr1 = arr1.map(x=>{
        if(arr2.indexOf(x) == -1){
            return x;
        }
    }).filter(x=>x);
    var newArr2 = arr2.map(x=>{
        if(arr1.indexOf(x) == -1){
            return x;
        }
    }).filter(x=>x);
    newArr = newArr1.concat(newArr2);

    return newArr;
  }
  
var x = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log (x);