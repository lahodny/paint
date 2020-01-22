let color = "#FFFFFF"; // zakladni barva bila (nic se nevykresluje)
let size = 10; // velikost strany ctverce
let sizeOfCursor = 48;
let painting;
function paint(event) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let x = event.clientX - size - 10;
    let y = event.clientY + sizeOfCursor;
    if (painting) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
}

function activate() {
    painting = true;
}

function deactivate() {
    painting = false;
}

function eraser() {
    color = "#FFFFFF"; // barva gumy se nastavi jako bila pro efekt mazani
    document.getElementById("canvas").style.cursor = "url('../paint/images/eraser-cursor.png'), default"; // zmena kursoru
    document.getElementById("colors").setAttribute("disabled", "");
}

function pen() {
    color = "#000000" // zakladni barva pera se nastavi na cernou
    document.getElementById("canvas").style.cursor = "url('../paint/images/pencil-cursor.gif'), default"; // zmena kursoru
    color = document.getElementById("colors").value; // prirazeni barvy
    document.getElementById("colors").removeAttribute("disabled");
}

function changeColor(num) {
    switch (num) {
        case 1:
            color = "#000000";
            break;
        case 2:
            color = "#7F7F7F";
            break;
        case 3:
            color = "#880015";
            break;
        case 4:
            color = "#ED1C24";
            break;
        case 5:
            color = "#FF7F27";
            break;
        case 6:
            color = "#FFF200";
            break;
        case 7:
            color = "#22B14C";
            break;
        case 8:
            color = "#00A2E8";
            break;
        case 9:
            color = "#3F48CC";
            break;
        case 10:
            color = "#A349A4";
            break;
        case 11:
            color = "#ffffff";
            break;
        case 12:
            color = "#C3C3C3";
            break;
        case 13:
            color = "#B97A57";
            break;
        case 14:
            color = "#FFAEC9";
            break;
        case 15:
            color = "#FFC90E";
            break;
        case 16:
            color = "#EFE4B0";
            break;
        case 17:
            color = "#B5E61D";
            break;
        case 18:
            color = "#99D9EA";
            break;
        case 19:
            color = "#7092BE";
            break;
        case 20:
            color = "#C8BFE7";
            break;
        default:
            color = document.getElementById("colorsInput").value;
    }
    document.getElementById("canvas").style.cursor = "url('../paint/images/pencil-cursor.gif'), default";
    console.log(color);
}

function thickness(number) { // nastavi velikost strany na argument funkce
    size = number;
}

function clearCanvas() { // funkce pro vycisteni canvasu
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // vycisteni canvasu
}

