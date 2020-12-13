function ncc_main_afterLoad() {

	ncc_html5_interface();
	ncc_init_swipeable();
	
	var scheme = 'light';
	var scheme = ncc_scheme();

	ncc_breakpoint_tagging();
	
	console.log('ncc-main: afterload')
}

function ncc_main_onResize() {

	ncc_breakpoint_tagging()
	ncc_breakpoint_responsive_show()
	
	console.log('ncc-main: onresize')

}


document.addEventListener('DOMContentLoaded', ncc_main_afterLoad);
window.addEventListener('resize', ncc_main_onResize);

/* ------------------------------------------------------------------- */



window.addEventListener('resize', function() {

	var dt = gn_fixtop('.dock-top',false); 

	//noda_attr_utilities()



});

document.addEventListener('DOMContentLoaded', function () {

	

	var dt = gn_fixtop('.dock-top',false); 

	
});

/* Gas un-ready ----------------------------------------------------- */




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
