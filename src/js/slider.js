'use strict';

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

//Navigating slider with previous/next buttons
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