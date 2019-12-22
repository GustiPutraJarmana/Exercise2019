/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here

// STORE "kecepatan" with ANY VALUE (Number)

// IF "kemiringan" equals > 45 && < 50 DO 
//   DISPLAY "kecepatan mobil akan berkurang 25 km/jam" THEN
// ELSE IF "kemiringan" equals > 30 && < 44 DO
//   DISPLAY "kecepatan mobil akan berkurang 15 km/jam" THEN
// ELSE IF "kemiringan" equals > 15 && < 29 DO
//   DISPLAY "kecepatan mobil akan berkurang 10 km/jam" THEN
// ELSE
//   DISPLAY "kecepatan mobil tidak akan berkurang"


STORE variable "kecepatan" dengan any value (number)
IF "kemiringan" GREATER EQUAL to 45 && LESS EQUAL then 50 THEN
    DISPLAY kecepatan minus 25 km/jam
ELSE IF "kemiringan" GREATER EQUAL to 30 && LESS EQUAL to 44 THEN
    DISPLAY kecepatan minus  14 km/jam
ELSE IF "kemiringan" GREATER EQUAL to 15 && LESS EQUAl to 29 THEN
    DISPLAY kecepatan minus 10 km/jam
ELSE
    DISPALY "kecepatan" tidak akan berkurang