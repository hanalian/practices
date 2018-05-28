var quickSort=function (arr) {
    //避免修改原数组
    arr = JSON.parse(JSON.stringify(arr));
    if(arr.length<=1){
        return arr;
    }
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
var arr = [85, 24, 63, 24, 45, 17, 31, 96, 50];

quickSort(arr);
console.log(quickSort(arr)); //[17, 24, 24, 31, 45, 50, 63, 85, 96]