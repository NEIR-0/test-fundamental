# Hospital Room

## Instruksi

Buatlah sebuah fungsi javascript yang menerima 1 parameter (array of array of string)
dengan nama hospitalRoom yang bertujuan untuk melakukan proses penempatan pasien berdasarkan
kelas kamar yang sudah dipilih dan ditentukan. Diketahui rumah sakit memiliki 4 golongan kamar yaitu:

- Kelas I memiliki kapasitas 1 orang pasien
- Kelas II memiliki kapasitas 2 orang pasien
- Kelas III memiliki kapasitas 3 orang pasien
- kelas IV memiliki kapasitas 4 orang pasien

Jika pasien di kelas tertentu telah melebihi batas kapasitas maka pasien tersebut akan diletakkan pada kamar selanjutnya.

Diberikan input berupa array multidimensi berisi data nama pasien beserta kelas nya.
Function ini menerima 1 params:

- param1 : Array of Array of String
  a. index 0 selalu nama pasien
  b. index 1 selalu tipe kelas (I/II/III/IV)

Fungsi ini akan mengembalikan sebuah object berupa `key`
golongan kelas yang berisi array multidimensi (data pasien per kamar). Urutan key tidak perlu diurutkan berdasarkan kelas kamar.

## TEST CASE

- hospitalRoom([
  ["Awtian", "II"],
  ["Dimas", "I"],
  ["Dimitri", "II"],
  ["Icha", "II"],
  ["Hardim", "II"],
  ["Radit", "I"],
  ])
- Output :
  {
  "I": [['Dimas'], ['Radit']],
  "II": [['Awtian', 'Dimitri'], ['Icha', 'Hardim']]
  }

- hospitalRoom([
  ["Arthamevia", "IV"],
  ["Adhi", "III"],
  ["Agus", "III"],
  ["Zaskia", "I"],
  ["Abu Hanifah", "III"],
  ["Umi Hani", "I"],
  ["Umar", "III"]
  ])
- Output :
  {
  I: [['Zaskia'], ['Umi Hani']],
  III: [ ['Adhi', 'Agus', 'Abu Hanifah'], ['Umar']],
  IV: [['Arthamevia']]
  }

- hospitalRoom([
  ["Naruto", "IV"],
  ["Sasuke", "II"],
  ["Sakura", "I"],
  ["Kakashi", "III"],
  ])
- Output :
  {
  IV: [['Naruto']],
  II: [['Sasuke']],
  I: [['Sakura']],
  III: [['Kakashi']],
  }
