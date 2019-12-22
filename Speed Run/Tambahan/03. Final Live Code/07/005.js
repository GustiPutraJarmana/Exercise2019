/*
  ================
  GET MEMBER SUMMARY
  ================

  Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi
  berdasarkan data-data seperti nama depan, nama belakang, dan umur. Fungsi ini
  akan mengembalikan sebuah object dengan keyName total member, anggota yang paling tua
  , anggota yang paling muda dan avarage umur semua member.

  rules:
  - TIDAK boleh menggunakan built in function .sort()
  - TIDAK boleh menggunakan built in function .indexOf(), .include()
  - TIDAK boleh menggunakan built in function .Math.max() dan .Math.min()
  - TIDAK boleh menggunakan built in function .map(), .filter()
  - TIDAK boleh menggunakan regex ( match, replace, dll)
  - asumsi data memiliki umur yang berbeda-beda

  examples:
  - INPUT =
    [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }, {
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }],

  - OUTPUT = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
      },
      average_member_age = 23
    }
*/
function sortingArr(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i + 1] > arr[i]) {
      let tampung = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tampung;
      i = Math.max(0, i - 1);
    } else {
      i++;
    }
  }
  return arr;
}
function getMemberSummary(member) {
  if (member.length === 0) return "NO DATA";
  let temp = [];

  for (let i = 0; i < member.length; i++) {
    temp.push(member[i].age);
  }
  let umurF = [];
  let umur = sortingArr(temp);
  umurF.push(umur[0], umur[umur.length - 1]);
  

  let object = {};
  let youngest = {};
  let oldest = {};
  let total = 0;
  let ave = 0;
  for (let i = 0; i < umurF.length; i++) {
    object["total_member"] = total;
    object["oldest_member"] = oldest;
    object["younges_member"] = youngest;
    object["average_member_age"] = Math.round(ave / member.length);
    for (let j = 0; j < member.length; j++) {
      if (umurF[i] === member[j].age) {
        if (umurF[i] > umurF[i + 1]) {
          oldest[
            "full_name"
          ] = `${member[j].first_name} ${member[j].last_name}`;
          oldest["age"] = member[j].age;
        } else {
          youngest[
            "full_name"
          ] = `${member[j].first_name} ${member[j].last_name}`;
          youngest["age"] = member[j].age;
        }
      }

      total = member.length;
      ave += member[j].age;
    }
    if (member.length === 1) {
      object["total_member"] = total;
      object["oldest_member"] = youngest;
      object["younges_member"] = youngest;
      object["average_member_age"] = Math.round(ave / 2);

    }
  }
  return object;
}

console.log(
  getMemberSummary([
    {
      first_name: "Wika",
      last_name: "Silo",
      age: 30
    },
    {
      first_name: "Dhani",
      last_name: "Damara",
      age: 27
    },
    {
      first_name: "Fandy",
      last_name: "Barestu",
      age: 18
    },
    {
      first_name: "Acha",
      last_name: "Acha",
      age: 29
    },
    {
      first_name: "Zena",
      last_name: "Villenia",
      age: 32
    },
    {
      first_name: "Annisa",
      last_name: "Ayu",
      age: 21
    }
  ])
);
//output
/*
 {
   total_member: 6,
   oldest_member: {
      full_name: 'Zena Villenia',
      age: 32,
   },
   youngest_member: {
    full_name: 'Fandy Barestu',
    age: 18,
   },
   average_member_age: 26
 }
*/

console.log(
  getMemberSummary([
    {
      first_name: "Rama",
      last_name: "Diansyah",
      age: 20
    },
    {
      first_name: "Malik",
      last_name: "Adhi",
      age: 21
    },
    {
      first_name: "Dita",
      last_name: "Zakiah",
      age: 27
    }
  ])
);

/*
  total_member: 3,
  oldest_member: {
      full_name: 'Dita Zakiah',
      age: 27,
   },
  youngest_member: {
    full_name: 'Rama Diansyah',
    age: 20,
   },
   average_member_age: 23
*/

console.log(
  getMemberSummary([
    {
      first_name: "Zena",
      last_name: "Villenia",
      age: 20
    }
  ])
);
/*
  {
    total_member: 1,
    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    average_member_age: 20
  }
*/

console.log(getMemberSummary([])); //NO DATA
