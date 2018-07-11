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

//Projects screenshots slider - setting index to 0
[].forEach.call(document.getElementsByClassName('gallery'), gallery => {
	gallery.slideIndex = 0;
});

//Projects screenshots slider
function slider(currentGallery, change){
	currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].classList.add('hidden');
	currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].classList.add('display-none');
	currentGallery.slideIndex += change;
	if(currentGallery.slideIndex === currentGallery.getElementsByTagName('img').length){
		currentGallery.slideIndex = 0;
	}else if(currentGallery.slideIndex < 0){
		currentGallery.slideIndex = currentGallery.getElementsByTagName('img').length-1;
	}
	currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].classList.remove('display-none');
	setTimeout(()=>{
		currentGallery.getElementsByTagName('img')[currentGallery.slideIndex].classList.remove('hidden');
	}, 20);
	
}

//Slider navigating with previous/next buttons
function buttonSlider(childButton, change){
	slider(childButton.parentNode, change);
}

//Auto slider
window.setInterval(()=>{
	let galleries = document.getElementsByClassName('gallery');
	for(let i=0; i < galleries.length; i++){
		slider(galleries[i], 1);
	}
}, 5000);

//Message after submitting form
document.getElementById('gform').onsubmit = () => {
	document.getElementById('msg').innerHTML = 'Thank you for your message';
	document.getElementById('gform').style.display = 'none';
	setTimeout(() => {
		document.getElementById('msg').innerHTML = '';
		[].forEach.call(document.getElementsByClassName('text-input'), input => {
			input.value = '';
		});
		document.getElementById('gform').style.display = 'block';
	}, 5000);

};