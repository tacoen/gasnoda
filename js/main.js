var scheme = 'light';

window.addEventListener('resize', function() {

	gn_breakpoint_tagging();
	var dt = gn_fixtop('.dock-top',false); 

	noda_attr_utilities()

	var bp = gas('body').cssvar('mobile-breakpoint').replace('rem','');

	if ( window.innerWidth < (bp*16) ) {

        document.querySelectorAll('.g-block.show').forEach( function(el) {
        	if ( gas(el).hasClass('show') ) {
                gas(el).data('desktop','show')
        	}

            gas(el).toggleClass('show');

        });

	} else {

        document.querySelectorAll(".g-block[data-desktop='show']").forEach( function(el) {
            gas(el).addClass('show');
        });

	}

});

document.addEventListener('DOMContentLoaded', function () {
	
	var scheme = gn_scheme();
	
	gn_breakpoint_tagging();
	
	var dt = gn_fixtop('.dock-top',false); 

	//var rt = gn_fixtop('.res.top',false); 
	

	noda_attr_utilities();
	
	noda_responsive_function();

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
	
});

/* Gas un-ready ----------------------------------------------------- */


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


function page_lightbox(img,title='',text='') {

	var modal = document.getElementById('page-gallery-modal');
	
	if (!img) {
		modal.children[0].innerHTML = ''
		modal.classList.remove('show'); 
	} else {
	
		if (! modal.classList.contains('show')) { 
			var content = "<figure><img src='"+img+"'>";
			if (title) {
				content += "<div class='caption'><h5>"+title+"</h5>"+"<p>"+title+"</p></div>"
			}
			content += "</figure>"
			modal.children[0].innerHTML=content
			modal.classList.add('show'); 
		} else {
			modal.children[0].innerHTML = ''
			modal.classList.remove('show'); 
		}
	}
	
}	
