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
		return console.log(this.ele);
	},
	
	load: function(source,functions=false) {
		var request = new XMLHttpRequest();
		request.open('GET', source, true);
		var ele = this.ele;

		const send = XMLHttpRequest.prototype.send
		XMLHttpRequest.prototype.send = function(e) { 
			this.addEventListener('load', function(event) {
				if (functions) { functions(); }
			})
			return send.apply(this, arguments)
		}		

		request.onload = function(e) {
			if (request.status >= 200 && request.status < 400) {
				var resp = request.responseText;
				ele.innerHTML = resp;
			} else {
				console.log(source+' not loading.'); 
			}
		};
		

		request.send()

		//console.log(request);
		
		
			
	},
	
	data: function(what,value=false) {

		if (value) { this.ele.setAttribute('data-'+what,value); }
		else if (value==null){ this.ele.removeAttribute('data-'+what); }
		return this.ele.getAttribute('data-'+what);
	},
	
	attr: function(what,value=false) {
		if (value) { this.ele.setAttribute(what,value); }
		else if (value==null){ this.ele.removeAttribute(what); }
		return this.ele.getAttribute(what);
	},
	
	offset: function() {
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
	toggleClass: function(nclass) {
		if (this.ele.classList.contains(nclass)) {
			this.ele.classList.remove(nclass);
		} else {
			this.ele.classList.add(nclass);
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
	cssvar: function(what,value=false,important=false) {
		var c = getComputedStyle(this.ele)
		if (value) { 
			if (important) {
				this.ele.style.setProperty('--'+what,value,'important');
			} else {
				this.ele.style.setProperty('--'+what,value);
			}
	} else {
			return c.getPropertyValue('--'+what).trim()
		}
	},

	cssvarRemove: function(what) {
		this.ele.style.removeProperty('--'+what);
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
	value: function(val=false) {
		if (val) {
			this.ele.value = val;
		} else {
			return this.ele.val;
		}
	},
	height: function(value=false) {
		return this.ele.offsetHeight
	},
	width:function(value=false) {
		return this.ele.offsetWidth;
	},
	append:function(value=false) {
		if (value) { this.ele.insertAdjacentHTML("afterend",value.toString) }
	},
	prepend:function(value=false) {
		if (value) { this.ele.insertAdjacentHTML("afterbegin",value) }
	}

}

window.gas = gas;

})();