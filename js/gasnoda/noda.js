function handleTouch(e) {
	var total = this.clientWidth;
	var x = (total/2)  + e.changedTouches[0].clientX;
	gas(this).addClass('touched')
	this.style.left = (x-total)+"px";
}

function handleTouchEnd(e) {
	gas(this).removeClass('touched')
	var vx = [ this.clientWidth * .5,this.clientWidth *.5 ] ;
	if (gas(this).hasClass('right')) {
		var x = parseInt(this.style.left)
		if (x >= vx[1]) { 
			gas(this).addClass('res-hide');this.style.left = "";
		} else {
			this.style.left = '0px';
		}
	} else {
		var x = e.changedTouches[0].clientX+this.clientWidth/2;
		if (x <= vx[0]) { 
			gas(this).addClass('res-hide'); this.style.left = "";
		} else {
			this.style.left = '0px';
		}
	}

}

/* ------------------------------------------- */

function noda_responsive_function() {
	
	/* only works on touch media */

	document.querySelectorAll(".res-ctl").forEach(function(t) {
		t.addEventListener("click", function(e) {
			var target = gas(t).data('section');
			if (gas(target).hasClass('res-show')) {
				gas(t).removeClass('active')
				gas(target).removeClass('res-show');
			} else {
				gas(t).addClass('active')
				gas(target).addClass('res-show');
			}
				
		})
	});

	document.querySelectorAll('.res.swipe').forEach(function(t) {
		//console.log(t);
		t.addEventListener('touchstart', handleTouch, false)
		t.addEventListener('touchmove', handleTouch, false)
		t.addEventListener('touchend', handleTouchEnd, false)
	});

	document.querySelectorAll('.notices').forEach(function(t) {
		t.addEventListener('click', function(e) {
			t.remove();
		})
	});
}
	
function noda_attr_utilities() {

	document.querySelectorAll("[data-height]").forEach(function(t) {
		t.style.height = t.getAttribute('data-height');
	});
	
	document.querySelectorAll("[data-toggle]").forEach(function(t) {
		t.addEventListener("click", function(e) {
			
			var target = document.querySelector(t.getAttribute('data-toggle'));
			
			//console.log(target.classList)
			
			if ( target.classList.contains('toggle-off') ) {
				target.classList.remove('toggle-off');
			} else {
				target.classList.add('toggle-off');
			}
		});
	});
	
}

function noda_sectioncolor() {

	var sections = document.querySelectorAll("[class*='section-']")
	var this_done = [];
	
	sections.forEach(function(s) {

		sc = s.classList.value;
		
		/* clean class from extend classes */
		var re = /(.+)(section-(\w+\s?))(.+)?/gm;
		var shadow = sc.replace(re, '$2').trim();
		var shadow = shadow.split(' ');
		var shadow = shadow[0];
		var shadow = shadow.trim();
		
		if (! this_done.includes(shadow)) {

			this_done.push(shadow);

			if (
				(shadow != 'section-main') &&
				(shadow != 'section-offcanvas') &&
				(shadow != 'section-floats')
				){
				/* 
				 * section-main use :root 
				 * section-floats: basicaly is hidden sections
				 */
				construct_SectionPallete2("."+shadow);
				gas(s).addClass('hsl-pal');
			}
		}
		
	})
}