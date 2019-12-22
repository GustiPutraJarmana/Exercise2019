function sort(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] > data[j+1]) {
                let result = data[j];
                data[j] = data[j+1];
                data[j+1] = result;
            }
        }
    }
    return data;
}
console.log(sort([0, 1, 9, 7, 8, 6, 4, 5, 3, 2]));