function validBraces(braces) {
  //TODO
  // console.log(braces)
  let result = [];
  let validate = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < braces.length; i++) {
    let perChar = braces[i];
    if (perChar === "(" || perChar === "[" || perChar === "{") {
      result.push(perChar);
    } else {
      // console.log(result, "<<<<<<<<<")
      let checking = result.pop(); // "{" or "(" or "[", satuan pokoknya!
      // console.log("checking = ", checking,"===", perChar )
      if (validate[checking] !== perChar) {
        return false;
      }
    }
  }

  // console.log(result.length)
  if (result.length === 0) {
    return true;
  }
  // untuk handle yang semuanya awalan "(((({{"
  else {
    return false;
  }
}

// TESTY CASE:\
console.log(validBraces("()"));
console.log(validBraces("{}({})[]"));
console.log(validBraces("())({}}{()][]["));
console.log(validBraces("(((({{"));
