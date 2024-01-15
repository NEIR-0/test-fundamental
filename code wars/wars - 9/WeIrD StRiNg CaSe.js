function toWeirdCase(string) {
  //TODO
  let arrWord = string.split(" ");
  // console.log(perWord)

  let result = [];
  let validate = "";
  for (let word of arrWord) {
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        let upperCase = word[i].toUpperCase();
        // console.log(upperCase)
        validate += upperCase;
      } else {
        validate += word[i];
      }
    }

    result.push(validate);
    validate = "";
  }

  // console.log(result)

  return result.join(" ");
}

console.log(toWeirdCase("This")); // ThIs
console.log(toWeirdCase("is")); // Is
console.log(toWeirdCase("This is a test")); // ThIs Is A TeSt
