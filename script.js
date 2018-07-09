//Toggling menu in mobile view
function toggleNav(){
	document.getElementById('nav-toggle').classList.toggle('hide-menu');
}

//Navigating to selected section
let userScroll = false;
function navScroll(anchor, navItem){
	userScroll = true;
	document.getElementById(anchor).scrollIntoView({ 
		behavior: 'smooth' 
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
				}
			}

		}, 100);
	}
};

//Projects screenshots slider - showing first image, setting index to 0
[].forEach.call(document.getElementsByClassName('gallery'), gallery => {
	gallery.getElementsByTagName('img')[0].style.display = "block";
	gallery.slideIndex = 0;
});

//Projects screenshots slider - navigating with previous/next buttons
function slider(childButton, change){
	let currentGallery = childButton.parentNode;
	currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].style.display = "none";
	currentGallery.slideIndex += change;
	if(currentGallery.slideIndex === currentGallery.getElementsByTagName('img').length){
		currentGallery.slideIndex = 0;
	}else if(currentGallery.slideIndex < 0){
		currentGallery.slideIndex = currentGallery.getElementsByTagName('img').length-1;
	}
	currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].style.display = "block";
}