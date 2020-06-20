
//Page loader
jQuery(document).ready(function($) {
	$("#page").show();
});

//Menu dropdown animation
jQuery(function($) {
	$('.sub-menu').hide();
	$('.main-navigation .children').hide();
	$('.menu-item').hover( 
		function() {
			$(this).children('.sub-menu').slideDown();
		}, 
		function() {
			$(this).children('.sub-menu').hide();
		}
	);
	$('.main-navigation li').hover( 
		function() {
			$(this).children('.main-navigation .children').slideDown();
		}, 
		function() {
			$(this).children('.main-navigation .children').hide();
		}
	);	
});

//Fit Vids
jQuery(function($) {
  
  $(document).ready(function(){
    $("body").fitVids();
  });
  
});

//Sets the header overlay height
jQuery(function($) {
	var height = $(window).height(); 
	$('.overlay').css('height', height);
	$(window).resize(function() {
		var height = $(window).height(); 
		$('.overlay').css('height', height);
	});	
});

//Waypoints
jQuery(function($) {
	$('.facts-area').waypoint(function(down) {
		$('.fact').each(function () {
			var $this = $(this);
			$({ Counter: 0 }).animate({ Counter: $this.attr('id') }, {
				duration: 1000,
				easing: 'swing',
				step: function () {
				    $this.text(Math.ceil(this.Counter));
				}
			});
		});
	},	
	{
	  offset: '50%',
	  triggerOnce: true
	});
});

jQuery(function($) {
	new WOW().init();
});

//Better support for third party widgets
jQuery(function($) {
    $('.panel.widget, .so-panel.widget').addClass('container');
}); 

//Smooth scrolling
jQuery(function($) {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			$('html,body').animate({
			scrollTop: target.offset().top
			}, 800);
			return false;
			}
		}
	});
});