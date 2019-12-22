$_$wp(1);
function spiralNumber(param) {
    $_$wf(1);
    var arr = ($_$w(1, 0), new Array(param * param));
    var result = ($_$w(1, 1), []);
    var start = ($_$w(1, 2), false);
    for (var i = 0; $_$w(1, 3), i < arr.length; i++) {
        if ($_$w(1, 4), i % param === 0) {
            $_$w(1, 5), result.push([]);
            $_$w(1, 6), start = !start;
        }
        if ($_$w(1, 7), start) {
            $_$w(1, 8), result[result.length - 1].push(i + 1);
        } else {
            $_$w(1, 9), result[result.length - 1].unshift(i + 1);
        }
    }
    return $_$w(1, 10), result;
}
$_$w(1, 11), $_$tracer.log(spiralNumber(3), 'spiralNumber(3)', 1, 11);
$_$wpe(1);