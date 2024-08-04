let fcar = document.getElementById('fcar');
let scar = document.getElementById('scar');
onscroll = function family() {
    if (scrollY >= 1700) {
        fcar.style.opacity = 1;
        scar.style.opacity = 1;
        fcar.style.translate = '0px';
        fcar.style.transition = '2s';
        // scar.style.transitionDelay = '10s';
        scar.style.transition = '2s';
        scar.style.translate = '0px';
    }

    else {
        fcar.style.translate = '400px';
        scar.style.translate = '400px';
        fcar.style.opacity = 0;
        scar.style.opacity = 0;
    }
}



