/*
# Blood Type Matcher

## Instruksi

Tahukah kamu, bahwa tipe darah kita berasal dari turuan tipe darah orang tua kita.
Buatlah sebuah fungsi javascript yang menerima 3 parameter (tiap param bertipe data string) 
dengan nama isMatchBloodType yang bertujuan untuk memeriksa apakah tipe darah kita cocok dengan tipe darah orang tua kita.

Function ini menerima 4 params:
- param1 : Tipe darah Ayah A
- param2 : Tipe darah Ibu B
- param3 : Tipe darah Anak

Kami sudah membuat table referensi untuk menentukan kesesuaian tipe darah orang tua dan anak. 
fungsi javascript ini akan mengembalikan boolean (true) jika tipe darah anak sesuai dengan tipe darah di array 
`bloodTypeTable`, dan akan mengembalikan boolean (false) jika tipe darah anak tidak sesuai.

## TEST CASE

- isMatchBloodType('O', 'A', 'O') // true
alasan: karena O dan A menghasilkan anak bergolongan darah A atau O

- isMatchBloodType('O', 'A', 'A') // true
alasan: karena O dan A menghasilkan anak bergolongan darah A atau O

- isMatchBloodType('O', 'A', 'B') // false
alasan: karena O dan A tidak menghasilkan anak bergolongan B

- isMatchBloodType('O', 'B', 'B') // true
- isMatchBloodType('AB', 'B', 'O') // false
- isMatchBloodType('AB', 'B', 'B') // true

*/

const bloodTypeTable = [
  {
    parents: ["A", "A"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "B"],
    child: ["A", "B", "O", "AB"],
  },
  {
    parents: ["A", "O"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["B", "B"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "O"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["O", "O"],
    child: ["O"],
  },
  {
    parents: ["O", "AB"],
    child: ["A", "B"],
  },
  {
    parents: ["AB", "AB"],
    child: ["A", "B", "AB"],
  },
];

function areEqual(arr1, arr2) {
  let N = arr1.length;
  let M = arr2.length;

  // If lengths of array are not equal means
  // array are not equal
  if (N != M) return false;

  // Sort both arrays
  arr1.sort();
  arr2.sort();

  // Linearly compare elements
  for (let i = 0; i < N; i++) if (arr1[i] != arr2[i]) return false;

  // If all elements were same.
  return true;
}

function isMatchBloodType(parent1, parent2, children) {
  // write your code here
  let parentArr = [parent1, parent2];
  let ismatch = false;
  for (const bloodType of bloodTypeTable) {
    if (areEqual(bloodType.parents, parentArr)) {
      if (bloodType.child.includes(children)) {
        ismatch = true;
      }
      break;
    }
  }
  return ismatch;
}

// TEST CASE
console.log(isMatchBloodType("O", "A", "O")); // true
console.log(isMatchBloodType("O", "A", "A")); // true
console.log(isMatchBloodType("O", "A", "B")); // false
console.log(isMatchBloodType("O", "B", "B")); // true
console.log(isMatchBloodType("AB", "B", "O")); // false
console.log(isMatchBloodType("AB", "B", "B")); // true

module.exports = isMatchBloodType;
