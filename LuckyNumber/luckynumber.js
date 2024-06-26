let luckyNumber = 5;

let guess = Math.floor(Math.random() * 10) + 1;  //from 1 to 10

while (guess != luckyNumber) {
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}

console.log("Yes! It is " + luckyNumber);