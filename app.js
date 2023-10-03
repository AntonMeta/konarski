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

function openNav() {
    if (menu.classList.contains('opened')) {
        document.getElementById("myNav").style.height = "100%";
        setTimeout(function () {
            document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "visible";
        }, 200);
        setTimeout(slideIn(), 200)
        document.getElementsByClassName("container").classList.toggle("opened");
    }
    else {
        document.getElementById("myNav").style.height = "0%";
        document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "hidden";

        for (var i = 1; i <= 5; i++) {
            if (document.getElementById("child" + '' + i).classList.contains("active")) {
                document.getElementById("child" + '' + i).classList.toggle("active");
            }
        }

        for (var i = 1; i <= 6; i++) {
            if (document.getElementById("grandchild" + '' + i).classList.contains("active")) {
                document.getElementById("grandchild" + '' + i).classList.toggle("active");
            }
        }

        var active_element = document.getElementsByClassName("span_first");
        for (var i = 0; i < active_element.length; i++) {
            if (active_element[i].classList.contains("active")) {
                active_element[i].classList.toggle("active");
            } else {
                active_element[i].classList.remove("noactive");
            }
        }

        var btn = document.getElementsByClassName("anim");
        for (var i = 0; i < 5; i++) {
            btn[i].classList.remove("animate__animated", "animate__fadeInDown");
        }
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

function setActive(class_name_span, index) {
    if (class_name_span != "none") {
        var active_element_span = document.getElementsByClassName(class_name_span);
        for (var i = 0; i < active_element_span.length; i++) {
            active_element_span[i].classList.toggle("noactive");
        }
        active_element_span[index - 1].classList.toggle("noactive");
        active_element_span[index - 1].classList.toggle("active");
    }
    var active_element_button = document.getElementsByClassName("anim");
    for (var i = 0; i < active_element_button.length; i++) {
        if (active_element_button[i].classList.contains("active")) {
            active_element_button[i].classList.toggle("active");
        }
    }
    active_element_button[index - 1].classList.toggle("active");
}

function showChilds(child_type, index, class_active_name, class_anim_name) {
    // deleting old children from screen
    var over1ay_sidebar_children = document.getElementsByClassName("overlay-sidebar-" + child_type + "ren");
    for (var i = 0; i < over1ay_sidebar_children.length; i++) {
        if (over1ay_sidebar_children[i].classList.contains("active")) {
            // checking if not same
            if (i != index - 1) {
                setActive(class_active_name, i + 1);
                over1ay_sidebar_children[i].classList.toggle("active");
            }
            break;
        }
    }

    // deleting grandchildren if sidebar is off
    if (child_type == "child") {
        var over1ay_sidebar_grandchildren = document.getElementsByClassName("overlay-sidebar-grandchildren");
        for (var i = 0; i < over1ay_sidebar_grandchildren.length; i++) {
            if (over1ay_sidebar_grandchildren[i].classList.contains("active")) {
                over1ay_sidebar_grandchildren[i].classList.toggle("active");
            }
        }
        var active = document.getElementsByClassName("mother");
        for (var i = 0; i < active.length; i++) {
            if (active[i].classList.contains("active")) {
                active[i].classList.toggle("active");
            }
        }
    }

    // showing children if different, deleting if same
    document.getElementById(child_type + '' + index).classList.toggle("active");

    // making element active
    setActive(class_active_name, index);
    animateCSS(class_anim_name, 'fadeInLeft');
}

function slideIn() {
    var btn = document.getElementsByClassName("anim");
    for (var i = 0; i < 5; i++) {
        btn[i].classList.add("animate__animated", "animate__fadeInDown");
    }
}
function scrollDown() {
    document.body.scrollTo(1000, 1000);
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.getElementsByClassName(element);

        for (var i = 0; i < node.length; i++) {
            node[i].classList.add(`${prefix}animated`, animationName);
        }

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            for (var i = 0; i < node.length; i++) {
                node[i].classList.remove(`${prefix}animated`, animationName);
            }
            resolve('Animation ended');
        }

        node[0].addEventListener('animationend', handleAnimationEnd, { once: true });
    });
