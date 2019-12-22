function join(data, parameter) {
    var result = '';
    for (let i = 0; i < data.length; i++) {
        if (i == data.length - 1) {
            result += data[i];
        } else {
            result += data[i];
            result += parameter;
        }
    }
    return result;
}
console.log(join(['H', 'a', 'c', 'k', 't', 'i', 'v', '8'], '!'));
console.log(join('Gabung', ':'));