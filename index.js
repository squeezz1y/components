$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();


	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}



	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset -180
		}, 900);
	});


	
	

	/* Menu nav toggle */
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();
	
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
		
		
		
	});
	
	



/*Form */

var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
   
    vol = document.querySelector('#vol'),
   
    vol = document.querySelector('#vol');

  // Basic function  
btn.onclick = function(){
  if (  vol.value != '') {
    

 
var sum = (vol.value * 400);
      out.innerHTML = sum;
  }else{
alert('Введите объем груза');
}
}

});





