"use strict";document.getElementById("gform").onsubmit=()=>{document.getElementById("msg").innerHTML="Thank you for your message",document.getElementById("gform").style.display="none",setTimeout(()=>{document.getElementById("msg").innerHTML="",[].forEach.call(document.getElementsByClassName("text-input"),e=>{e.value=""}),document.getElementById("gform").style.display="block"},5e3)};let animationDelay=500;function toggleNav(){document.getElementById("nav-toggle").classList.toggle("hide-menu")}[].forEach.call(document.getElementsByTagName("path"),e=>{setTimeout(()=>{e.style.opacity=1},animationDelay),animationDelay+=100});let userScroll=!1;function navScroll(e,t){userScroll=!0,document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"}),[].forEach.call(document.getElementsByClassName("nav-link"),e=>{e.classList.remove("active")}),t.classList.add("active"),toggleNav(),setTimeout(()=>{userScroll=!1},1e3)}window.onscroll=function(){document.getElementById("nav-toggle").classList.add("hide-menu"),userScroll||setTimeout(()=>{var t=document.getElementsByClassName("nav-anchor"),l=window.scrollY+document.getElementById("nav-bar").offsetHeight;for(let e=0;e<t.length;e++){var n=t[e];if(.8*(0<e?t[e-1].offsetTop+t[e-1].offsetHeight:-1)<l){[].forEach.call(document.getElementsByClassName("nav-link"),e=>{e.classList.remove("active")}),document.getElementById(n.id+"-link").classList.add("active");let t=0;[].forEach.call(n.getElementsByClassName("animable"),e=>{e.classList.add("onscroll-animation"),e.style.animationDelay=t+"s",t+=.5})}}},100),document.getElementById("header-link").classList.contains("active")?document.getElementById("up-link").classList.add("display-none"):document.getElementById("up-link").classList.remove("display-none")};let preloader=document.getElementById("preloader");function slider(e,t){e.getElementsByTagName("img")[e.slideIndex].classList.add("hidden"),e.getElementsByTagName("img")[e.slideIndex].classList.add("display-none"),e.slideIndex+=t,e.slideIndex===e.getElementsByTagName("img").length?e.slideIndex=0:e.slideIndex<0&&(e.slideIndex=e.getElementsByTagName("img").length-1),e.getElementsByTagName("img")[e.slideIndex].classList.remove("display-none"),setTimeout(()=>{e.getElementsByTagName("img")[e.slideIndex].classList.remove("hidden")},20)}function buttonSlider(e,t){slider(e.parentNode,t)}window.addEventListener("load",()=>{setTimeout(()=>{preloader.classList.add("hidden")},100),setTimeout(()=>{preloader.classList.add("display-none"),document.getElementById("loading-icon").classList.add("paused")},120)}),[].forEach.call(document.getElementsByClassName("gallery"),e=>{e.slideIndex=0});