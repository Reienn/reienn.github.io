'use strict';

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