function image_slider(id,n,delay,x) {
	var is = document.getElementById(id);
	is.style.left = '-'+(x*100)+'%'
	var x = x+1;
	if (x >= n) { x = 0 }
	setTimeout(image_slider, 1000 * delay,id, n, delay,x);
}





var slideIndex = 0;
var rol = 0;

function plusSlides(n, d) {
	showSlides((slideIndex += n), d);
}

function currentSlide(n, d) {
	showSlides((slideIndex = n), d);
}

function showSlides(slideIndex, slideSecond) {
	var i;
	var slides = document.getElementsByClassName('carousel-item');
	var dots = document.getElementsByClassName('dot');

	if (slideIndex < 0) {
		slideIndex = slides.length;
	}
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	slidePrev = slideIndex - 1;

	for (i = 0; i < slides.length; i++) {
		slides[i].className = slides[i].className.replace('slide-show', 'slide-hide');
	}

	if (slidePrev < 0 && rol > 0) {
		for (i = 0; i < slides.length; i++) {
			slides[i].className = slides[i].className.replace('slide-after', 'slide-hide');
		}
	}

	if (slidePrev >= 0) {
		slides[slidePrev].className = slides[slidePrev].className.replace('slide-hide', 'slide-after');
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}

	slides[slideIndex].className = slides[slideIndex].className.replace('slide-hide', 'slide-show');
	slides[slideIndex].className = slides[slideIndex].className.replace('slide-after', 'slide-show');

	dots[slideIndex].className += ' active';

	rol = rol + 1;

	setTimeout(showSlides, 1000 * slideSecond, slideIndex + 1, slideSecond);
}