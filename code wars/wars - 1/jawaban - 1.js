// test
let years = 2001;
let x = years % 100;
if (x == 0) {
  let hasil = years / 100;
  console.log(hasil);
} else if (x > 0) {
  let hasil = years / 100 + 1;
  console.log(parseInt(hasil));
} else {
  let hasil = 1;
}

// jawaban
function century(year) {
  // Finish this :)
  let x = year % 100;
  if (x == 0) {
    let hasil = year / 100;
    return hasil;
  } else if (x > 0) {
    let hasil = year / 100 + 1;

    return parseInt(hasil);
  } else {
    let hasil = 1;
  }
  return;
}
