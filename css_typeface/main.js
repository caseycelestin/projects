
$(document).ready(function(){

var letter_space = '<div class="container letter_space"></div>';
	var letter_period = '<div class="container letter_period"><div class="short_col"><div class="mid_vert"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>';


	var letter_lookup = {
		'a': 0,
		'b': 1,
		'c': 2,
		'd': 3,
		'e': 4,
		'f': 5,
		'g': 6,
		'h': 7,
		'i': 8,
		'j': 9,
		'k': 10,
		'l': 11,
		'm': 12,
		'n': 13,
		'o': 14,
		'p': 15,
		'q': 16,
		'r': 17,
		's': 18,
		't': 19,
		'u': 20,
		'v': 21,
		'w': 22,
		'x': 23,
		'y': 24,
		'z': 25,
		'space': 26,
		'.': 27
	}

	var letters = [];

	var a = {
		str: '<div class="container letter_a"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
		num: 11101111000000
	};
	letters.push(a);
	var b = {
		str: '<div class="container letter_b"><div class="short_col"></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert bottom"><div class="top"></div></div><div class="bar_left"></div><div class="bar_right bottom"><div class="top"></div></div><div class="center_vert bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
		num: 11110001010010
	};
	letters.push(b);
	var c = {
		str: '<div class="container letter_c"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar"></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 10011100000000
	};
	letters.push(c);
	var d = {
 	   	str: '<div class="container letter_d"><div class="short_col"></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 11110000010010
	};
	letters.push(d);
	var e = {
		str: '<div class="container letter_e"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 10011111000000
	};
	letters.push(e);
	var f = {
		str:'<div class="container letter_f"><div class="short_col"> <div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class=" center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 10001111000000
	};
	letters.push(f);
	var g = {
	  	str: '<div class="container letter_g"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="bar_right"></div><div class="bar_left bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="mid_vert bottom"><div class="top"></div></div></div></div>',
 		num: 10111101000000
	};
	letters.push(g);
	var h = {
		str: '<div class="container letter_h"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1101111000000
	};
	letters.push(h);
	var i = {
		str: '<div class="container letter_i"><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 10010000010010
	};
	letters.push(i);
	var j = {
		str: '<div class="container letter_j"><div class="short_col"><div class="block"></div><div class="mid_vert"></div><div class="short_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1111000000000
	};
	letters.push(j);
	var k = {
		str: '<div class="container letter_k"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="slant_col"><div class="short_vert"></div><div class="center_bar"></div><div class="bar_right bottom"><div class="top"></div></div></div><div class="slant_col"><div class="buffer"></div><div class="slantf bottom"><div class="top"></div></div><div class="buffer_right"></div><div class="buffer"></div><div class="slantb bottom"><div class="top"></div></div></div></div>',
 		num: 1110001100
	};
	letters.push(k);
	var l = {
		str: '<div class="container letter_l"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 11100000000
	};
	letters.push(l);
	var m = {
		str:'<div class="container letter_m"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1101100101000
	};
	letters.push(m);
	var n = {
		str: '<div class="container letter_n"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="buffer_n"></div><div class="slantb_long bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1101100100100
	};
	letters.push(n);
	var o = {
		str: '<div class="container letter_o"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 11111100000000
	};
	letters.push(o);
	var p = {
		str: '<div class="container letter_p"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div></div></div> ',
 		num: 11001111000000
	};
	letters.push(p);
	var q = {
		str: '<div class="container letter_q"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar"></div><div class="buffer_q"></div><div class="slantb_short bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 11111100000100
	};
	letters.push(q);
	var r = {
		str: '<div class="container letter_r"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="buffer_r"></div><div class="slantb_mid bottom"><div class="top"></div></div></div><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div></div></div> ',
 		num: 11001111000100
	};
	letters.push(r);
	var s = {
		str: '<div class="container letter_s"><div class="short_col"><div class="mid_vert bottom"><div class="top"></div></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="mid_vert bottom"><div class="top"></div></div></div></div>',
 		num: 10110111000000
	};
	letters.push(s);
	var t = {
		str: '<div class="container letter_t"><div class="short_col"><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="center_vert_long bottom"><div class="top"></div></div><div class="bar_left"></div><div class="block bottom"><div class="top"></div></div></div><div class="short_col"><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 10000000010010
	};
	letters.push(t);
	var u = {
		str: '<div class="container letter_u"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar"></div><div class="center_vert_long"></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1111100000000
	};
	letters.push(u);
	var v = {
		str: '<div class="container letter_v"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div id="center"><div class="buffer_n"></div><div class="slantf_long bottom"><div class="top"></div></div></div></div>',
 		num: 1100001001
	};
	letters.push(v);
	var w = {
		str: '<div class="container letter_w"><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_n"></div><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="block"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_n"></div><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="short_col"><div class="long_vert bottom"><div class="top"></div></div></div></div>',
 		num: 1101100000101
	};
	letters.push(w);
	var x = {
		str: '<div class="container letter_x"><div class="short_col"></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div><div class="buffer_x"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="x_block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div><div class="buffer_x"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="short_col"></div></div>',
 		num: 101101
	};
	letters.push(x);
	var y = {
		str: '<div class="container letter_y"><div class="short_col"></div><div class="new"><div class="buffer_m"></div><div class="slantb bottom"><div class="top"></div></div></div><div class="slim"><div class="short_vert"></div><div class="short_block"></div><div class="block bottom"><div class="top"></div></div><div class="short_vert bottom"><div class="top"></div></div><div class="block bottom"><div class="top"></div></div><div class="short_block bottom"><div class="top"></div></div></div><div class="new"><div class="buffer_m"></div><div class="slantf bottom"><div class="top"></div></div></div><div class="short_col"></div></div>',
 		num: 101010
	};
	letters.push(y);
	var z = {
		str: '<div class="container letter_z"><div class="short_col"><div class="block bottom"><div class="top"></div></div><div class="short_vert"></div><div class="short_vert"></div><div class="block"></div><div class="block bottom"><div class="top"></div></div></div><div id="center"><div class="center_bar bottom"><div class="top"></div></div><div class="buffer_z"></div><div class="slantf_z bottom"><div class="top"></div></div><div class="center_bar bottom"><div class="top"></div></div></div><div class="short_col"></div></div>',
 		num: 10010000001001
	};
	letters.push(z);
	var space = {
		str: '<div class="container letter_space"></div>',
 		num: 1
	};
	letters.push(space);
	var period = {
		str: '<div class="container letter_period"><div class="short_col"><div class="mid_vert"></div><div class="short_vert"></div><div class="block bottom"><div class="top"></div></div></div></div>',
 		num: 1
	};
	letters.push(period);



	var w_count = 0;
	var s_count = 0;
	var word = 'w';
	var sentence = 's';
	var per = '.';
	var words = [];
	var sentences = [];
	var curr_w = [];
	var curr_s = [];

	function addChar(letter, wrap){
		$(wrap['name']).append(letter.str);
		while (wrap !== null) {
			if(wrap['name'] === '#page'){
				wrap['var'] += parseInt(letter.num, 2);
			} else { 
				wrap['var'] *= parseInt(letter.num, 2); 
			}
			wrap = wrap['parent'];
		}
	}

	function hex_code(wrap){
		var zero ='0';
		var pound = '#';
		var adj = wrap['var'] % 16777213;
		wrap['var'] = adj;
		var hex = adj.toString(16);	
		if (hex.length < 6) {
			while (hex.length !== 6){
				hex = zero.concat(hex);
			}
		}
		return pound.concat(hex);
	}

	function thick(wrap) {
		var adj = wrap['var'] % 11;
		if(adj === 10) adj = 1;
		return adj;
	}

	function update() {
		var top = ' .top'
		var bottom = ' .bottom'
		var up_name;
		var name;
		
		for (var i = 0; i <= w_count; i++) {
			var word = words[i];
			name = word['name'];
			up_name = name.concat(bottom);
			$(up_name).css("outline-color", hex_code(word));		}
		
		for (var i = 0; i <= s_count; i++) {
			var sentence = sentences[i];
			name = sentence['name'];
			up_name = name.concat(top);
			$(up_name).css("background-color", hex_code(sentence));	
		}

		var p_name = page['name'];
		up_name = p_name.concat(bottom);
		$(up_name).css("outline-width", thick(page));

	}

	function add(letter){
		var new_class;
		var new_w;
		var new_s;
		addChar(letter, curr_w);
		if(letter.str === letter_space){
			new_class = word + (++w_count);
			$(curr_s['name']).append('<div class="' + new_class + '"></div>');
			new_w = {'name': '.' + new_class, 'var': 1, 'parent': curr_s};
			words.push(new_w);
			curr_w = new_w;
		}
		if(letter.str === letter_period){
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
		update();
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



	Mousetrap.bind('a', function() { add(letters[0]);} );
	Mousetrap.bind('b', function() { add(letters[1]);} );
	Mousetrap.bind('c', function() { add(letters[2]);} );
	Mousetrap.bind('d', function() { add(letters[3]);} );
	Mousetrap.bind('e', function() { add(letters[4]);} );
	Mousetrap.bind('f', function() { add(letters[5]);} );
	Mousetrap.bind('g', function() { add(letters[6]);} );
	Mousetrap.bind('h', function() { add(letters[7]);} );
	Mousetrap.bind('i', function() { add(letters[8]);} );
	Mousetrap.bind('j', function() { add(letters[9]);} );
	Mousetrap.bind('k', function() { add(letters[10]);} );
	Mousetrap.bind('l', function() { add(letters[11]);} );
	Mousetrap.bind('m', function() { add(letters[12]);} );
	Mousetrap.bind('n', function() { add(letters[13]);} );
	Mousetrap.bind('o', function() { add(letters[14]);} );
	Mousetrap.bind('p', function() { add(letters[15]);} );
	Mousetrap.bind('q', function() { add(letters[16]);} );
	Mousetrap.bind('r', function() { add(letters[17]);} );
	Mousetrap.bind('s', function() { add(letters[18]);} );
	Mousetrap.bind('t', function() { add(letters[19]);} );
	Mousetrap.bind('u', function() { add(letters[20]);} );
	Mousetrap.bind('v', function() { add(letters[21]);} );
	Mousetrap.bind('w', function() { add(letters[22]);} );
	Mousetrap.bind('x', function() { add(letters[23]);} );
	Mousetrap.bind('y', function() { add(letters[24]);} );
	Mousetrap.bind('z', function() { add(letters[25]);} );
	Mousetrap.bind('space', function() { add(letters[26]);} );
	Mousetrap.bind('.', function() { add(letters[27]);} );

	

	var str = 'there is no such thing as bad content        only bad form.                               type new content to alter this pages form.                          ';

	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		if(char === ' ') char = 'space';
		var index = letter_lookup[char];
		add(letters[index]);
	}



});