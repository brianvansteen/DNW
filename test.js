M = [[1, 3, 5, 7], [9, 23, 25, 27], [31, 33, 45, 72], [82, 83, 95, 107], [120, 150, 180, 200]];

function Search_Matrix(M, low, high, x){
    C=4;
    if (low <= high) {
        mid = Math.floor(low + (high-low)/2);
        console.log("Mid calculated: " + mid);
        if((M[mid][0]<=x) && (M[mid][C-1]>=x)) {
            console.log("<=x and >=x" + mid);
            console.log(M[mid][0], M[mid][C-1]);
            return mid
        } else {
        if(M[mid][0]>x){
            console.log(">x; call M,low,mid-1 " + low + (mid - 1));
            return Search_Matrix(M,low,mid-1,x)}
        if(M[mid][C-1]<x){
            console.log("<x; call M,mid+1,high " + (mid + 1) + high);
            return Search_Matrix(M,mid+1,high,x)}
    }
    }else {
        return -1}
    }

console.log(Search_Matrix(M, 0, 4, 20));