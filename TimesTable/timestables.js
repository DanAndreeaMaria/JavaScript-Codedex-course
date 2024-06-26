let multiple = 5;

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let result = multiple * numbers[i];
    console.log(multiple + " x " + numbers[i] + " = " + result);
}