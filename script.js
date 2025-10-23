// DOM Element Selectors
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".nav");
let searchIcon = document.querySelector("#search-icon")
let searchForm = document.querySelector("#search-form")
let searchClose = document.querySelector("#close")
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .nav a')

// Dark/Light Mode Toggle
let themeToggle = document.querySelector("#theme-toggle");
let currentTheme = localStorage.getItem('theme') || 'light';


// Mobile Menu Toggle Functionality
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

// Navigation Active State on Scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id')

      if(top => offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active')
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
        })
      }
    })
}

// Search Overlay Toggle
searchIcon.onclick = () => {
    searchForm.classList.toggle('active')
}

searchClose.onclick = () => {
    searchForm.classList.remove('active')
}

//Initialize Swiper Slider Configuration with Autoplay Progress
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

// Page Loader Functions
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut(){
  setInterval(loader, 3000)
}

window.onload = fadeOut


// Set initial theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
}

// Theme toggle functionality with loader
themeToggle.onclick = () => {
    // Show loader
    document.querySelector('.loader-container').classList.remove('fade-out');
    document.querySelector('.loader-container').style.display = 'flex';
    
    setTimeout(() => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            // Switch to light mode
            document.documentElement.removeAttribute('data-theme');
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
        
        // Hide loader after theme change
        setTimeout(() => {
            document.querySelector('.loader-container').classList.add('fade-out');
            setTimeout(() => {
                document.querySelector('.loader-container').style.display = 'none';
            }, 1000);
        }, 500);
        
    }, 1000);
}
