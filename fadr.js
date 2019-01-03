// JavaScript Document

$("document").ready(function() {
	var distFromTop = 0;
	
	var elements = [];

	//$( ".element-media" ).attr( "data-wow-iteration", 100000 );

	
		var runOnce = false;

	//console.log(tags.hasClass(" wow "));
	
	$(window).scroll(function() {
		//get current distance from top
		distFromTop = $(window).scrollTop();
		
		for (var i = 0; i < $(".descriptor").length; i++) {
			main($(".descriptor").eq(i));
		}
		
		function main(el) {

			if(distFromTop > Math.floor(el.offset().top * 0.85) && distFromTop < Math.floor(el.offset().top * 1.02)) {
				moveIn(el);

			}
			if(distFromTop > Math.floor(el.offset().top * 1.02) || distFromTop < Math.floor(el.offset().top * 0.85)) {
				moveOut(el);
				console.log("move out")
			}
		}
		
		
	});	
	
	function moveOut(el) {
			var headers = el.find(".element-headers");
			var media = el.find(".element-media");

			animate(headers);
			animate(media);
			function animate(element) {
				element.removeClass("wow fadeInUp");
				element.addClass("fadeOutUp animated");
				element.css({"animation-name": "fadeOutUp", "-webkit-animation-name": "fadeOutUp", "animation-delay": "0s"});

			}
	}
	
	function moveIn(el) {
			var headers = el.find(".element-headers");
			var media = el.find(".element-media");
			animate(headers);
			animate(media);
			function animate(element) {
				element.removeClass("fadeOutUp");
				
					element.addClass("animated fadeInUp");
					element.css({"animation-name": "fadeInUp", "-webkit-animation-name": "fadeInUp", "animation-delay": "0s"});
				
			}
	}
	
});