let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".nav");
let searchIcon = document.querySelector("#search-icon")
let searchForm = document.querySelector("#search-form")
let searchClose = document.querySelector("#close")

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

searchIcon.onclick = () => {
    searchForm.classList.toggle('active')
}

searchClose.onclick = () => {
    searchForm.classList.remove('active')
}
