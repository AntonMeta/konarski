var button_up = document.getElementsByClassName("ScrollUpBtn")[0];

window.onscroll = function () { scrollFunction() };

function mobi() {
    window.open("https://pz1oswiecim.mobidziennik.pl/dziennik/planlekcji?typ=podstawowy", "_blank")
}

document.body.onload = function () {
    document.getElementsByClassName("container")[0].classList.add("container-loaded");
    setTimeout(document.getElementsByClassName("main-photo")[0].classList.add("main-photo-loaded"));
    setTimeout(document.getElementsByClassName("text")[0].classList.add("text-loaded"), 6);
}

function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        button_up.style.display = "block";

    } else {
        button_up.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var menu = document.getElementById("navBtn");
var navi = document.getElementById("myNav");

function menuSlide() {
    menu.classList.toggle("opened");
    menu.setAttribute("aria-expanded", menu.classList.contains("opened"));
    openNav()
}

function openNav() {
    if (menu.classList.contains("opened")) {
        navi.style.height = "100 %";
    } else {
        navi.style.height = "100 %";
    }
}