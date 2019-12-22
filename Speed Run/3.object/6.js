function soal3(param) {

    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < param.length; j++) {
            if (param[j] > param[j+1]) {
                let temp = param[j]
                param[j] = param[j+1]
                param[j+1] = temp
            }
        }
    }
    

    let result = []
    for (let i = 0; i < param.length; i++) {
        let found = false
        for (let j = 0; j < result.length; j++) {
            if (param[i][0] == result[j][0][0]) {
                found = true
                result[j].push(param[i])
            }
        }
        if (!found) {
            result.push([param[i]])
        }
    }
    
    let obj = {}
    for (let i = 0; i < result.length; i++) {
        obj[result[i][0][0]] = result[i]
    }
    return obj
}


/*
looping param.length  / K
    looping abjad.length [j]
        if param[i][0] === 'K' -> abjad[j]
        var indexToResult = abjad.indexOf('abjad[j]) -> indexnya
        result[indextoresult].push(param[i])
*/

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

// console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/

/*
bukan sort

bikin var result = [[], [], *26]

looping param.length  / K
    looping abjad.length [j]
        if param[i][0] === 'K' -> abjad[j]
        var indexToResult = abjad.indexOf('abjad[j]) -> indexnya
        result[indextoresult].push(param[i])



time: 5 mins
*/
