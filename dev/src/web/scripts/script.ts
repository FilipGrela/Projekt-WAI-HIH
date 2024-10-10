let navbar = document.querySelector('.navbar');
let menus_btn = document.querySelector('.menu-btn');
let close_btn = document.querySelector('.close-btn');

menus_btn.addEventListener('click', () => {
    navbar.classList.add('active2');
    menus_btn.classList.add('hide_btn');
})

close_btn.addEventListener('click', () => {
    navbar.classList.remove('active2');
    menus_btn.classList.remove('hide_btn');
})
