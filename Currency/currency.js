let yuan = 105;
let yen = 1500;
let won = 30000;

let usdYuan = Math.floor(yuan * 0.14);
let usdYen = yen * 0.0067;
let usdWon = won * 0.00075;

console.log(usdYuan + " dollars from yuans");
console.log(usdYen + " dollars from yens");
console.log(usdWon + " dollars from won");

let total = usdYuan + usdYen + usdWon;

console.log("There are " + total + " dollars in total.");