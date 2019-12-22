function split(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            arr.push(data[i][j]);
        }
    }
    return arr;
}
let start = 'Fase-Immersive'
console.log(start.split('-'));