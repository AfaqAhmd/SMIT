



var sort = [1,3,7,8,5,9];
for (let i=0; i<sort.length;i++){
    for (let j=0; j<sort.length; j++){
        if(sort[j]>sort[j+1]){
            let temp = sort[j];
            sort[j]=sort[j+1];
            sort[j+1]=temp;
        }
    }    
}

console.log(sort);



//insertion sorting 
var arr = [3,2,4,6,9,7]
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

console.log(arr);