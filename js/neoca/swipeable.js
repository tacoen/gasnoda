function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = el.clientWidth/4, //required min distance traveled to be considered swipe
    restraint = el.clientWidth/2, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 720, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){

        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.clientX
        startY = touchobj.clientY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV

		gas(this).addClass('touched');

        var touchobj = e.changedTouches[0]
        distX = touchobj.clientX - startX
        distY = touchobj.clientY - startY
		
		if (gas(this).hasClass('left')) {
		
			if (distX <= 0)  { 
				this.style.left = distX+"px";
			} else {
				this.style.left = "0px"; 
			} 
			
		}

		if (gas(this).hasClass('right')) {
			
			if (distX > 0)  { 
				this.style.right = "-"+distX+"px";
			} else {
				this.style.right = "0px"; 
			} 
			
		}
		
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
		
		gas(this).removeClass('touched')
	
        var touchobj = e.changedTouches[0]
        distX = touchobj.clientX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.clientY - startY // get vertical dist traveled by finger while in contact with surface
		
		//console.log(distX,distY,elapsedTime)
		
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe

				var block = this.closest('.g-block');

				if ( (gas(this).hasClass('left')) && (swipedir=='left')) {
					gas(block).removeClass('show'); 
					this.style.left = "";				
				}

				if ( (gas(this).hasClass('right')) && (swipedir=='right')) {
					gas(block).removeClass('show'); 
					this.style.right = "";				
				}
				
				
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }

        handleswipe(swipedir)

        e.preventDefault()
    }, false)
}

	
/*
function handleTouch(e) {
	var total = this.clientWidth;
	var x =  e.changedTouches[0].clientX;
	gas(this).addClass('touched');

	if ( (x < total/2) && (gas(this).hasClass('left'))) {
		this.style.left = (x-total)+"px";
	}
}

function handleTouchStart(e) {
	var x =  e.changedTouches[0].pageX;
	var total = this.clientWidth;
	console.log(e.touches);

}

function handleTouchEnd(e) {
	gas(this).removeClass('touched')
	var vx = [ this.clientWidth * .5,this.clientWidth *.5 ] ;
	if (gas(this).hasClass('right')) {
		//var x = parseInt(this.style.left)
		
		var x =  e.changedTouches[0].clientX;
		
		if (x >= this.clientWidth/2) { 
			var block = this.closest('.g-block');
			gas(block).removeClass('show'); 
			this.style.left = "";
		} else {
			this.style.left = '0px';
		}
	} else {
		
		var x =  e.changedTouches[0].clientX;
		
		if (x <= this.clientWidth/2) { 
			var block = this.closest('.g-block');
			gas(block).removeClass('show'); 
			this.style.left = "";
		} else {
			this.style.left = '0px';
		}
	}

}
*/

function ncc_init_swipeable() {
	
	document.querySelectorAll('.res-content.swipe').forEach(function(t) {
		swipedetect(t, function(swipedir) {
			//console.log(swipedir)
		})
	});
	
}