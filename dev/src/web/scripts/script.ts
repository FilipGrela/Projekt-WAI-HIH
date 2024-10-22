import * as $ from "jquery";

function load_menu_buttons(): void {
    let navbar:Element = document.querySelector('.navbar');
    let menus_btn:Element = document.querySelector('.menu-btn');
    let close_btn:Element = document.querySelector('.close-btn');

    menus_btn.addEventListener('click', () => {
        navbar.classList.add('active2');
        menus_btn.classList.add('hide_btn');
    })

    close_btn.addEventListener('click', () => {
        navbar.classList.remove('active2');
        menus_btn.classList.remove('hide_btn');
    })

    let menuLinks:NodeListOf<Element> = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Usuwanie klasy 'selected' z wszystkich linków
            menuLinks.forEach(link => link.classList.remove('selected'));
            console.log(link.getAttribute('href'));

            // Dodawanie klasy 'selected' do klikniętego linka
            this.classList.add('selected');
        });
    });

    $( "#form-opinion" ).on( "submit", function( event ) {
        if (!confirm( "Czy wysłać twoje zgłoszenie?")){
            event.preventDefault();
        }else {
            addSendInformation();
        }
    });

    console.log("menu_buttons js loaded");
}

function addSendInformation(){

    const fragment = new DocumentFragment();

    const h1:HTMLHeadingElement = document.createElement("h1");
    h1.setAttribute("class", "form-sent-nortification");
    h1.textContent  = "Niedawno wysłano zgłoszenie!";
    fragment.append(h1);

    document.getElementById("form-container").appendChild(fragment);
}

window.onload = () => {
    load_menu_buttons();
}