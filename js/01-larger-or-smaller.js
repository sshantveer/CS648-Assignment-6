var entry;
var firstNumber;
var secondNumber;

entry = window.prompt("Enter first number");
firstNumber = parseInt(entry, 10);

entry = window.prompt("Enter second number");
secondNumber = parseInt(entry, 10);

document.write("The first number entered: " + String(firstNumber) + "<br>");
document.write("The second number entered: " + String(secondNumber) + "<br>");
if(firstNumber > secondNumber) {
    document.write("The largest number is: " + String(firstNumber));
} else if (firstNumber < secondNumber) {
    document.write("The largest number is: " + String(secondNumber));
} else {
    document.write("Both numbers are equal");
}
