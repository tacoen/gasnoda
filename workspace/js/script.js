console.log('workspace!')

	document.querySelectorAll("[data-height]").forEach(function(t) {
		t.style.height = t.getAttribute('data-height');
	});


	document.querySelectorAll(".g-block.responsive").forEach(function(t) {
		gas(t).cssvar('origin-width',t.offsetWidth+'px');
	});

document.querySelectorAll('.res-ctl').forEach( function(el) {
    
	el.addEventListener("click", function(e) {
        var block = el.closest('.g-block')
        gas(block).toggleClass('show');
   });

});



document.querySelectorAll('.block-ctl').forEach( function(el) {
    var b = el.closest('.g-block');
    var g = el.closest('.g-grid');
    var element =  document.createElement("DIV"); 
    element.innerHTML = el.innerHTML;
    element.setAttribute('class','g-block right middle grow block-ctl');

    b.classList.add('block-res')
    
    console.log(g.parentNode,g.parentNode.style.height);

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

document.querySelector('#neoca_scheme_switch').addEventListener("click", function(e) {
    if (gas('body').hasClass('dark-scheme')) {
        localStorage.setItem('ncc-scheme','dark');
    } else {
        localStorage.setItem('ncc-scheme','light');
    }
})




window.addEventListener('resize', function() {

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