
function soal1(objList,id,action) {
    // your code here
    
    for (key in objList) {
        if (key == id && action == 'view') {
            return objList[key]
        }
        else if (key == id && action == 'delete') {
            for (key in objList) {
                // console.log(key,id, key === id, typeof key)
                if (Number(key) === id) {
                    delete objList[key]
                    return objList
                }
            }
        }
    }
}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/

// console.log(soal1({
//     0:{name:"dimas",codename:"surgeon of death"},
//     1:{name:"awtian",codename:"the black assasin"},
//     2:{name:"icha",codename:"the real dementor"},
//     3:{name:"hedya",codename:"the real lol"}
// },2,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{name:"awtian",codename:"the black assasin"},
        2:{name:"hedya",codename:"the real lol"}
    }

*/

// if (action == 'delete'){
//     delete objList[id.toString()];
//     return objList;

//    }