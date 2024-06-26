let player = Math.floor(Math.random() * 3);

if (player === 0) {
    console.log("Player picked: Rock")
} else if (player === 1) {
    console.log("Player picked: Scissors")
} else if (player === 2) {
    console.log("Player picked: Paper")
}

let computer = Math.floor(Math.random() * 3)

if (computer === 0) {
    console.log("Computer picked: Rock")
} else if (computer === 1) {
    console.log("Computer picked: Scissors")
} else if (computer === 2) {
    console.log("Computer picked: Paper")
}

if ((player === 0 && computer === 0) || (player === 1 && computer === 1) || (player === 2 && computer === 2)) {
    console.log("It's a tie!")
} else if (player === 0 && computer === 1) {
    console.log("Player wins!")
} else if (player === 0 && computer === 2) {
    console.log("Computer wins!")
} else if (player === 1 && computer === 2) {
    console.log("Player wins!")
} else if (player === 1 && computer === 0) {
    console.log("Computer wins")
} else if (player === 2 && computer === 0) {
    console.log("Player wins!")
} else if (player === 2 && computer === 1) {
    console.log("Computer wins!")
}