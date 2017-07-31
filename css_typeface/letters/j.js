$(document).ready(function(){
	console.log("yea");

	var b_color = $('.top').css("background-color");
	console.log(b_color);
	var new_color = prompt("Enter a new color: ");
	console.log(new_color);
	$('.top').css('background-color', new_color);


	var bord_width = $('.top').css("outline-width");
	console.log(bord_width);
	var new_width = prompt("Enter Border thickness: ");
	console.log(new_width);
	$('.bottom').css('outline-width', new_width + "px");

});