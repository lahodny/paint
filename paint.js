let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let color = "#FFFFFF"; // zakladni barva bila (nic se nevykresluje)
let size = 10; // velikost strany ctverce
let sizeOfCursor = 48; // 48 je velikost obrazku kurzoru
let painting;
let tool;
let writing = document.getElementById("writing");
let erasing = document.getElementById("erasing");
let pen = document.getElementById('pen');
let eraser = document.getElementById('eraser');
let button = document.getElementById('button');

canvas.addEventListener('mousemove', function paint(event) {
    let x = event.clientX - size - 10 - 395; // pozice zacatku vykreslovani
    let y = event.clientY + sizeOfCursor - 220;
    if (painting) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size); // vykresleni 
    }
});

canvas.addEventListener('mousedown', function activate() {
    painting = true;
    if (tool == 1) {
        writing.play();
        writing.loop = true; // po dokonceni prehravani zacne hrat znovu
    }
    else if (tool == 2) {
        erasing.play();
        erasing.loop = true;
    }
});

canvas.addEventListener('mouseup', function deactivate() {
    painting = false;
    writing.pause(); // pozastaveni prehravani
    erasing.pause();
});

pen.addEventListener('click', function pen() {
    tool = 1;
    color = "#000000" // zakladni barva pera se nastavi na cernou
    document.getElementById("canvas").style.cursor = "url('../paint/images/pencil-cursor.gif'), default"; // zmena kursoru
});

eraser.addEventListener('click', function eraser() {
    tool = 2;
    color = "#FFFFFF"; // barva gumy se nastavi jako bila pro efekt mazani
    document.getElementById("canvas").style.cursor = "url('../paint/images/eraser-cursor.png'), default"; // zmena kursoru
});

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
    tool = 1;
    console.log(color);
}

function thickness(number) { // nastavi velikost strany na parametr funkce
    size = number;
}

button.addEventListener('click', function clearCanvas() {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // vycisteni canvasu
});
