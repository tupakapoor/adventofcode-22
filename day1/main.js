const fs = require('fs')
  
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    let rows = data.toString().split('\n');
    let elves = [];
    let elf = [];
    rows.forEach((calorie) => {
      if (calorie == '') {
        elves.push(elf);
        elf = [];
      } else {
        elf.push(Number(calorie));
      }
    });

    let caloriesArray = []
    elves.forEach((elf) => {
      let calories = elf.reduce((accumVariable, curValue) => {
        return accumVariable + curValue
      }, 0);
      caloriesArray.push(calories);
    });

    caloriesArray.sort((a,b) => { return b - a; });
    console.log('Max calories: ' + caloriesArray[0]);

    let top3 = 0;
    for (var i = 0; i < 3; i++) {
      top3 += caloriesArray[i];
    }

    console.log('Top 3 sum: ' + top3);
    
})
