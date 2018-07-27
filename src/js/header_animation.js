'use strict';

//Background SVG image animation
let animationDelay = 500;
[].forEach.call(document.getElementsByTagName('path'), path => {
    setTimeout(()=>{
        path.style.opacity = 1;
    }, animationDelay);
    animationDelay += 100;
});

setTimeout(()=>{
    //Activate header's elements' animations
    document.getElementById('title').classList.add('onscroll-animation');
    document.getElementById('subtitle').classList.add('onscroll-animation');
}, animationDelay);
