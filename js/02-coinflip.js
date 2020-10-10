//Returns a number between 0 and 10
var coinFlip = Math.floor(Math.random() * 11);
var choice = window.prompt("Enter your choice: Heads or Tails");

//Evaluate coinFlip result
var coinFlipResult;
if (coinFlip < 5) {
    coinFlipResult = "Heads";
} else {
    coinFlipResult = "Tails";
}

//Check user choice and display result
if (choice === coinFlipResult) {
    window.alert("The flip was " + coinFlipResult + " and you chose " + choice + "...you win!");
} else {
    window.alert("The flip was " + coinFlipResult + " and you chose " + choice + "...you loose!");
}