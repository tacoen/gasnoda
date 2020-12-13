function gn_toggle(ele,classes) {
	gas(ele).toggleClass(classes);
}


/* 30/11/2020 */

function gn_topshadow(query, remove_element=false) {
	var ele = gas(query);

	if (ele) {
		
		var shadow = gas('.g-top-shadow');
		
		if (shadow) {
			
			if (remove_element) {
				shadow.hide();
				gas('html').removeClass('has-top-shadow');
			} else {
				shadow.show('block');
				gas('html').addClass('has-top-shadow');
			}
			
		} else {

			var page = document.querySelector("#g-page-surround");
			var shadow_div = document.createElement("div");
			page.prepend(shadow_div);
			if (! shadow_div.classList.contains('g-top-shadow')) {
				shadow_div.classList.add('g-top-shadow');
				shadow_div.style.height = ele.height()+'px';
			}
			
		}
	}
}

function gn_fixtop(query,shadow=false) {
	
	var f = document.querySelector(query);
	
	if (f){
		
		/* init */
		// f.style.width = f.offsetWidth+'px';
		
		var top = f.offsetTop;
		var ori_w = f.offsetWidth;

		var style={
			position: f.style.position,
			top: f.style.top,
			width: f.style.width
		};
		
		if (shadow) { gn_topshadow(query) }
		
		/* scroll event */
		window.addEventListener('scroll', (event) => {	
			var scroll = this.scrollY;
			if (scroll > top) {
				f.style.position = 'fixed';
				f.style.top = '0px';
				
				var p = f.parentNode.closest('section');

				f.style.width=ori_w+'px';
				f.classList.add('pinned')
				
				if (shadow) { gn_topshadow(query) }
				
			} else {
				
				//console.log('unpin',f);
				f.classList.remove('pinned');
				f.style.position = style.position;
				f.style.top = style.top;
				f.style.width = style.width;

				if (f.classList.contains('dock-top')) {
					gn_topshadow(query,true);
				}
			}
		});

		return true;

		
	} else {
		
		return false;

	}
}	

function gn_searchbox_toggle(th,sid) {
	
	event.preventDefault()
	var gas = document.querySelector(sid);
	//gas(th).data('html',th.innerHTML)
	
	if (! gas.classList.contains('active')) {
		gas.classList.add('active')
		//th.innerHTML = '<i class="fa fa-chevron-right"></i>'
	} else {
		gas.classList.remove('active')
		//th.innerHTML = gas(th).data('html')
	}
}