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

    let maxCalories = 0;
    elves.forEach((elf) => {
      let calories = elf.reduce((accumVariable, curValue) => {
        return accumVariable + curValue
      }, 0);
      maxCalories = Math.max(calories, maxCalories);
    });
    console.log('Max calories: ' + maxCalories);

    
})
