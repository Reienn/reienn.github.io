'use strict';

//Preloader
let preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.classList.add('display-none');
            document.getElementById('loading-icon').classList.add('paused');
        }, 20);
    }, 500);   
});