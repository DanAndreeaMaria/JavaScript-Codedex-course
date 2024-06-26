const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
  ];

  console.log(characters)

let waldoIndex;

  if (characters.includes("Waldo")) {
    waldoIndex = characters.indexOf("Waldo");
    console.log("I found Waldo at index " + waldoIndex);
  } else {
    console.log("Not found!");
  }