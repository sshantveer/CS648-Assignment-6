var coinFlip;
var count;
for (count = 1; count <= 10; count = count + 1) {
    coinFlip = Math.round(Math.random() * 1);
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if (coinFlip === 1) {
        window.console.log("Tails");
    }
}