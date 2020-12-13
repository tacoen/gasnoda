function gn_modular_slideshow(ele,sec=15) {

	var r = gas(ele); 

	if (r) {
		var sec = r.data('delay')
		window.value = 0
		console.log(sec);
		setInterval(function(){ 
			gn_modular_slideshow_func(r);
		}, sec*1000 );
	}
}

function gn_modular_slideshow_func(r) {
	var images = r.data('image').split(",");
	window.value = window.value + 1;
	if (window.value == images.length) { window.value = 0; }
	console.log(window.value,images[window.value])
	r.style('backgroundImage','url('+images[window.value]+')');
}