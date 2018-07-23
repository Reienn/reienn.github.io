'use strict';

//Preloader
let preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');     
    }, 100);
    setTimeout(() => {
        preloader.classList.add('display-none');
        document.getElementById('loading-icon').classList.add('paused');
        //Activate header's elements' animations
        document.getElementById('header').childNodes[1].classList.add('onscroll-animation');
        document.getElementById('header').childNodes[3].classList.add('onscroll-animation');
    }, 120);
});