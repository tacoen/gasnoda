console.log('workspace!')


document.querySelectorAll('[data-color]') .forEach( 
    function(e) { 
        var color = gas('[data-color]').data('color'); 
        gas(e).cssvar('color',color);
        console.log(e);
        console.log(color); 
        var ta = '#'+gas(e).id();
        console.log(ta);
        ncc_construct_pallete(ta); 
});