/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function absoluteWinner(winners) {
    // Write your code here

}

console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"