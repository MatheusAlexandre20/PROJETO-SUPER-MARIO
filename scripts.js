
let formulário = document.querySelector(".faleconosco")
let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotão() {
    formulário.style.left = "50%"
    mascara.style.visibility = "visible"
    formulário.style.transform = "translateX(-50%)"
}

function sumirFormulário() {
    formulário.style.left = "-310px"
    formulário.style.transform = "transalateX(0)"
    mascara.style.visibility = "hidden"
}