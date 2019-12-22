function pop(arr) {
    let result = [];
    for (let i = 0 ; i < arr.length - 1; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(pop(['Phase 0', 'Phase 1', 'Phase 2', 'Phase 3']));