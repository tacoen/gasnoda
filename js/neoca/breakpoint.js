function ncc_breakpoint_tagging() {

	var html = document.querySelector('html');
	
	if (window.innerWidth < gn_media_breakpoint.tablet) { media='gn-mobile'; }
	if (window.innerWidth <= 520) { media='gn-small'; }
	if (window.innerWidth <= gn_media_breakpoint.mobile) { media='gn-small'; }
	if (window.innerWidth >= gn_media_breakpoint.tablet) { media='gn-tablet'; }
	if (window.innerWidth >= gn_media_breakpoint.desktop) { media='gn-desktop'; }
	if (window.innerWidth >= gn_media_breakpoint.wide) { media=false; }
	
	html.classList.remove('gn-small');
	html.classList.remove('gn-desktop');
	html.classList.remove('gn-tablet');
	html.classList.remove('gn-mobile');
	
	if (media) { html.classList.add(media); }
}

function ncc_breakpoint_responsive_show() {

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
	
}

