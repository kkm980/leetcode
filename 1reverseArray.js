// https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

let list =  [1,2,3,4,5];
function revArr(arr){
    let i=0;
    let j=arr.length-1;
    while(i!=j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}
console.log(revArr(list))