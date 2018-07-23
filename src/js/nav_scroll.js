'use strict';

//Toggling menu in mobile view
function toggleNav(){
	document.getElementById('nav-toggle').classList.toggle('hide-menu');
}

//Navigating to selected section
let userScroll = false;
function navScroll(anchor, navItem){
	userScroll = true;
	document.getElementById(anchor).scrollIntoView({ 
		behavior: 'smooth',
		block: 'start'
	});
	//Changing menu links to non-active
	[].forEach.call(document.getElementsByClassName('nav-link'), navLink => {
		navLink.classList.remove('active');
	});
	//Changing clicked menu link to active
	navItem.classList.add('active');
	toggleNav();
	setTimeout(()=>{userScroll = false;}, 1000);
}

//Activating navigation link after user scrolls 
window.onscroll = function() {
	//Hiding menu in mobile view when scrolled
	document.getElementById('nav-toggle').classList.add('hide-menu');
	
	if(!userScroll){ //Blocking nav-bar scroll update when navigating from menu
		setTimeout(() => { 
			let sections =  document.getElementsByClassName('nav-anchor');
			let viewTop = window.scrollY + document.getElementById('nav-bar').offsetHeight;
			for(let i=0; i < sections.length; i++) {
				let section = sections[i];
				//Checking if most of the previous section is invisible
				let prevSection = i > 0 ? sections[i-1].offsetTop+sections[i-1].offsetHeight : -1;
				if(viewTop > 0.8*prevSection){
					[].forEach.call(document.getElementsByClassName('nav-link'), navLink => {
						navLink.classList.remove('active');
					});
					document.getElementById(section.id+'-link').classList.add('active');
					//Activating elements' animations in active section
					let animationDelay = 0;
					[].forEach.call(section.getElementsByClassName('animable'), animable => {
						animable.classList.add('onscroll-animation');
						animable.style.animationDelay = animationDelay+'s';
						animationDelay += 0.5;
					});
				}
			}

		}, 100);
	}
	//Toggling up link
	if(document.getElementById('header-link').classList.contains('active')){
		document.getElementById('up-link').classList.add('display-none');
	}else{
		document.getElementById('up-link').classList.remove('display-none');
	}
};