let lockerStatus = "locked"
let toggleLockerSvg;
let toggleInstructions;
let opmerkingbtn;
let opmerkingdiv;
let schrijfOpmerking = true;
let submitbtn;
function ListenToClickToggleLocker() {
    toggleLockerSvg.addEventListener('click', function () {
        console.log('Geopend')
    })
}

function ListenToClickOpmerkingBtn() {
    opmerkingbtn.addEventListener('click', function () {
        if (schrijfOpmerking) {
            opmerkingdiv.style = "display: block;"
            opmerkingbtn.innerHTML = "Annuleren"
            opmerkingbtn.style = "background-color : var(--status-unavailable);"
            console.log("Schrijf een opmerking")
            schrijfOpmerking = false;
            submitbtn.style = "display: block"
        } else {
            opmerkingbtn.style = "background-color : var(--blue-accent-color);"
            opmerkingbtn.innerHTML = "Opmerking toevoegen"
            opmerkingdiv.style = "display: none;"
            schrijfOpmerking = true
            console.log("Annuleer")
            submitbtn.style = "display: none"
        }
    })
}

function init() {
    console.log('DOM Geladen')
    toggleLockerSvg = document.querySelector(".js-toggleLocker")
    toggleInstructions = document.querySelector(".locker_detail_content_toggleInstructions")
    opmerkingbtn = document.querySelector('.js-opmerkingbtn')
    opmerkingdiv = document.querySelector('.div_locker_detail_opmerking')
    submitbtn = document.querySelector('.js-submit');
    ListenToClickToggleLocker();
    ListenToClickOpmerkingBtn(schrijfOpmerking);
}

document.addEventListener('DOMContentLoaded', init)
