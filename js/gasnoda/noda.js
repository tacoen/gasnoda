

/* ------------------------------------------- */


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