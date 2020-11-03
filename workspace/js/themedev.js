console.log('--- gasnoda theme dev particles -------------------')

document.querySelectorAll('.h-watch *').forEach(function(h) { 
	h.setAttribute('data-content',getComputedStyle(h)['font']); 
	var c = document.createElement('div')
	var d = document.createElement('div')
	c.classList.add('dem')
	d.classList.add('dem2')
	c.style.height=getComputedStyle(h).lineHeight;
	d.style.height=getComputedStyle(h).fontSize;
	d.style.top=(parseInt(getComputedStyle(h).lineHeight)-parseInt(getComputedStyle(h).fontSize))/2+'px';
	h.append(c)
	h.append(d)
});


function td_construct_style(q) {

	if (!gas(q)) { return false; }
	
	var neu = gas(q).cssvar('neutral')
	
	var c = w3color( neu );
	var h = c.hue
	var s = c.sat
	var l = c.lightness	


	
	var step = 0.16;
	var hover_step = 0.10

	cstyle = q +" {";
	cstyle += cssvar_input("h",h+"");	
	cstyle += cssvar_input("s",percent(s));	
	cstyle += cssvar_input("l",percent(l));
	
	cstyle += cssvar_hsl("neu",h,s,l);
	cstyle += cssvar_hsl("neu-b",h,s,0.03);
	cstyle += cssvar_hsl("neu-w",h,s,0.97);

	if (l < 0.5) {
		cstyle += cssvar_input("neu-txt","var(--neu-b)");
	} else {
		cstyle += cssvar_input("neu-txt","var(--neu-w)");
	}
	
	var lstep = (0.94-l)/4;
	var dstep = (l-0.1)/4;

	cstyle += cssvar_extend("neu-l",h,s,l+lstep);
	cstyle += cssvar_extend("neu-l1",h,s,l+lstep*2);
	cstyle += cssvar_extend("neu-d",h,s,l-dstep);
	cstyle += cssvar_extend("neu-d1",h,s,l-dstep*2);

	cstyle += "}";
	
	gas(q).cssConstruct(cstyle)

	return true;
}	


td_construct_style('.theme-dev');

