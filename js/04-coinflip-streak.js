var coinFlip;
do {
    coinFlip = Math.round(Math.random() * 1);
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if(coinFlip === 1) {
        window.console.log("Tails");
    }
} while (coinFlip !== 1);