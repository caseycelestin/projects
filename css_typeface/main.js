
$(document).ready(function(){

	console.log((parseInt(1010, 2)).toString(16));


	var letter_a = '<div class="container letter_a"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_b = '<div class="container letter_b"><div class="short_col"></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert bottom"><div class="top"></div></div><div class="bar_left"></div><div class="bar_right bottom"><div class="top"></div></div><div class="center_vert bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_c = '<div class="container letter_c"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar"></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';
 	var letter_d = '<div class="container letter_d"><div class="short_col"></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_e = '<div class="container letter_e"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';
	var letter_f = '<div class="container letter_f"><div class="short_col"> <div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class=" center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div></div></div>';
	var letter_g = '<div class="container letter_g"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="bar_right"></div><div class="bar_left bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="mid_vert bottom"><div class="top"></div></div></div></div>';
	var letter_h = '<div class="container letter_h"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_i = '<div class="container letter_i"><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';
	var letter_j = '<div class="container letter_j"><div class="short_col"><div class="block"></div><div class="mid_vert"></div><div class="short_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_k = '<div class="container letter_k"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="slant_col"><div class="short_vert"></div><div class="center_bar"></div><div class="bar_right bottom"><div class="top"></div></div></div><div class="slant_col"><div class="buffer"></div><div class="slantf bottom"><div class="top"></div></div><div class="buffer_right"></div><div class="buffer"></div><div class="slantb bottom"><div class="top"></div></div></div></div>';
	var letter_l = '<div class="container letter_l"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';
	var letter_m = '<div class="container letter_m"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_n = '<div class="container letter_n"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="buffer_n"></div><div class="slantb_long bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_o = '<div class="container letter_o"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_p = '<div class="container letter_p"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div></div></div> ';
	var letter_q = '<div class="container letter_q"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar"></div><div class="buffer_q"></div><div class="slantb_short bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_r = '<div class="container letter_r"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="buffer_r"></div><div class="slantb_mid bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div></div></div> ';
	var letter_s = '<div class="container letter_s"><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="mid_vert bottom"><div class="top"></div></div></div></div>';
	var letter_t = '<div class="container letter_t"><div class="short_col"><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="bar_left"></div><div class="block bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div></div></div>';
	var letter_u = '<div class="container letter_u"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_v = '<div class="container letter_v"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="buffer_n"></div><div class="slantf_long bottom"><div class="top"></div></div></div></div>';
	var letter_w = '<div class="container letter_w"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_n"></div><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="block"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_n"></div><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>';
	var letter_x = '<div class="container letter_x"><div class="short_col"></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div><div class="buffer_x"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="x_block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div><div class="buffer_x"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="short_col"></div></div>';
	var letter_y = '<div class="container letter_y"><div class="short_col"></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div><div class="short_vert bottom"><div class="top"></div></div><div class="block bottom"><div class="top"></div></div><div class="short_block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="short_col"></div></div>';
	var letter_z = '<div class="container letter_z"><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="short_vert"></div><div class="block"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="buffer_z"></div><div class="slantf_z bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"></div></div>';
	var letter_space = '<div class="container letter_space"></div>';
	var letter_period = '<div class="container letter_space"><div class="short_col"><div class="mid_vert"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';

	var lookup = {
		'letter_a': 11101111000000, 'letter_b': 11110001010010, 'letter_c': 10011100000000,
		'letter_d': 11110000010010, 'letter_e': 10011111000000, 'letter_f': 10001111000000, 
		'letter_g': 10111101000000, 'letter_h': 1101111000000,  'letter_i': 10010000010010,
		'letter_j': 1111000000000,  'letter_k': 1110001100,     'letter_l': 11100000000, 
		'letter_m': 1101100101000,  'letter_n': 1101100100100,  'letter_o': 11111100000000, 
		'letter_p': 11001111000000, 'letter_q': 11111100000100, 'letter_r': 11001111000100, 
		'letter_s': 10110111000000, 'letter_t': 10000000010010, 'letter_u': 1111100000000,
		'letter_v': 1100001001,     'letter_w': 1101100000101,  'letter_x': 101101,
		'letter_y': 101010,         'letter_z': 10010000001001
	};

	console.log(lookup['letter_a']);


	$("#page").append('<div class="word1"></div>');
	var word1 = 1;
	$(".word1").append(letter_c);
	word1 *= parseInt(lookup[ 'letter_c'], 2);
	$(".word1").append(letter_a);
	word1 *= parseInt(lookup[ 'letter_a'], 2);
	$(".word1").append(letter_s);
	word1 *= parseInt(lookup[ 'letter_s'], 2);
	$(".word1").append(letter_e);
	word1 *= parseInt(lookup[ 'letter_e'], 2);
	$(".word1").append(letter_y);
	word1 *= parseInt(lookup[ 'letter_y'], 2);
	$(".word1").append(letter_space);
	$("#page").append('<div class="word2"></div>');
	$(".word2").append(letter_f);
	$(".word2").append(letter_g);
	$(".word2").append(letter_h);
	$(".word2").append(letter_i);
	$(".word2").append(letter_j);
	$("#page").append(letter_k);
	$("#page").append(letter_l);
	$("#page").append(letter_m);
	$("#page").append(letter_n);
	$("#page").append(letter_o);
	$("#page").append(letter_p);
	$("#page").append(letter_q);
	$("#page").append(letter_r);
	$("#page").append(letter_s);
	$("#page").append(letter_t);
	$("#page").append(letter_u);
	$("#page").append(letter_v);
	$("#page").append(letter_w);
	$("#page").append(letter_x);
	$("#page").append(letter_y);
	$("#page").append(letter_z);
	$("#page").append(letter_space);
	$("#page").append(letter_period);

	function hex_code(dec){
		var zero ='0';
		var pound = '#'
		var adj = word1 % 16777213;
		var hex = adj.toString(16);	
		if (hex.length < 6) {
			while (hex.length !== 6){
				hex = zero.concat(hex);
			}
		}
		return pound.concat(hex);
	}


	$('#page .bottom').css('outline-color', 'green');

	$('.word1 .top').css('background-color', hex_code(word1));

});