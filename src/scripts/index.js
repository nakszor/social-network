const goToRegisterBtn = document.getElementById("registerbutton")

const divFormLogin = document.querySelector("#div-login") 
const divFormRegister = document.getElementById("div-register")

const btnregister = document.querySelector(".button-register")
const btnlogin = document.querySelector(".button-login")
const btnVoltar = document.getElementById("btn-voltar")
const btngotologin = document.getElementById("go-to-login-button")

const modal1 = document.querySelector(".modal-1")
const btnCloseModal = document.querySelector("#button-modal")

goToRegisterBtn.addEventListener("click",  () => {
    divFormLogin.style.display = "none"
    divFormRegister.style.display = "block"
    btnregister.style.background = "var(--grey3)"
    btnlogin.style.background = "var(--grey1)"
})
btnregister.addEventListener("click",  () => {
    divFormLogin.style.display = "none"
    divFormRegister.style.display = "block"
    btnregister.style.background = "var(--grey3)"
    btnlogin.style.background = "var(--grey1)"
})
btnlogin.addEventListener("click",  () => {
    divFormRegister.style.display = "none"
    divFormLogin.style.display = "block"
    btnregister.style.background = "var(--grey1)"
    btnlogin.style.background = "var(--grey3)"
})
btnVoltar.addEventListener("click",  () => {
    divFormRegister.style.display = "none"
    divFormLogin.style.display = "block"
    btnregister.style.background = "var(--grey1)"
    btnlogin.style.background = "var(--grey3)"
})
btngotologin.addEventListener("click",  () => {
    divFormRegister.style.display = "none"
    divFormLogin.style.display = "block"
    btnregister.style.background = "var(--grey1)"
    btnlogin.style.background = "var(--grey3)"
})
btnCloseModal.addEventListener("click", () => {
    modal1.style.display = "none"
})
