function gdocu_clickcopy() {
	
	document.querySelectorAll(".click-copy").forEach(function(t) {
		t.addEventListener("click", function(e) {

			var aux = document.createElement("textarea");
			aux.innerHTML=t.innerHTML;
			document.body.appendChild(aux);
			aux.select();
			document.execCommand("copy");
			document.body.removeChild(aux);
			t.style.setProperty('--text',"'copied'")

		})
	})
	
}

function gdocu_codebox_init(query) {
	
	document.querySelectorAll(query).forEach( function(c) {
		c.addEventListener("click", function(e) {
			gas('.pg-codebox').content(c.outerHTML.replaceAll('<',"&lt;"));
			gas('#code-panel').removeClass('toggle-off')
		});
	
	});
}

function gdocu_toggle_style() {
	var t = gas('#styetoggle').data('toggle')
	if (t) {
		gas('#styetoggle').data('toggle',false);
		gas('#styetoggle').content("<i class='fa fa-css3'></i> All");
		document.querySelector("head").append(s1)
		document.querySelector("head").append(s2)
	} else {
		gas('#styetoggle').content("<i class='fa fa-css3'></i> nucleus-s");
		gas('#styetoggle').data('toggle',true);
		s1.remove();
		s2.remove();
	}
}

document.addEventListener('DOMContentLoaded', function () {


	construct_SectionPallete2(".gas-docu .pg");
	gdocu_clickcopy();

});



