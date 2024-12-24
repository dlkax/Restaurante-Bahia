const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(DistanceFromTheTop){
    window.scroll({
        top: DistanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault(); 
    const DistanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(DistanceFromTheTop);
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

function toggleMenu() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
