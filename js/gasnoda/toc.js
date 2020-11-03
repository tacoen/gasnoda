function prepare_for_tocbot(from) {

	var doc = document.querySelector(from);
	doc.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach( function(h) {
		if (h) {
			var hid = h.innerText.replace(/\W+/igm,'_').replace(/^_|_$/igm,'').toLowerCase();
			if (h.id=='') { h.id=hid }
		}
	});
	
}	


