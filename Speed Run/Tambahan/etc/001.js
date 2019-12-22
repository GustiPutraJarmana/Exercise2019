/*
HACKTIV8 Online Live Coding 3

Nama:

===============
Angka Terbilang
===============

[Perintah]

Buatlah sebuah function yang mengubah kata didalam kalimat menjadi kata bilangan (TWO, FOUR) berdasarkan jumlah huruf yang ada didalam kata dan diurutkan berdasarkan jumlah huruf yang terbesar.
jika dalam 1 kata memiliki:

1 huruf = One
2 huruf = Two
3 huruf = Three
4 huruf = Four
5 huruf = Five
6 huruf = Six
7 huruf = Seven
8 huruf = Eight
9 huruf = Nine

[Hint]
1. ubah kata menjadi angka

2. lakukan pengurutan dari yang terbesar ke terkecil

3. ubah angka menjadi bilangan angka


[Contoh]
input : 'Aku Budi'
output = ['Four', 'Three']

[DOKUMENTASI SOLUSI / STEP]
1. pertama buat variabel kata yang berisi string yang di pecah berdasarkan spasi
2. kemudian buat variabel total dan variable totalKata yang berupa array
3. lalu buat array ejaan dalam bahasa inggris dari 0 sampai 12
4. setelah itu buat perulangan untuk merubah kata menjadi angka berdasarkan jumlah kata dari index 0 sampai dengan panjang array kata
5. variabel total yang telah dibuat sebelumnya di isi dengan pecahan dari tiap kata, contoh 'gray fox' yang telah di pecah menjadi ['gray', 'fox'] di pecah lg perkata menjadi ['g','r','a','y'],['f','o','x']
6. kemudian hitung panjang dari tiap kata dan lakukan push ke array totalKata yang telah dibuat sebelumnya
7. di akhir for lakukan sort total kata secara descending agar angka tersebut berurut dari yang terbesar sampai yang terkecil
8. kemudian buat for dengan index j dari 0 sampai panjang totalKata
9. kemudian ubah index total kata menjadi array ejaan dengan index yang sama dengan value pada array totalKata
10. return totalKata untuk menampilkan
*/

function strtoNum(sen) {
	// Write your code here
	
}

console.log(strtoNum('Gray Fox')); //[ 'Four', 'Three' ]
console.log(strtoNum('Budi Learning JS')); //[ 'Eight', 'Four', 'Two' ]
console.log(strtoNum('Web Developer')); //[ 'Nine', 'Three' ]
console.log(strtoNum('I Become Developer')); //[ 'Nine', 'Six', 'One' ]