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

        for (var i = 1; i <= 1; i++) {
            var nigger = i + '';
            if (document.getElementById("child" + nigger).classList.contains("active")) {
                document.getElementById("child" + nigger).classList.toggle("active");
            }
        }

        var btn = document.getElementsByClassName("anim");
        for (var i = 0; i < 6; i++) {
            btn[i].classList.remove("animate__animated", "animate__fadeInDown");
        }

        var btn = document.getElementsByClassName("anim2");
        for (var i = 0; i < 6; i++) {
            btn[i].classList.remove("animate__animated", "animate__fadeInLeft");
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

// FUNKCJA NARAZIE DZIALA, ALE PRZYDALOBY SIE KIEDYS PRZEPISAC NA COS BARDZIEJ CZYTELNEGO, LEPIEJ ZROBIONEGO :)

function slideInLeft() {
    var btn = document.getElementsByClassName("anim2");
    for (var i = 0; i < 13; i++) {
        btn[i].classList.add("animate__animated", "animate__fadeInLeft");
    }
}
function showChild(a, n) {
    var btn = document.getElementsByClassName("anim2");
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("animate__animated")) {
            btn[i].classList.remove("animate__animated");
            btn[i].classList.remove("animate__fadeInLeft");
        }
    }
    if (a.classList.contains("active")) {
        var spans = document.getElementsByClassName("span_first");
        for (var i = 0; i < 6; i++) {
            if (spans[i].classList.contains("noactive")) {
                spans[i].classList.toggle("noactive");
            }
            if (spans[i].classList.contains("active")) {
                spans[i].classList.toggle("active");
            }
        }
        for (var j = 1; j <= 2; j++) {
            if (document.getElementById("child" + '' + j).classList.contains("active")) {
                document.getElementById("child" + '' + j).classList.toggle("active");
            }
        }
    } else {
        var spans = document.getElementsByClassName("span_first");
        for (var i = 0; i < 6; i++) {
            if (spans[i].classList.contains("noactive")) {
                spans[i].classList.toggle("noactive");
            }
        }

        for (var i = 0; i < 6; i++) {
            if (spans[i].classList.contains("active")) {
                if (a != spans[i]) {
                    spans[i].classList.toggle("active");
                }
                break;
            }
        }

        ///////////////////////////////////
        for (var i = 0; i < 6; i++) {
            spans[i].classList.toggle("noactive");
        }

        ////////////////////////////////
        for (var j = 1; j <= 2; j++) {
            if (document.getElementById("child" + '' + j).classList.contains("active")) {
                if (j != n) {
                    document.getElementById("child" + '' + j).classList.toggle("active");
                }
                break;
            }
        }
        a.classList.toggle("noactive");
        a.classList.toggle("active");
        document.getElementById("child" + '' + n).classList.toggle("active");
        slideInLeft();
    }
}
function showGrandChild(n) {
    var btn = document.getElementsByClassName("anim2");
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("animate__animated")) {
            btn[i].classList.remove("animate__animated");
            btn[i].classList.remove("animate__fadeInLeft");
        }
    }
    // if (a.classList.contains("active")) {
    //     // var spans = document.getElementsByClassName("span_first");
        // for (var i = 0; i < 6; i++) {
        //     if (spans[i].classList.contains("noactive")) {
        //         spans[i].classList.toggle("noactive");
        //     }
        //     if (spans[i].classList.contains("active")) {
        //         spans[i].classList.toggle("active");
        //     }
        // }
        // for (var j = 1; j <= 2; j++) {
        //     if (document.getElementById("grandchild" + '' + j).classList.contains("active")) {
        //         document.getElementById("grandchild" + '' + j).classList.toggle("active");
        //     }
        // }
    // } else {
        // var spans = document.getElementsByClassName("span_first");
        // for (var i = 0; i < 6; i++) {
        //     if (spans[i].classList.contains("noactive")) {
        //         spans[i].classList.toggle("noactive");
        //     }
        // }

        // for (var i = 0; i < 6; i++) {
        //     if (spans[i].classList.contains("active")) {
        //         if (a != spans[i]) {
        //             spans[i].classList.toggle("active");
        //         }
        //         break;
        //     }
        // }

        ///////////////////////////////////
        // for (var i = 0; i < 6; i++) {
        //     spans[i].classList.toggle("noactive");
        // }

        ////////////////////////////////
        for (var j = 1; j <= 2; j++) {
            if (document.getElementById("child" + '' + j).classList.contains("active")) {
                if (j != n) {
                    document.getElementById("child" + '' + j).classList.toggle("active");
                }
                break;
            }
        }
        // a.classList.toggle("noactive");
        // a.classList.toggle("active");
        document.getElementById("grandchild" + '' + n).classList.toggle("active");
        slideInLeft();
    // }
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
