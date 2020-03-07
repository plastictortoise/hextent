let hextent_colours = [];

if (localStorage.getItem("hextent_colours") != null) {
    hextent_colours = JSON.parse(localStorage.getItem("hextent_colours"));
} else {
    localStorage.setItem("hextent_colours", JSON.stringify(hextent_colours));
}

if (hextent_colours.length === 0) {
    let message = document.createElement("p");
    message.textContent = "Save some colours and they will appear here.";

    document.getElementById("saved-colours").appendChild(message);
}

function isDarkColor(rgb) {
    return Math.round((
      parseInt(rgb[0], 10) * 299 +
      parseInt(rgb[1], 10) * 587 +
      parseInt(rgb[2], 10) * 114) / 1000
    ) <= 140;
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

let colour_text;
let remove_colour;
let colour_div;

hextent_colours.forEach(function (item, index) {
    colour_div = document.createElement("div");
    colour_div.style.backgroundColor = item;
    colour_div.style.color = isDarkColor([hexToRgb(item).r, hexToRgb(item).g, hexToRgb(item).b]) ? "#ffffff" : "#000000";
    colour_div.id = "colour-div-" + index.toString();
    colour_div.classList.add("colour-div");

    remove_colour = document.createElement("i");
    remove_colour.classList.add("material-icons");
    remove_colour.id = index.toString();
    remove_colour.textContent = "close";

    colour_text = document.createElement("b");
    colour_text.id = "colour-" + index.toString();
    colour_text.textContent = item;

    document.getElementById("saved-colours").appendChild(colour_div);
    document.getElementById("colour-div-" + index.toString()).appendChild(colour_text);
    document.getElementById("colour-div-" + index.toString()).appendChild(remove_colour);

})

for (i = 0; i < document.querySelectorAll("i").length; i++) {
    this.onclick = function (checkId) {
        let filteredArray = hextent_colours.filter(e => e !== document.getElementById("colour-" + checkId["target"]["id"].toString()).textContent);
        console.log(filteredArray);
        hextent_colours = filteredArray;
        localStorage.setItem("hextent_colours", JSON.stringify(hextent_colours));
        location.reload()
    }
}