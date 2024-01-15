String.prototype.toJadenCase = function () {
  const splitiing = this.split(" "); // pakai this, karena reuseable
  //   console.log(splitiing)
  //   console.log(splitiing.charAt(0))
  //   console.log(splitiing.charAt(0).slice(1))

  const capital = splitiing.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const result = capital.join(" ");
  return result;
};

let str = "How can mirrors be real if our eyes aren't real";
let jadenCasedStr = str.toJadenCase();
console.log(jadenCasedStr);
