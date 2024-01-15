// 1. cari angka terbesar dari array, ada 2 parameter yaitu arr dan n(panjang dari arr nya)
function sumMax(arr, n) {
  //   console.log(arr, n);
  if (n === 0) {
    return null;
  }

  let max = arr[0];
  for (const perNumber of arr) {
    if (perNumber > max) {
      max = perNumber;
    }
  }
  return max;
}
const arr = [1, 9, 2, 10, 30, 92, 89];
const n = arr.length;
console.log(sumMax(arr, n));
