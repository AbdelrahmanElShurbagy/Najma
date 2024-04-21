const SearchPopUp = document.getElementById("SearchPopUp")
const profilePopUp = document.getElementById("profilePopUp")
const signInPopUp = document.getElementById("signInPopUp")
const clientInput = document.getElementById("username-input")
const clientCreateInput = document.getElementById("createUser-input")
const username = document.getElementById("yourUsername")
const profileBtn = document.getElementById("profile-btn")
const shopNowBtn = document.getElementById("shop-btn")
const createPopup = document.getElementById("CreateAcoountPopUp")
let loggedIn = false



function searchPopUp() {
    SearchPopUp.style.display = "flex"
}

function Close() {

    SearchPopUp.style.display = "none"
    profilePopUp.style.display = "none"
    signInPopUp.style.display = "none"
    createPopup.style.display = "none"
}

function profile() {

    if (loggedIn === false) {
        return  profilePopUp.style.display = "block"
    } 
    
}

function createAccount() {
    createPopup.style.display = "block"

}

function signIn() {
    
    signInPopUp.style.display = "block"

}

function createUsername() {
    let createUsername = clientCreateInput.value
    username.textContent  = "Welcome " + createUsername
    createPopup.style.display = "none"
    loggedIn = true

}

function welcomeName() {
    let yourName = clientInput.value
    username.textContent  = "Welcome " + yourName
    signInPopUp.style.display = "none"
    profileBtn.style.display = "none"
    profilePopUp.style.display = "none"
    
    loggedIn = true
}

function shopNow() {
    window.location.href = "./pages/Home.html"
}