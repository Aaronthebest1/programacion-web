document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.frontal');
ScrollReveal().reveal('.columnas', { delay: 500 });
ScrollReveal().reveal('.frontal-1', { delay: 500 });