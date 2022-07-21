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
        setTimeout(function () {
            document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "visible";
        }, 200);
        setTimeout(slideIn(), 200)
    }
    else {
        document.getElementById("myNav").style.height = "0%";
        document.getElementsByClassName("overlay-sidebar")[0].style.visibility = "hidden";

        for (var i = 1; i <= 2; i++) {
            if (document.getElementById("child"+''+i).classList.contains("active")) {
                document.getElementById("child"+''+i).classList.toggle("active");
            }
        }

        for (var i = 1; i <= 1; i++) {
            if (document.getElementById("grandchild"+''+i).classList.contains("active")) {
                document.getElementById("grandchild"+''+i).classList.toggle("active");
            }
        }

        var btn = document.getElementsByClassName("anim");
        for (var i = 0; i < 6; i++) {
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

// NARPAWIC ANIMACJE

function clearAnim(class_name) {
    if (class_name != "none") {
        var anim_element = document.getElementsByClassName(class_name);
        for(var i = 0; i < anim_element.length; i++){
            anim_element[i].classList.toggle("animate__animated");
            anim_element[i].classList.toggle("animate__fadeInLeft");
        }
    }
}

function setAnim(class_name) {
    if (class_name != "none") {
        var anim_element = document.getElementsByClassName(class_name);
        for(var i = 0; i < anim_element.length; i++){
            anim_element[i].classList.toggle("animate__animated");
            anim_element[i].classList.toggle("animate__fadeInLeft");
        }
    }
}

function setActive(class_name, index) {
    if (class_name != "none") {
        var active_element = document.getElementsByClassName(class_name);
        for(var i = 0; i < active_element.length; i++) {
            active_element[i].classList.toggle("noactive");
        }
        active_element[index-1].classList.toggle("noactive"); 
        active_element[index-1].classList.toggle("active"); 
    }
}

function showChilds(child_type, index, class_active_name, class_anim_name) {
     // deleting old children from screen
     var over1ay_sidebar_children = document.getElementsByClassName("overlay-sidebar-"+child_type+"ren");    
     for (var i = 0; i < over1ay_sidebar_children.length; i++ ){
        if(over1ay_sidebar_children[i].classList.contains("active")){
            // checking if not same
            if (i != index-1) {
                setActive(class_active_name, i+1);
                over1ay_sidebar_children[i].classList.toggle("active");
            }
            break;
        }
     }

     // showing children if different, deleting if same
     document.getElementById(child_type+''+index).classList.toggle("active");

     // making element active
     clearAnim(class_anim_name);
     setActive(class_active_name, index);
     setAnim(class_anim_name);
}

function slideIn() {
    var btn = document.getElementsByClassName("anim");
    for (var i = 0; i < 6; i++) {
        btn[i].classList.add("animate__animated", "animate__fadeInDown");
    }
}
function scrollDown() {
    document.body.scrollTo(1000, 1000);
}
