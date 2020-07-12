$(document).ready(function(){
	$('.slider').slick({
		arrows:true, // do you wanna see arrows?
		dots:true, // do you wanna see dots?
		slidesToShow:4, //how many slides should show
		slidesToScroll:1, // how many slides should scroll by one press 
		speed:1000, //speed of scrolling
		easing:'ease', //type of animation by scrolling
		infinite:true, //do you want a infinite slider?
		initialSlide:0, //which slide should start slider?
		autoplay:true, //autoplay scrolling slides
		autoplaySpeed:1500, //period of scrolling 
		pauseOnFocus:true, //pause scrolling when cursor click slide
		pauseOnHover:true, //pause scrolling when cursor hovers slide
		pauseOnDotsHover:true, //pause scrolling when cursor hovers dots
		centerMove:true, //when slide is in center it become main and you can change styles for another slides
		veriableWidth:false, //the content of the slide itself determines its width (can combinate with centerMove)
		appendArrows:$('.btn'), // arrows in the tag`s class'.btn'
	});
});