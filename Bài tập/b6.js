let textElement = document.getElementById("text");
let fontSize = 24;

function increase() {
    fontSize += 2;
    textElement.style.fontSize = fontSize + "px";
}

function reduce() {
    fontSize -= 2;
    if (fontSize >= 10) {
        textElement.style.fontSize = fontSize + "px";
    }
}