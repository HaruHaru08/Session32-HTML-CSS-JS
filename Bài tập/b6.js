let textElement = document.getElementById("text");
let fontSize = 24; // Kích thước mặc định

function increaseFont() {
    fontSize += 2;
    textElement.style.fontSize = fontSize + "px";
}

function decreaseFont() {
    fontSize -= 2;
    if (fontSize >= 10) { // Giới hạn nhỏ nhất là 10px
        textElement.style.fontSize = fontSize + "px";
    }
}