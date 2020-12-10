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

	document.querySelectorAll('.res-ctl').forEach( function(el) {
    
		var block = el.closest('.g-block')
		var section = gas(el).data('section');
		gas(block).addClass('responsive');
		gas(block).cssvar('origin-width',block.offsetWidth+'px');
		gas(block).data('ctl',section);
		
		el.addEventListener("click", function(e) {
			var block = el.closest('.g-block')
			gas(block).addClass('responsive');
			gas(block).cssvar('origin-width',block.offsetWidth+'px');
			gas(block).toggleClass('show');
			gas(section).toggleClass('show');
		});		
	
	});


	document.querySelectorAll('.block-ctl').forEach( function(el) {
		var b = el.closest('.g-block');
		var g = el.closest('.g-grid');
		var element =  document.createElement("DIV"); 
		element.innerHTML = el.innerHTML;
		element.setAttribute('class','g-block right middle grow block-ctl');

		b.classList.add('block-res')
    
		//console.log(g.parentNode,g.parentNode.style.height);

		b.style.top=g.offsetHeight+'px';

		el.remove();

		element.addEventListener("click", function(e) {
			if (gas(b).hasClass('show') ) {
				gas(b).removeClass('show')
			} else {
				gas(b).addClass('show')
			}

		});

		g.insertBefore(element,b);

	})

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

	document.querySelectorAll(".g-block.responsive").forEach(function(t) {
		gas(t).cssvar('origin-width',t.offsetWidth+'px');
	});
/*	
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
*/	
	if (document.querySelector('#neoca_scheme_switch')) {
	document.querySelector('#neoca_scheme_switch').addEventListener("click", function(e) {
		if (gas('body').hasClass('dark-scheme')) {
			localStorage.setItem('ncc-scheme','dark');
		} else {
			localStorage.setItem('ncc-scheme','light');
		}
	})
	}
	
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