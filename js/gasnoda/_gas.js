/*
 * gas.js -- for Gakeun.js on Gasnoda Grav theme
 *
 */
 
(function () {

function gas(query) {
	
	/* 
	 * gas is Gasnoda Script 
	 *
	 */

	if (typeof(query) == 'object') {
		this.ele = query
	} else {
		this.ele = document.querySelector(query);
	}
	
	if (this.ele === null) { return false; }
	if (!(this instanceof gas)) { return new gas(query); }	

}

gas.prototype = {
	
	cl: function() {
		return this.ele;
	},	
	data: function(what,value=false) {
		if (this.ele.getAttribute('data-'+what)===null) {
			if (value) { this.ele.setAttribute('data-'+what,value); }
		} 
		return this.ele.getAttribute('data-'+what);
	},
	attr: function(what,value=false) {
		if (this.ele.getAttribute(what)===null) {
			if (value) { this.ele.setAttribute(what,value); }
		} 
		return this.ele.getAttribute(what);
	},
	offset: function(what) {
			return [ this.ele.offsetTop, this.ele.offsetLeft, this.ele.offsetWidth, this.ele.offsetHeight];
	},
	class: function() {
		return this.ele.classList.value;
	},
	hasClass: function(nclass) {
		if (this.ele.classList.contains(nclass)) {
			return true;
		} else {
			return false;
		}
	},
	addClass: function(nclass) {
		if (!this.ele.classList.contains(nclass)) {
			this.ele.classList.add(nclass);
		}
	},
	removeClass: function(nclass) {
		if (this.ele.classList.contains(nclass)) {
			this.ele.classList.remove(nclass);
		}
	},
	content: function(newcontent=false) {
		if (newcontent) { this.ele.innerHTML = newcontent; }
		else { return this.ele.innerHTML; }
	},
	styleParse: function() {
		var styles = this.ele.style;
		var res = '';
		for (var p in styles) {
			if ((styles[styles[p]]) && styles[styles[p]]!=='initial') {
					res += styles[p]+": "+ styles[styles[p]].toString()+'; '; 
			}
		}
		return res.trim();
	},
	cssConstruct: function(styles) {
		const newSheet = new CSSStyleSheet();
		newSheet.replaceSync(styles);
		document.adoptedStyleSheets = document.adoptedStyleSheets.concat(newSheet);		
	},
	cssvar: function(what,value=false) {
		var c = getComputedStyle(this.ele)
		if (value) { 
			this.ele.style.setProperty('--'+what,value,'important');
		} else {
			return c.getPropertyValue('--'+what)
		}
	},
	cssvarRemove: function(what) {
		this.ele.style.removeProperty('--'+what);
		console.log('pass');
	},
	style: function(what=false,value=false) {
		var styles = this.ele.style;
		var res = '';
		if (!what) {

			res = this.attr('style');
			return res;
		} else {
			what = what.replace(/-/gi,function(r) { 
				return r.charAt(0).toUpperCase() + r.slice(1)
			});
			if (value) { this.ele.style[what]=value; }
		}
	},
	hide: function() {
		this.style('display','none');	
	},
	show: function(mode='block') {
		this.style('display',mode);
	},
	height: function(value=false) {
		return this.ele.offsetHeight
	},
	width:function(value=false) {
		return this.ele.offsetWidth;
	}
}

window.gas = gas;

})();