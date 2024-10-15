function load_menu_buttons() {
    var navbar = document.querySelector('.navbar');
    var menus_btn = document.querySelector('.menu-btn');
    var close_btn = document.querySelector('.close-btn');
    menus_btn.addEventListener('click', function () {
        navbar.classList.add('active2');
        menus_btn.classList.add('hide_btn');
    });
    close_btn.addEventListener('click', function () {
        navbar.classList.remove('active2');
        menus_btn.classList.remove('hide_btn');
    });
    console.log("menu_buttons js loaded");
}
window.onload = function () {
    load_menu_buttons();
};
//# sourceMappingURL=script.js.map