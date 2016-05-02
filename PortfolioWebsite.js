$(document).ready(function(){
//Button one
	$("#j").hide();

	$("#circleOne").mouseenter(function(){
		$("#circleOne").css("background", "white");
		$("#j").show(); 
	});
	$("#circleOne").mouseleave(function(){
		$("#j").hide();
		$("#circleOne").css("background-image", "url(images/backpack.jpeg)");
		$("#circleOne").css("background-size", "");
		$("#circleOne").css("background-repeat", "repeat-x");

	});
//Button Two
		$("#k").hide();

	$("#circleTwo").mouseenter(function(){
		$("#circleTwo").css("background", "white");
		$("#k").show(); 
	});
	$("#circleTwo").mouseleave(function(){
		$("#k").hide();
		$("#circleTwo").css("background-image", "url(images/fashion2.jpeg)");
		$("#circleTwo").css("background-size", "");
	});

//Button Three
		$("#l").hide();

	$("#circleThree").mouseenter(function(){
		$("#circleThree").css("background", "white");
		$("#l").show(); 
	});
	$("#circleThree").mouseleave(function(){
		$("#l").hide();
		$("#circleThree").css("background-image", "url(images/clipper2.jpeg)");
		$("#circleThree").css("background-size", "");
	});
});	





