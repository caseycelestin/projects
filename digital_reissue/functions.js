$( document ).ready(function() {
    console.log( "ready!" );
    
    $('#sassoon_pic').mouseover(function(){
    	console.log( "you hovered" );
    	$('#sassoon_text').addClass('ad_hover');
    })
    .mouseout(function() {
     $('#sassoon_text').removeClass('ad_hover');
  	});
  	
  	$('#toshiba_pic').mouseover(function(){
    	console.log( "you hovered" );
    	$('.toshiba_text').addClass('ad_hover');
    })
    .mouseout(function() {
     $('.toshiba_text').removeClass('ad_hover');
  	});
  	
  	$('#jnb_ad').mouseover(function(){
    	console.log( "you hovered" );
    	$('.jnb_text').addClass('ad_hover');
    })
    .mouseout(function() {
     $('.jnb_text').removeClass('ad_hover');
  	});

  	$('#bb_ad').mouseover(function(){
    	console.log( "you hovered" );
    	$('.bb_text').addClass('ad_hover');
    })
    .mouseout(function() {
     $('.bb_text').removeClass('ad_hover');
  	});
});