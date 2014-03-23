;(function($) {

	/*
	 * 刚进入页面时重置#menu的高度
	*/
	var config = {};

	$(window).bind('load resize', function() {
		reset();
	});

	function reset() {
		config.h = $(window).height();
		$('#menu').height(config.h);
	}


	/*
	 * 点击menu-open时的效果	
	 * dd为点击状态码 
	*/
	var dd = 0;
	$('.menu-open').bind('click', function() {
		if(dd == 0) {
			$('#menu, #container').addClass('push');
			dd = 1;
			$('#container').bind('touchmove', function() {
				$('.menu-open').trigger('click');
			});
		}else {
			$('#container, #menu').removeClass('push');
			dd = 0;
			$('#container').unbind('touchmove');
		}
	});		
	
	/*
	 * 点击user-open时的效果
	*/
	$('.user-open').bind('click', function() {
		if(dd == 0) {
			$('#user, #container').addClass('pull');
			dd = 1;
			$(window).bind('touchmove', function(e) {
				e.preventDefault();
				e.stopImmediatePropagation();
			});
			$('#container').bind('touchmove', function() {
				$('.user-open').trigger('click');
			});
		}else {
			$('#container, #user').removeClass('pull');
			dd = 0;
			$(window).unbind('touchmove');
			$('#container').unbind('touchmove');
		}
	});

})(Zepto)