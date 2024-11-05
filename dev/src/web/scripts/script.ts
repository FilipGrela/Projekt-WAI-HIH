import $ from "jquery";
import "jquery-ui/ui/widgets/dialog.js";
import "jquery-ui/ui/widgets/tooltip.js"
import "jquery-ui/themes/base/tooltip.css"
// import "jquery-ui/themes/base/base.css"

function load_menu_buttons(): void {
    let navbar:Element = <Element>document.querySelector('.navbar');
    let menus_btn:Element = <Element>document.querySelector('.menu-btn');
    let close_btn:Element = <Element>document.querySelector('.close-btn');

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
        link.addEventListener('click', function(this: HTMLAnchorElement) {
            // Usuwanie klasy 'selected' z wszystkich linków
            menuLinks.forEach(link => link.classList.remove('selected'));
            console.log(this.getAttribute('href')); // 'this' is now correctly typed

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
    $("#dialog").dialog({
        closeText: "X"
    });
    h1.setAttribute("class", "form-sent-nortification");
    h1.textContent  = "Niedawno wysłano zgłoszenie!";
    fragment.append(h1);


    const form_container = document.getElementById("form-container") as HTMLElement;
    form_container.appendChild(fragment);

}



window.onload = () => {
    load_menu_buttons();
    $('#form-container').tooltip();
}