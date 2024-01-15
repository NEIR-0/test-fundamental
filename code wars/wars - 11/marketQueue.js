function queueTime(customers, n) {
  //TODO
  //   console.log(customers, n)

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }
  // console.log(arr, ">>>>>")

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i]; // "INCREMENT" dan selalu ganti yang paling depan
    arr.sort((a, b) => a - b); // sorting asc, atau yang paling cepet/kecil maju ke depan. "(a, b) => a - b" biar bukan angka depannya aja
  }

  return arr[arr.length - 1]; // ini tricky jangan lupa!
}

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
