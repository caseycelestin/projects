
$(document).ready(function(){

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
		'letter_y': 101010,         'letter_z': 10010000001001, 'letter_space': 1,
		'letter_period': 1
	}; 

	var w_count = 0;
	var s_count = 0;
	var word = 'w';
	var sentence = 's';
	var per = '.';
	var words = [];
	var sentences = [];
	var curr_w = [];
	var curr_s = [];

	function addChar(letter, code, wrap){
		$(wrap['name']).append(letter);
		while (wrap !== null) {
			wrap['var'] *= parseInt(lookup[code], 2);
			wrap = wrap['parent'];
		}
	}

	function hex_code(wrap){
		var zero ='0';
		var pound = '#';
		var adj = wrap['var'] % 16777213;
		var hex = adj.toString(16);	
		if (hex.length < 6) {
			while (hex.length !== 6){
				hex = zero.concat(hex);
			}
		}
		return pound.concat(hex);
	}

	function thick(wrap) {
		console.log(wrap['var']);
		var adj = wrap['var'] % 11;
		if(adj === 10) adj = 1;
		return adj;
	}

	function update()	{
		var top = ' .top'
		var bottom = ' .bottom'
		var up_name;
		var name;

		words.push(null);
		sentences.push(null);
		
		for (var i = 0; words[i] !== null; i++) {
			var word = words[i];
			name = word['name'];
			up_name = name.concat(bottom);
			$(up_name).css("outline-color", hex_code(word));
			console.log(word);
		}
		
		for (var i = 0; sentences[i] !== null; i++) {
			var sentence = sentences[i];
			name = sentence['name'];
			up_name = name.concat(top);
			$(up_name).css("background-color", hex_code(sentence));		
		}

		var p_name = page['name'];
		up_name = p_name.concat(bottom);
		$(up_name).css("outline-width", thick(page));

	}

	function add( letter, code){
		var new_class;
		var new_w;
		var new_s;
		addChar(letter, code, curr_w);
		if(letter === letter_space){
			new_class = word + (++w_count);
			$(curr_s['name']).append('<div class="' + new_class + '"></div>');
			new_w = {'name': '.' + new_class, 'var': 1, 'parent': s0};
			words.push(new_w);
			curr_w = new_w;
		}
		if(letter === letter_period){
			new_class = sentence + (++s_count);
			$("#page").append('<div class="' + new_class + '"></div>');
			new_s = {'name': '.' + new_class, 'var': 1, 'parent': page};
			sentences.push(new_s);
			curr_s = new_s;

			new_class = word + (++w_count);
			$(curr_s['name']).append('<div class="' + new_class + '"></div>');
			new_w = {'name': '.' + new_class, 'var': 1, 'parent': curr_s};
			words.push(new_w);
			curr_w = new_w;
		}
	}

	

	var page = {'name': '#page', 'var': 1, 'parent': null};
	
	$("#page").append('<div class="s0"></div>');
	var s0 = {'name': '.s0', 'var': 1, 'parent': page};
	sentences.push(s0);
	
	$(".s0").append('<div class="w0"></div>');
	var w0 = {'name': '.w0', 'var': 1, 'parent': s0	};
	words.push(w0);

	curr_w = w0;
	curr_s = s0;

	add(letter_w, 'letter_w');
	add(letter_e, 'letter_e');
	add(letter_l, 'letter_l');
	add(letter_c, 'letter_c');
	add(letter_o, 'letter_o');
	add(letter_m, 'letter_m');
	add(letter_e, 'letter_e');
	add(letter_space, 'letter_space');
	add(letter_t, 'letter_t');
	add(letter_o, 'letter_o');
	add(letter_space, 'letter_space');
	add(letter_c, 'letter_c');
	add(letter_a, 'letter_a');
	add(letter_s, 'letter_s');
	add(letter_e, 'letter_e');
	add(letter_y, 'letter_y');
	add(letter_s, 'letter_s');
	add(letter_space, 'letter_space');
	add(letter_f, 'letter_f');
	add(letter_i, 'letter_i');
	add(letter_n, 'letter_n');
	add(letter_a, 'letter_a');
	add(letter_l, 'letter_l');
	add(letter_space, 'letter_space');
	add(letter_p, 'letter_p');
	add(letter_r, 'letter_r');
	add(letter_o, 'letter_o');
	add(letter_j, 'letter_j');
	add(letter_e, 'letter_e');
	add(letter_c, 'letter_c');
	add(letter_t, 'letter_t');



	update();

	// addChar(letter_c, 'letter_c', w0);
	// addChar(letter_a, 'letter_a', w0);
	// addChar(letter_s, 'letter_s', w0);
	// addChar(letter_e, 'letter_e', w0);
	// addChar(letter_b, 'letter_b', w0);
	// addChar(letter_d, 'letter_d', w0);
	// addChar(letter_f, 'letter_f', w0);
	// addChar(letter_g, 'letter_g', w0);
	// addChar(letter_h, 'letter_h', w0);
	// addChar(letter_i, 'letter_i', w0);
	// addChar(letter_j, 'letter_j', w0);
	// addChar(letter_k, 'letter_k', w0);
	// addChar(letter_l, 'letter_l', w0);
	// addChar(letter_m, 'letter_m', w0);
	// addChar(letter_n, 'letter_n', w0);
	// addChar(letter_o, 'letter_o', w0);
	// addChar(letter_p, 'letter_p', w0);
	// addChar(letter_q, 'letter_q', w0);
	// addChar(letter_r, 'letter_r', w0);
	// addChar(letter_s, 'letter_s', w0);
	// addChar(letter_t, 'letter_t', w0);
	// addChar(letter_u, 'letter_u', w0);
	// addChar(letter_v, 'letter_v', w0);
	// addChar(letter_w, 'letter_x', w0);
	// addChar(letter_y, 'letter_y', w0);
	// addChar(letter_z, 'letter_z', w0);



});