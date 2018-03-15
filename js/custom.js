 (function($) {
	"use strict";
	
	//=== Fake Loader ===
	$(".fakeloader")
	.append('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');

	function endPreload(){
		$(".fakeloader").hide();
	}
	setTimeout(endPreload, 5000);
	
	//=====Wow Animation======
		new WOW().init(); 
		
	  //=======Nav Scroll ========
	   $.scrollIt({
		   activeClass: 'active', downKey:false 
		});
	   
	   //===== Navbar Affix ======//
	   $('#affix').affix({
		  offset: {
			top: 100,
			bottom: function () {
			  return (this.bottom = $('.footer').outerHeight(true))
			}
		  }
		});

	$(".owl-team").owlCarousel({
		items : 3,
        margin: 20,
        autoHeight : true,
	});
	
	var owlOne = $(".owl-clients");
	var owlTwo = $(".owl-testimonial");
		owlOne.owlCarousel({
		items:5,
		smartSpeed:450,
		pagination:false,
		nav:true,
		center:true
	  });
		owlTwo.owlCarousel({
		smartSpeed:250,
		items:1,
		dots:false,
		pagination:false,
		autoHeight : false,
		autoPlay:true,
		singleItem: true,
	});
			 
		// Custom Navigation Events 1
		$(".next").on( "click", function(){
			owlOne.trigger('owl.next');
		});
		$(".prev").on("click",function(){
			owlOne.trigger('owl.prev');
		});

		// Custom Navigation Events 2
		$(".next2").on( "click", function(){
			owlTwo.trigger('owl.next');
		});
		$(".prev2").on( "click",function(){
			owlTwo.trigger('owl.prev');
		});


//=====scroll to top =========

	//=== hide #back-top first===
	$("#back-top").hide();
	//=== fade in #back-top===
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		//=== scroll body to 0px on click ===
		$('#back-top').on("click", function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});


 
//===Main Slider====//

    //Function to animate slider captions 
    function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#carousel-example-generic').carousel({
        interval:3000,
        pause: "false"
    });
	
	
	
    
})(jQuery);
			
			
			
			