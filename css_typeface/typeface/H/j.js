$(document).ready(function(){
	console.log("yea");

	var b_color = $('.top').css("background-color");
	console.log(b_color)
	var new_color = prompt("Enter a new color: ");
	console.log(new_color);
	$('.top').css('background-color', new_color);

});