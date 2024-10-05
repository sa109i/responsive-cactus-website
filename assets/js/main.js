const navOpen = document.getElementById('menu-line');
const navMenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.close-line');
const header = document.querySelector(".header");

navOpen.addEventListener("click", () => {
    navMenu.classList.add('nav-open');
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove('nav-open');
})

window.addEventListener("scroll", () => {
    window.scrollY >= 50 ? header.classList.add('blur_header') : header.classList.remove('blur_header');
})

const navLinks = document.querySelector('.nav-links');

Array.from(navLinks.children).forEach((item) => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
    })
})

const main = document.querySelector('main');
const sections = Array.from(main.children);

const activeLink = () => {
    const scrollDown = window.scrollY;

    sections.forEach(item => {
        const sectionHeight = item.offsetHeight,
              sectionTop = item.offsetTop - 60,
              sectionId = item.getAttribute('id'),
              sectionClass = document.querySelector(`.nav-link a[href*=${sectionId}]`);
        
        if (scrollDown > sectionTop && scrollDown < sectionHeight + sectionTop){
            sectionClass.classList.add('active_link');
        } else {
            sectionClass.classList.remove('active_link');
        }
    })
}


window.addEventListener('scroll', activeLink);

const sr = new ScrollReveal({
    delay: 300,
    distance: '80px', 
    duration: 2500,
    origin: 'top'
});

sr.reveal('.home-image, .news-content, .care_image, .footer, .contact_info');
sr.reveal('.home-content, .care_list, .contact_img', {delay: 500});
sr.reveal('.card-item', {delay: 500, interval: 100});
sr.reveal('.shop-card', {interval: 100});


const scrollUp = document.querySelector('.scrollUp');

window.addEventListener("scroll", () => {
    window.scrollY >= 350 ? scrollUp.classList.remove('scroll_hide') : scrollUp.classList.add('scroll_hide');
})