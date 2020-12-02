function gatree_init() {
	
	var tree = document.querySelectorAll('ol.gatree li a');
	var uri = window.location.href.replace(location.hostname,'').replace(location.protocol,'').replace('//','');

	tree.forEach( function(c) {
		var parent = c.parentElement;
		var parent_class = c.parentElement.classList;
		
		/*
			if (c.closest('li.parent')) {
				if (uri.includes(c.getAttribute('href'))) {
					c.closest('li.parent').classList.add('open');
					if (uri==c.getAttribute('href')) {
						c.classList.add('active');					
					}
				}
			}
		*/
		
		if (parent_class.contains('parent')) {
			var indicator = document.createElement("span");
			indicator.classList.add('indicator')
			
			parent.prepend(indicator);
			
			indicator.addEventListener("click", function(e) {
				console.log(parent_class);
				if(parent_class.contains("open")) {
					parent_class.remove('open');
					var opensubs = parent.querySelectorAll(':scope .open');
					for(var i = 0; i < opensubs.length; i++){
						opensubs[i].classList.remove('open');
					}
				} else {
					parent_class.add('open');
				}
			});
		
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	
	if (document.querySelector('ol.gatree')) { gatree_init(); }
	
})