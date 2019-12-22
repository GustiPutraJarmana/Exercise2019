function shift(data) {
    let result = [];
    for (let i = 1; i < data.length; i++){
        result.push(data[i]);
    }
    return result;
}
console.log(shift(['Phase 0', 'Phase 1', 'Phase 2', 'Phase 3']));
