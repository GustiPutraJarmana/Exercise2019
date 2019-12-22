/*
  ===========
  HASIL UJIAN
  ===========

  Hasil Ujian adalah sebuah fungsi untuk mendapatkan informasi status lulus atau tidak lulus-nya student yang mengikuti ujian
  
  Fungsi ini akan mengembalikan sebuah object dengan jumlah student, nama-nama student yang lolos, nama-nama student yang gagal, nilai tertinggi dan nilai rata-rata student

  [RULES]

  - Student dinyatakan lulus jika nilainya lebih dari atau sama dengan 70, maka nilai dibawahnya dinyatakan gagal
  
  [RESTRICTION]:

  - TIDAK boleh menggunakan built in function max(), filter(), find(), sort()
  - TIDAK boleh menggunakan Regex
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
function hasilUjian(students) {
  if (students.length === 0) return "TIDAK ADA PESERTA UJIAN";
    if (!Array.isArray(students)) return '"Invalid Input"';
  if (students) {
    let nilai = [];
    for (let i = 0; i < students.length; i++) {
      nilai.push(students[i].nilai);
    }
    let ave = 0;
    let sortNilai = sortingArr(nilai);
    for (let i = 0; i < nilai.length; i++) {
      ave += nilai[i];
    }

    let object = {};
    let arrL = [];
    let arrG = [];

    for (let i = 0; i < students.length; i++) {
      object["jumlahStudent"] = students.length;
      if (students[i].nilai >= 70) {
        arrL.push(students[i].nama);
      } else {
        arrG.push(students[i].nama);
      }
      object["lulus"] = arrL;
      object["gagal"] = arrG;
      object["nilaiTertinggi"] = sortNilai[0];
      object["nilaiAverage"] = Math.round(ave / students.length);
    }
    return object;
  }
}
/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/

console.log(
  hasilUjian([
    {
      nama: "Arman",
      nilai: 90
    },
    {
      nama: "Budi",
      nilai: 70
    },
    {
      nama: "Caca",
      nilai: 50
    },
    {
      nama: "Dina",
      nilai: 60
    },
    {
      nama: "Erwin",
      nilai: 100
    }
  ])
);

/* OUTPUT:
{
    jumlahStudent: 5,
    lulus: ["Arman", "Budi", "Erwin"],
    gagal: ["Caca", "Dina"]
    nilaiTertinggi: 100,
    nilaiAverage: 74
}
*/

console.log(
  hasilUjian([
    {
      nama: "Daniel",
      nilai: 23
    },
    {
      nama: "Bima",
      nilai: 69
    },
    {
      nama: "Karim",
      nilai: 97
    },
    {
      nama: "Armedi",
      nilai: 83
    },
    {
      nama: "Dimitri",
      nilai: 45
    },
    {
      nama: "Barry",
      nilai: 77
    }
  ])
);

/* OUTPUT:
{
    jumlahStudent: 6,
    lulus: [ 'Karim', 'Armedi', 'Barry' ],
    gagal: [ 'Daniel', 'Bima', 'Dimitri' ],
    nilaiTertinggi: 97,
    nilaiAverage: 66
}
*/

console.log(hasilUjian([]));
// "TIDAK ADA PESERTA UJIAN"

console.log(hasilUjian("Dito"));
// "Invalid Input"

console.log(hasilUjian(20));
// "Invalid Input"
