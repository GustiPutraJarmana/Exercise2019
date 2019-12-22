function splice(data, start, end, add) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (i === start) {
            if (add.length !== 0) {
                result.push(add);
                if (end == 0) {
                    result.push(data[i]);
                } else {
                    i = end;
                }
            }
        } else {
            result.push(data[i]);
        }
    }
    return result;
}
console.log(splice(['Phase 0', 'Phase 2', 'Phase 3'], 1, 0, 'Phase 1'));