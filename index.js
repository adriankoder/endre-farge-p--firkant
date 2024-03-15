//let hungry = true;
//const ishungry = "personen er sulten" + hungry;

//console.log(ishungry)
//const tekst1 = 5
//const tekst2 = 10
//console.log(tekst1 + tekst2)





//link til html
const farge = document.querySelector("#color");
let darkmode = true;
// Eventlistener for knappen
farge.addEventListener("click", function() {

    // Koden her blir utført når knappen blir klikket

    console.log (farge)});
function changeColor() {

    darkmode=!darkmode;
    console.log(darkmode);
    if (darkmode) {
        farge.style.backgroundColor = "black";
    } else {
        farge.style.backgroundColor = "red";
    }
}

    