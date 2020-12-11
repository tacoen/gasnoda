function ncc_html5_interface() {

	document.querySelectorAll('.notices').forEach( function(el) {
	
		el.addEventListener("click", function(e) {
			el.remove()
		})
		
	});
	
	document.querySelectorAll('.alert').forEach( function(el) {
	
		el.addEventListener("click", function(e) {
			el.remove()
		})
		
	});	

}	