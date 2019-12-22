/**
  Kompetensi: Berpikir secara terstruktur dalam menyelesaikan masalah (algoritma)

  Buatlah pseudocode untuk kasus berikut:

  Sebuah taman bermain akan memberikan tarif sesuai dengan tinggi dan umur anak
  dengan ketentuan sebagai berikut:
  - Umur 2-3 tahun: Rp 20.000. Jika tinggi anak umur 2-3 tahun melebih 70cm maka tarif akan bertambah 10.000
  - Umur 4-7 tahun: Rp 35.000. Jika tinggi anak umur 4-7 tahun melebih 120cm maka tarif akan bertambah 15.000
  - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun melebih 150cm maka tarif akan bertambah 20.000

  Tampilkan tarif harga sesuai umur dan tinggi seorang anak

**/

//WRITE YOUR PSEUDOCODE HERE

STORE 'umur' with VALUE 0
STORE 'tinggi' with VALUE 0
STORE 'tarif' with VALUE 0

IF 'umur' LESS EQUAL to 3 and 'umur' GREATER EQUAL to 2
  THAN 'tarif' EQUAL 'tarip' plus 20000
  IF 'umur' LESS EQUAL to 3 AND 'umur' GREATER EQUAL to 2 AND 'tinggi' GREATER then 70
    THAN 'tarif' EQUAL to 'tarif' PLUS 10000
  ENDIF
ENDIF
IF 'umur' LESS EQUAL to 7 and 'umur' GREATER EQUAL to 4
  THAN 'tarif' EQUAL 'tarip' plus 35000
  IF 'umur' LESS EQUAL to 7 AND 'umur' GREATER EQUAL to 4 AND 'tinggi' GREATER then 120
    THAN 'tarif' EQUAL to 'tarif' PLUS 15000
  ENDIF
ENDIF
IF 'umur' LESS EQUAL to 10 and 'umur' GREATER EQUAL to 8
  THAN 'tarif' EQUAL 'tarip' plus 50000
  IF 'umur' LESS EQUAL to 10 AND 'umur' GREATER EQUAL to 8 AND 'tinggi' GREATER then 150
    THAN 'tarif' EQUAL to 'tarif' PLUS 20000
  ENDIF
ENDIF
DISPLAY 'tarif'


