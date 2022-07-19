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

var menu = document.getElementById("navBtn");
function openNav() {
    if (menu.classList.contains('opened')) {
        document.getElementById("myNav").style.height = "100%";
        document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "visible";
    }
    else {
        document.getElementById("myNav").style.height = "0%";
        document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "hidden";
    }
}

function initMap() {
    const loc = { lat: 50.04473910905056, lng: 19.211139311098908 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: loc,
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
}

window.initMap = initMap;

function showChild(n) {
    n.classList.toggle("active");
    // if () {
    //     document.getElementsByClassName("overlay-sidebar-children")[n].style.visibility = "visible";

    // }
    // else {
    //     document.getElementsByClassName("overlay-sidebar-children")[n].style.visibility = "hidden";
    // }
}
