(function() {
	var title_elements = document.querySelectorAll('.yt-uix-sessionlink.yt-uix-tile-link');
	
	for (var i = 0; i < title_elements.length; i++) {
		title_elements[i].setAttribute('title', title_elements[i].innerText);
	}
})()
