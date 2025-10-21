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

//Initialize swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
});
