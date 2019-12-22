$_$wp(1);
function circularOperation(angka) {
    $_$wf(1);
    var result = ($_$w(1, 0), 0);
    for (var i = 0; $_$w(1, 1), i < angka.length; i++) {
        $_$w(1, 2), $_$tracer.log(angka[i], 'angka[i]', 1, 2);
        $_$w(1, 3), $_$tracer.log(i, 'i', 1, 3);
        if ($_$w(1, 4), i % 2 === 0) {
            $_$w(1, 5), result = result + angka[i];
        } else {
            $_$w(1, 6), result = result - angka[i];
        }
    }
    return $_$w(1, 7), result;
}
$_$w(1, 8), $_$tracer.log(circularOperation([
    1,
    2,
    3,
    4,
    5
]), 'circularOperation([\n    1,\n    2,\n    3,...', 1, 8);
$_$w(1, 9), $_$tracer.log(circularOperation([
    5,
    4,
    3,
    2,
    1,
    2
]), 'circularOperation([\n    5,\n    4,\n    3,...', 1, 9);
$_$w(1, 10), $_$tracer.log(circularOperation([
    1,
    1,
    1,
    1
]), 'circularOperation([\n    1,\n    1,\n    1,...', 1, 10);
$_$w(1, 11), $_$tracer.log(circularOperation([]), 'circularOperation([])', 1, 11);
function poinCalculator(string) {
    $_$wf(1);
    var gold = ($_$w(1, 12), 0);
    var silver = ($_$w(1, 13), 0);
    var bronze = ($_$w(1, 14), 0);
    var total = ($_$w(1, 15), 0);
    for (var i = 0; $_$w(1, 16), i < string.length; i++) {
        $_$w(1, 17), $_$tracer.log(string[i].length, 'string[i].length', 1, 17);
        if ($_$w(1, 18), string[i] == 'G') {
            $_$w(1, 19), gold++;
            $_$w(1, 20), total += 2;
        } else if ($_$w(1, 21), string[i] == 'S') {
            $_$w(1, 22), silver++;
            $_$w(1, 23), total += 1;
        } else if ($_$w(1, 24), string[i] == 'B') {
            $_$w(1, 25), bronze++;
            $_$w(1, 26), total += 1 / 2;
        }
    }
    $_$w(1, 27), $_$tracer.log(gold, 'gold', 1, 27);
    $_$w(1, 28), $_$tracer.log(silver, 'silver', 1, 28);
    $_$w(1, 29), $_$tracer.log(bronze, 'bronze', 1, 29);
    $_$w(1, 30), $_$tracer.log(total, 'total', 1, 30);
    return $_$w(1, 31), 'Jumlah Gold : ' + gold + ' Jumlah Silver : ' + silver + ' Jumlah Bronze : ' + bronze + '. Dan totalnya adalah : ' + total;
}
$_$w(1, 32), $_$tracer.log(poinCalculator('GSB'), 'poinCalculator(\'GSB\')', 1, 32);
function pairUp(nama) {
    $_$wf(1);
    var temporary = ($_$w(1, 33), []);
    for (var i = 0; $_$w(1, 34), i < nama.length; i += 2) {
        if ($_$w(1, 35), ($_$w(1, 36), nama[i]) && ($_$w(1, 37), nama[i + 1])) {
            $_$w(1, 38), temporary.push(nama[i] + ' dan ' + nama[i + 1]);
        } else {
            $_$w(1, 39), temporary.push(nama[i] + ' dan Istruktur');
        }
    }
    return $_$w(1, 40), temporary;
}
$_$w(1, 41), $_$tracer.log(pairUp([
    'Budi',
    'Badu',
    'Indra',
    'Indri'
]), 'pairUp([\n    \'Budi\',\n    \'Badu\',\n    \'In...', 1, 41);
$_$w(1, 42), $_$tracer.log(pairUp([
    'Budi',
    'Badu',
    'Indra',
    'Indri',
    'James'
]), 'pairUp([\n    \'Budi\',\n    \'Badu\',\n    \'In...', 1, 42);
$_$w(1, 43), $_$tracer.log(pairUp([]), 'pairUp([])', 1, 43);
$_$wpe(1);