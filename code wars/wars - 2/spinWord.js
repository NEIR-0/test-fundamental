function spinWords(string) {
  //TODO Have fun :)
  //   console.log(string)
  let perWord = [];
  let result = "";
  for (let i = 0; i <= string.length; i++) {
    let perChar = string[i];
    //   console.log(string, i, perChar)
    if (perChar === " " || string[i] === undefined) {
      perWord.push(result);
      result = "";
    } else {
      result += perChar;
    }
  }
  //   console.log(perWord)

  let reversed = [];
  let check = "";
  for (let perArr of perWord) {
    if (perArr.length >= 5) {
      for (let i = perArr.length - 1; i >= -1; i--) {
        //         console.log(i, perArr[i])
        if (perArr[i] === undefined) {
          reversed.push(check);
          check = "";
        } else {
          check += perArr[i];
        }
      }
    } else {
      reversed.push(perArr);
    }
  }

  //   console.log(reversed)
  const finalResult = reversed.join(" ");
  //   console.log(finalResult)

  return finalResult;
}
