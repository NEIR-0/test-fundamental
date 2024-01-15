function fibonaci(signature, n) {
  // fibonaci 2
  let result = signature;

  if (n === 0) {
    return [];
  }
  if (n <= 3) {
    let validate = [];
    for (let i = 0; i < n; i++) {
      validate.push(signature[i]);
    }
    return validate;
  }

  for (let i = 2; i < n; i++) {
    result.push(signature[i - 1] + signature[i - 2]);
  }

  // console.log(result);
  return result;
}
// TASE CASE:
console.log(fibonaci([1, 1], 10)); // [1,  1,  2,  3,  5, 8, 13, 21, 34, 55]
console.log(fibonaci([2, 4], 1)); // 2
console.log(fibonaci([300, 200], 0)); // []
console.log(fibonaci([4, 15], 2)); // [2, 15]

//  tribonacci =============================================================================================

function tribonacci(signature, n) {
  // console.log(signature, ">+<" , n)
  // tribonaci, karena 3-bonaci
  if (n === 0) {
    return [];
  }
  // signature.lengt atau 3, bebas
  if (n <= signature.length) {
    // console.log(signature, n);
    let validate = [];
    for (let i = 0; i < n; i++) {
      // console.log(signature[i],">>>>>>>>", i);
      validate.push(signature[i]);
    }
    return validate;
  }

  let result = signature;
  for (let i = 3; i < n; i++) {
    // tribonaci, karena 3-bonaci
    // console.log(result, ">>>>")
    result.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }

  return result;
}

// TASE CASE:
// let result1 = tribonacci([1, 1, 1], 10);
// console.log(result1); // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

// let result5 = tribonacci([0, 0, 0], 10);
// console.log(result5); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// let result6 = tribonacci([1, 2, 3], 10);
// console.log(result6); // [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]

// let result7 = tribonacci([3, 2, 1], 10);
// console.log(result7); // [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]

// let result8 = tribonacci([1, 1, 1], 1);
// console.log(result8); // [1]

// let result9 = tribonacci([300, 200, 100], 0);
// console.log(result9); // []

// let result10 = tribonacci([0, 4, 15], 2);
// console.log(result10); // [0, 4]
