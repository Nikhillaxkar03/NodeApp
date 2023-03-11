const supVillain = require("superVillains");

let villain  = [];

for(let i = 1; i<=5; i++) {
    villain.push(supVillain.random());
}

console.log(villain);

