    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    let ir = 255 - r;
    let ig = 255 - g;
    let ib = 255 - b;
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
        "8" ,
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
        result = Hexadecimal[int%16] + result.toString();
        int = Math.floor(int/16)
    }
    console.log(result.toString().length)
    if (result.toString().length ==2) {
        h = result.toString();
    } 
    if (result.toString().length ==1) {
        h = "0" + result.toString();
    } 
    if (result.toString().length ==0) {
        h = "00";
    }    
    int = g;
    result = "";
    while (int > 0) {
        result = Hexadecimal[int%16] + result.toString();
        int = Math.floor(int/16)
    }
    if (result.toString().length ==2) {
        e = result.toString();
    } 
    if (result.toString().length ==1) {
        e = "0" + result.toString();
    } 
    if (result.toString().length ==0) {
        e = "00";
    }    
    int = b;
    result = "";
    while (int > 0) {
        result = Hexadecimal[int%16] + result.toString();
        int = Math.floor(int/16)
    }
    if (result.toString().length ==2) {
        x = result.toString();
    } 
    if (result.toString().length ==1) {
        x = "0" + result.toString();
    } 
    if (result.toString().length ==0) {
        x = "00";
    }    

    document.getElementById("heading").innerHTML = "#"+h+e+x;
    document.getElementById("heading").style.color = 'rgb(' + ir + ',' + ig + ',' + ib + ')';