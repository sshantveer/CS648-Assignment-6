for (var i = 1; i <= 100 ; i++) {
    var value = "";
    if ( i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0) {
            value = value + "Marco!";
        }
        if (i % 5 == 0) {
            value = value + "Polo!";
        }
    } else {
        value = i;
    }
    window.document.write(value + " </br>");
}