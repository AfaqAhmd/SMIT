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