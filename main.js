/************* Toggle Icon navbar *************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggle Font Awesome classes for the menuIcon
    menuIcon.classList.toggle('fa-x');
    // Toggle the 'active' class for the navbar
    navbar.classList.toggle('active');
}

/************* Scroll section active link *************/

// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = window.innerHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        };
    });

    /************* Sticky navbar *************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /************* Remove toggle icon and navbar *************/
    // Assuming newIcon is defined somewhere
    newIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

    /************* scrol reveal *************/
ScrollReveal({
    distance: '80px',
    direction: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    /************* Typed js *************/
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'], // 'Strings' should be 'strings'
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
    
