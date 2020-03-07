let hextent_colours = [];

if (localStorage.getItem("hextent_colours") != null) {
    hextent_colours = JSON.parse(localStorage.getItem("hextent_colours"));
} else {
    localStorage.setItem("hextent_colours", JSON.stringify(hextent_colours));
}

if (hextent_colours.includes(document.querySelector("h1").textContent)) {
    document.getElementById("save-colour-button").textContent = "favorite";
}

function isDarkColor(rgb) {
    return Math.round((
      parseInt(rgb[0], 10) * 299 +
      parseInt(rgb[1], 10) * 587 +
      parseInt(rgb[2], 10) * 114) / 1000
    ) <= 140;
}

document.querySelector("h1").onclick = function copyToClipboard() {
    let dummy = document.createElement("input");

    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id")
    document.getElementById("dummy_id").value = document.querySelector("h1").textContent;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    try {
        document.getElementById("message").classList.remove("copy-animation");
    } catch {}

    void document.getElementById("message").offsetWidth; // Alows re-running of CSS Animation

    document.getElementById("message").classList.add("copy-animation");

}

document.querySelector("i").onclick = function saveColour() {
    if (! hextent_colours.includes(document.querySelector("h1").textContent)) {
        document.getElementById("save-colour-button").textContent = "favorite";
        hextent_colours.push(document.getElementById("heading").textContent);
        localStorage.setItem("hextent_colours", JSON.stringify(hextent_colours));
    } else {
        document.getElementById("save-colour-button").textContent = "favorite_border";
        let filteredArray = hextent_colours.filter(e => e !== document.getElementById("heading").textContent);
        hextent_colours = filteredArray;
        localStorage.setItem("hextent_colours", JSON.stringify(hextent_colours));
    }
}

document.body.onload = function popup() {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    let h = "";
    let e = "";
    let x = "";
    let Hexadecimal = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ];
    let int = r;
    let result = "";
    while (int > 0) {
        result = Hexadecimal[int % 16] + result.toString();
        int = Math.floor(int / 16)
    }
    if (result.toString().length == 2) {
        h = result.toString();
    }
    if (result.toString().length == 1) {
        h = "0" + result.toString();
    }
    if (result.toString().length == 0) {
        h = "00";
    }
    int = g;
    result = "";
    while (int > 0) {
        result = Hexadecimal[int % 16] + result.toString();
        int = Math.floor(int / 16)
    }
    if (result.toString().length == 2) {
        e = result.toString();
    }
    if (result.toString().length == 1) {
        e = "0" + result.toString();
    }
    if (result.toString().length == 0) {
        e = "00";
    }
    int = b;
    result = "";
    while (int > 0) {
        result = Hexadecimal[int % 16] + result.toString();
        int = Math.floor(int / 16)
    }
    if (result.toString().length == 2) {
        x = result.toString();
    }
    if (result.toString().length == 1) {
        x = "0" + result.toString();
    }
    if (result.toString().length == 0) {
        x = "00";
    }

    document.getElementById("heading").textContent = "#" + h + e + x;

    let inverted = isDarkColor([r, g, b]) ? "#ffffff" : "#000000";

    document.getElementById("heading").style.color = inverted;
    document.getElementById("save-colour").style.color = inverted;
}
