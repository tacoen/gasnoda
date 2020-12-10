function cssvar_extend(what, h, s, l, hover_step=false) {

	cstyle = cssvar_hsl(what, h, s, l);
	
	if (l < 0.49) {
		cstyle += cssvar_hsl(what+"-txt",h,s,0.95);
	} else {
		cstyle += cssvar_hsl(what+"-txt",h,s,0.05);
	}

	if ((hover_step) && (hover_step != 0)) {
		cstyle += cssvar_hsl(what+"-ho", h-8, s+0.1, l - hover_step);
	}
	
	return cstyle;
}
function ncc_construct_pallete(q) {
	if (!gas(q)) { return false; }
	var color = gas(q).cssvar('color')
	var c = w3color( color );
	var h = c.hue
	var s = c.sat
	var l = c.lightness	
	cstyle = q +" {";
	cstyle += cssvar_input("h",h+"");	
	cstyle += cssvar_input("s",percent(s));	
	cstyle += cssvar_input("l",percent(l));
	cstyle += cssvar_hsl("b",h,s,0.05);
	cstyle += cssvar_hsl("w",h,s,0.95);
	
	var uf = (0.95-l)/5;	
	var df = (l-0.05)/5;	
	cstyle += cssvar_input("df",percent(df));
	cstyle += cssvar_input("uf",percent(uf));

	if (l <= 0.5) {
		cstyle += cssvar_input("t","var(--w)");
	} else {
		cstyle += cssvar_input("t","var(--b)");
	}
	
	gas(q).cssConstruct(cstyle)
	
}
	
function construct_SectionPallete2(q) {

	if (!gas(q)) { return false; }
	
	var color = gas(q).cssvar('color')
	
	if (!color) { 
		console.log(q+': --color?');
		return false; 
	}

	var c = w3color( color );
	var h = c.hue
	var s = c.sat
	var l = c.lightness	
	
	var step = 0.16;
	var hover_step = 0.10

	cstyle = q +" {";
	cstyle += cssvar_input("h",h+"");	
	cstyle += cssvar_input("s",percent(s));	
	cstyle += cssvar_input("l",percent(l));
	
	cstyle += cssvar_hsl("bg",h,s,l);

	cstyle += cssvar_hsl("b0",h,s,0.03);
	cstyle += cssvar_hsl("w0",h,s,0.97);

	cstyle += cssvar_input("h-co", h+180);
	cstyle += cssvar_input("h-a1", h-32);
	cstyle += cssvar_input("h-a2", h+32);
	cstyle += cssvar_input("h-t1", h+120);
	cstyle += cssvar_input("h-t2", h+240);

	cstyle += cssvar_input("b0-txt","var(--w0)");
	cstyle += cssvar_input("w0-txt","var(--b0)");

	var step = (0.94-l)/4;
	var center = (0.94-l)/2;
	var hover_step = step/2
	cstyle += cssvar_extend("lc",h,s,l+center);

	if (l+center <= 0.5) {
		cstyle += cssvar_input("lc-txt","var(--w0)");
	} else {
		cstyle += cssvar_input("lc-txt","var(--b0)");
	}


	var step = (l-0.06)/4;
	var hover_step = step/2
	var center = (l-0.06)/2;
	cstyle += cssvar_extend("dc",h,s,l-center);
	if (l-center <= 0.5) {
		cstyle += cssvar_input("dc-txt","var(--w0)");
	} else {
		cstyle += cssvar_input("dc-txt","var(--b0)");
	}

	cstyle += "}";
	
	gas(q).cssConstruct(cstyle)

	return true;
}	
