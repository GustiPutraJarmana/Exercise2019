function slice(arr, x, y) {
    let result = [];
    for (let i = x; i < arr.length; i++){
        if (i < y) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(slice(['a','b','c','d','e','f'], 0, 3));