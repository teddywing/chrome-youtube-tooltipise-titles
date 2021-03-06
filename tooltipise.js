(function() {
	function tooltipise_titles () {
		var title_elements = document.querySelectorAll('.yt-uix-sessionlink.yt-uix-tile-link');
		
		for (var i = 0; i < title_elements.length; i++) {
			title_elements[i].setAttribute('title', title_elements[i].innerText);
		}
	}
	
	// Initial load
	tooltipise_titles();
	
	// Refresh titles when more videos are loaded
	var load_more_button = document.querySelector('.load-more-text');
	if (load_more_button) {
		load_more_button.addEventListener('click', function() {
			window.setTimeout(tooltipise_titles, 3000);
		});
	}
})()
