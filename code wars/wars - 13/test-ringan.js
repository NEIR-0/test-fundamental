// 1. masukkan huruf ke array dan jika ada duplicate huruf yang ada array dihilangkan dan dimasukkan huruf baru di depan, dan panjang array result adalah 5
function ArrChallange(strArr) {
  // console.log(strArr);
  let result = [];
  for (const perChar of strArr) {
    if (!result.includes(perChar)) {
      result.push(perChar);
    } else {
      // filter, find, map, dll yang balikannya "retrun" harus ada penampung
      const check = result.filter((el) => el !== perChar);
      result = check;
      result.push(perChar);
      if (result.length >= 5) {
        result.shift();
      }
    }
  }

  return result;
}

console.log(ArrChallange(["A", "B", "A", "C", "A", "B"]));
console.log(ArrChallange(["A", "B", "C", "D", "E", "D", "O", "Z", "C"]));

console.log(
  "================================================================================"
);

// 2. bandingkan dua parameter. Jika num1 > num2 return true, jika tidak return false, jika sama retunr -1
function MathChallange(num1, num2) {
  if (num2 > num1) {
    return true;
  } else if (num1 > num2) {
    return false;
  }
  return -1;
}

console.log(MathChallange(2, 7));
console.log(MathChallange(6, 4));
console.log(MathChallange(7, 7));

console.log(
  "================================================================================"
);

// 3. ubah string number ke hour:minute
function TimeFormat(str) {
  const changeNumber = Number(str);
  // console.log(str, changeNumber);

  const hour = Math.floor(changeNumber / 60);
  const minute = changeNumber % 60;
  // console.log(hour, minute);

  return `${hour}:${minute}`
}

console.log(TimeFormat("126"));
console.log(TimeFormat("45"));

console.log(
  "================================================================================"
);

// 4. jadi ada array