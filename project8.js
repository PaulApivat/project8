


var pattern = /\d+px/g;      //will match only  values with a number + px (in box-shadow)
var colorPattern = /rgb\(.+\)/;    //regex to get color (rgb)
var incr = 15;
$('.press1').click(function(){
	var currentBoxShadowCSS = $(this).css('box-shadow');    
	var color = currentBoxShadowCSS.match(colorPattern)[0];
		/*
    That will get us the color:
    rgb(255, 0, 0)
    */
	var matchesArr = $(this).css('box-shadow').match(pattern);
		/* 
    That will return ["0px", "0px", "5px", "0px"] 
    That s basically [h-shadow, v-shadow, blur, spread]
    We are concerned with only the LAST TWO (Blur + Spread for expanding shadow effect)
    */
	var oldHShadow = matchesArr[0].split('px')[0];
	var newHShadow = parseInt(oldHShadow, 10) ;   //take out incr for expanding outward shadow effect

	var oldVShadow = matchesArr[1].split('px')[0];
	var newVShadow = parseInt(oldVShadow, 10) ;   //take out incr for expanding outward shadow effect

	var oldBlur = matchesArr[2].split('px')[0];
	var newBlur = parseInt(oldBlur, 10) + incr;

	var oldSpread = matchesArr[3].split('px')[0];
	var newSpread = parseInt(oldSpread, 10) + incr;

		//check if this was an inset shadow
	var inset = currentBoxShadowCSS.indexOf('inset') > -1 ? ' inset': '';
		//we got what we need, apply it
	$(this).css('box-shadow', newHShadow + 'px ' + newVShadow + 'px ' + newBlur + 'px ' + newSpread + 'px ' + color + inset);
});


