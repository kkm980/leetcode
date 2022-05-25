// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

let list = [2,7,4,9,0,8,5,1];

function findMinMax(arr){
    let min,max,i=0;
    if(arr.length%2==0){
        min=max=arr[0];
        i=1;
    }
    else{
        min=Math.min(arr[0],arr[1]);
        max=Math.max(arr[0],arr[1]);
        i=2;
    }
    while(i<arr.length-1){
        if(arr[i]<arr[i+1]){
            min=Math.min(min,arr[i]);
            max=Math.max(max,arr[i+1]);
        }
        if(arr[i]>arr[i+1]){
            min=Math.min(min,arr[i+1]);
            max=Math.max(max,arr[i]);
        }
        i+=2;
    }
    
    return [min,max];
}

findMinMax(list);