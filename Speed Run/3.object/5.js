function soal2(param){
  let arr = []
  for (let i = 0; i < param.length; i++) {
    let obj = {
      firtName : param[i][0],
      lastName : param[i][1],
      hobbies : param[i][2],
      profession : param[i][3]
    }
    arr.push(obj)
  }
  return arr
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/ 

// console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
// ['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));



// time: 9.5 mins
// time: 2 mins