$_$wp(1);
function trainSeating(penumpang) {
    $_$wf(1);
    var destinations = ($_$w(1, 0), [
        'A',
        'B',
        'C',
        'D',
        'E'
    ]);
    let x = ($_$w(1, 1), 0);
    let y = ($_$w(1, 2), 0);
    let jarak = ($_$w(1, 3), 0);
    let obj = ($_$w(1, 4), {});
    let person = ($_$w(1, 5), {});
    let arr = ($_$w(1, 6), []);
    for (let i = 0; $_$w(1, 7), i < penumpang.length; i++) {
        for (let j = 0; $_$w(1, 8), j < destinations.length; j++) {
            if ($_$w(1, 9), penumpang[i]['awal'] === destinations[j]) {
                $_$w(1, 10), x = j;
            }
            if ($_$w(1, 11), penumpang[i]['akhir'] === destinations[j]) {
                $_$w(1, 12), y = j;
            }
        }
        $_$w(1, 13), jarak = y - x;
        $_$w(1, 14), obj[jarak] = arr;
    }
    for (const key in $_$w(1, 15), obj) {
        for (let i = 0; $_$w(1, 16), i < penumpang.length; i++) {
            for (let j = 0; $_$w(1, 17), j < destinations.length; j++) {
                if ($_$w(1, 18), penumpang[i]['awal'] === destinations[j]) {
                    $_$w(1, 19), x = j;
                }
                if ($_$w(1, 20), penumpang[i]['akhir'] === destinations[j]) {
                    $_$w(1, 21), y = j;
                }
            }
            $_$w(1, 22), jarak = y - x;
            if ($_$w(1, 23), jarak == key) {
                $_$w(1, 24), person.nama = penumpang[i]['nama'];
                $_$w(1, 25), person.seat = penumpang[i]['seat'];
                $_$w(1, 26), arr.push(person);
                $_$w(1, 27), person = {};
            }
        }
        $_$w(1, 28), obj[key] = arr;
        $_$w(1, 29), arr = [];
    }
    return $_$w(1, 30), obj;
}
$_$w(1, 31), $_$tracer.log(trainSeating([
    {
        nama: 'Awtian',
        awal: 'A',
        akhir: 'B',
        seat: 'B3'
    },
    {
        nama: 'Klonoa',
        awal: 'A',
        akhir: 'D',
        seat: 'V1'
    },
    {
        nama: 'Azizy',
        awal: 'D',
        akhir: 'E',
        seat: 'A2'
    },
    {
        nama: 'Crash',
        awal: 'C',
        akhir: 'E',
        seat: 'R1'
    },
    {
        nama: 'Sena',
        awal: 'B',
        akhir: 'D',
        seat: 'R3'
    },
    {
        nama: 'Heri',
        awal: 'B',
        akhir: 'E',
        seat: 'R10'
    },
    {
        nama: 'Retsu',
        awal: 'D',
        akhir: 'E',
        seat: 'V2'
    },
    {
        nama: 'Hiruma',
        awal: 'B',
        akhir: 'E',
        seat: 'A666'
    },
    {
        nama: 'Tsubasa',
        awal: 'B',
        akhir: 'D',
        seat: 'V6'
    },
    {
        nama: 'Kenshin',
        awal: 'A',
        akhir: 'E',
        seat: 'V8'
    }
]), 'trainSeating([\n    {\n        nama: \'Awti...', 1, 31);
$_$w(1, 32), $_$tracer.log(trainSeating([]), 'trainSeating([])', 1, 32);
$_$wpe(1);