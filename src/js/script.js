const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

menuBtn.onclick = function(event) {
    menuBtn.classList.toggle("hamburger_active");

    if(menuBtn.classList.contains("hamburger_active")) {
        menu.classList.add("menu_active")
    } else {
        menu.classList.remove("menu_active")
    }
}

menu.onclick = function(event) {
    if (event.target.tagName != "A") return;
    if (!menuBtn.classList.contains("hamburger_active")) return;

    menuBtn.classList.remove("hamburger_active");
    menu.classList.remove("menu_active");

}