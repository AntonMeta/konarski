var button_up = document.getElementsByClassName("ScrollUpBtn")[0];

window.onscroll = function () { scrollFunction() };

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

var menu = document.getElementById("navBtn")
function openNav() {
    if (menu.classList.contains('active')) {
        document.getElementById("myNav").style.height = "100%";
        console.log('Yahhh! Class is found.')
    }
    else {
        document.getElementById("myNav").style.height = "0%";
        console.log('not this time')
    }
}
