$(document).ready(function(){
//Overlay

  $('.site-overlay-container').on('click', function() {
    $('#site-overlay').fadeOut(1000);
  });

//Button one
	$("#circleOne-text").hide();

	$("#circleOne").mouseenter(function(){
		$("#circleOne").css("background", "white");
		$("#circleOne-text").show(); 
	});
	$("#circleOne").mouseleave(function(){
		$("#circleOne-text").hide();
		$("#circleOne").css("background-image", "url(images/backpack.jpeg)");
		$("#circleOne").css("background-size", "");
		$("#circleOne").css("background-repeat", "no-repeat");

	});
//Button Two
		$("#circleTwo-text").hide();

	$("#circleTwo").mouseenter(function(){
		$("#circleTwo").css("background", "white");
		$("#circleTwo-text").show(); 
	});
	$("#circleTwo").mouseleave(function(){
		$("#circleTwo-text").hide();
		$("#circleTwo").css("background-image", "url(images/fashion2.jpeg)");
		$("#circleTwo").css("background-size", "");
	});

//Button Three
		$("#circleThree-text").hide();

	$("#circleThree").mouseenter(function(){
		$("#circleThree").css("background", "white");
		$("#circleThree-text").show(); 
	});
	$("#circleThree").mouseleave(function(){
		$("#circleThree-text").hide();
		$("#circleThree").css("background-image", "url(images/clipper2.jpeg)");
		$("#circleThree").css("background-size", "");
	});
});	





