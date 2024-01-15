function oddOrEven(array) {
  //enter code here
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const perNumber = array[i];
    total += perNumber;
    // console.log(total);
  }

  if (Math.abs(total) % 2 === 0) {
    return "even";
  } else if (Math.abs(total) % 2 === 1) {
    return "odd";
  } else {
    return "even";
  }
}

// TASE CASE:
console.log(oddOrEven([0]), "even");
console.log(oddOrEven([1]), "odd");
console.log(oddOrEven([]), "even");

console.log(oddOrEven([0, -1, 2]), "odd");
console.log(oddOrEven([0, 1, -4]), "odd");
console.log(oddOrEven([-1023, -1, 3]), "odd");
