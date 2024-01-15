function isPangram(string) {
  //...
  let flag = 0;
  const dictonary = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    const perChar = string[i].toLowerCase();

    for (let word of dictonary) {
      if (perChar === word) {
        if (!obj[perChar]) {
          obj[perChar] = 1;
          flag += 1;
          break;
        } else {
          break;
        }
      }
    }
  }

  // console.log(flag);
  if (flag === 26) {
    return true;
  } else {
    return false;
  }
}

// TASE CASE:
console.log(isPangram("This is not a pangram.")); // false
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa")); // false
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")); // true
