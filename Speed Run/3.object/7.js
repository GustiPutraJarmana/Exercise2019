function soal3(param) {
    let obj = {under20 : [], over20 : []}
    for (let i = 0; i < param.length; i++) {
        if (param[i][1] > 20) {
            obj.over20.push(param[i][0])
        }
        else {
            obj.under20.push(param[i][0])
        }
    }
    return obj
}

/*

*/
console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/

// time: 5 mins