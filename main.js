// Mobile menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');

// Toggle menu
burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => { 
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
    
    // Prevent body scroll when menu is open
    body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav-active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    });
});

// Close mobile menu when resizing window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    }
});

// Footer functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
         scrollToTopBtn.style.display = 'none';
     }
    });

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
         top: 0,
         behavior: 'smooth'
    });
});

