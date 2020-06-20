/**
 * Initialize the slider.
 */
( function() {
jQuery(window).load(function() {
	jQuery('.flexslider').flexslider({
		slideshowSpeed: 3500,
		animationSpeed: 500,
		pauseOnHover: true,
		useCSS: true,
		touch: true,
		animation: "slide", 
		smoothHeight: true,
		controlNav: false,
	});
});
} )();

