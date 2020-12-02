function percent(n) { return Math.round(n*100)+"%" }
function cssvar_input(what,value) { return "--"+what+":"+value+";" }
function cssvar_hsl(what,h,s,l) { return "--"+what+":hsl("+h+","+percent(s)+","+percent(l)+");" }
function trim(x) { return x.replace(/^\s+|\s+$/g, ''); }
function safe_str(x) { return x.replace(/^\s+|\s+$|\W/g, '').toLowerCase(); }
function quote(text) { return '"'+text.replace(/\"/ig,"'")+'"'; }