function highAndLow(numbers) {
  const arrNum = numbers.split(" "); // masih string!
  //   console.log(arrNum)

  let max = -Infinity;
  let min = Infinity;
  for (let perNumber of arrNum) {
    //     console.log(Number(perNumber))

    if (Number(perNumber) > max) {
      max = Number(perNumber);
    }
    if (Number(perNumber) < min) {
      min = Number(perNumber);
    }
  }

  //   console.log(max, min)
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
