function hospitalRoom(listPatients) {
  let obj = {};
  for (let i = 0; i < listPatients.length; i++) {
    const perName = listPatients[i][0];
    const perRoom = listPatients[i][1];

    if (!obj[perRoom]) {
      obj[perRoom] = [];
    }
    obj[perRoom].push(perName);
  }
  // console.log(obj);

  // validate room
  let roomsCapacity = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
  };

  let result = {};
  for (let key in obj) {
    result[key] = [];
    let arrName = obj[key];

    let validate = [];
    for (let name of arrName) {
      validate.push(name); // harus di push dulu, WAJIB!

      if (validate.length === roomsCapacity[key]) {
        result[key].push(validate);
        validate = [];
      }
    }

    // validasi lanjutan dari validate yang tidak terfilter diatas
    if (validate.length !== 0) {
      result[key].push(validate);
    }
  }

  // console.log(result);
  return result;
}

console.log(
  hospitalRoom([
    ["Dimas", "I"],
    ["Awtian", "II"],
    ["Dimitri", "II"],
    ["Icha", "II"],
    ["Hardim", "II"],
    ["Radit", "I"],
  ])
);
/*
{ 
  "I": [['Dimas'], ['Radit']],
  "II": [['Awtian', 'Dimitri'], ['Icha', 'Hardim']] 
}
*/

console.log(
  hospitalRoom([
    ["Zaskia", "I"],
    ["Adhi", "III"],
    ["Agus", "III"],
    ["Abu Hanifah", "III"],
    ["Umi Hani", "I"],
    ["Umar", "III"],
    ["Arthamevia", "IV"],
  ])
);
/*
{
  I: [['Zaskia'], ['Umi Hani']],
  III: [ ['Adhi', 'Agus', 'Abu Hanifah'], ['Umar']],
  IV: [['Arthamevia']]
}
*/

console.log(
  hospitalRoom([
    ["Naruto", "IV"],
    ["Sasuke", "II"],
    ["Sakura", "I"],
    ["Kakashi", "III"],
  ])
);
/*
{
  IV: [['Naruto']],
  II: [['Sasuke']],
  I: [['Sakura']],
  III: [['Kakashi']],
}
*/

module.exports = hospitalRoom;
