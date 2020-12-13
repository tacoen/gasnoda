function ncc_scheme_switch(ele=false) {
	
	if (gas('body').hasClass('dark-scheme')) {
		gas('body').removeClass('dark-scheme');
		gas('body').addClass('light-scheme');
	} else {
		gas('body').removeClass('light-scheme');
		gas('body').addClass('dark-scheme');
	}
}	


function ncc_scheme() {

	if (disable_scheme) {
		gas('body').addClass('light-scheme');
		localStorage.setItem('ncc-scheme','light')
		return 'light';
	}
	
	var prefer_scheme = localStorage.getItem('ncc-scheme');
	
	if (prefer_scheme == 'light') {
		var scheme = 'light';
    	gas('body').addClass('light-scheme');
	} else if (prefer_scheme == 'dark') {
		var scheme = 'dark';
    	gas('body').addClass('dark-scheme');
	} else {
		
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			var scheme = 'dark';
			gas('body').addClass('dark-scheme');
		} else {
			var scheme = 'light';
			gas('body').addClass('light-scheme');
		}

	}
	
	return scheme;
}
