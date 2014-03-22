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
	 * 主页点击导航显示相应的content-left或content-right
	*/
	new MBP.fastButton($('.nav-left')[0], function() {
		$('nav a').removeClass('curr');
		$(this).addClass('curr');
		$('#content-right').hide();
		$('#content-left').show();		
	});
	new MBP.fastButton($('.nav-right')[0], function() {
		$('nav a').removeClass('curr');
		$(this).addClass('curr');
		$('#content-left').hide();
		$('#content-right').show();		
	});

	/*
	 * 点击menu-open时的效果	
	 * dd为点击状态码 
	*/
	var dd = 0;
	$('.menu-open').bind('click', function() {
		if(dd == 0) {
			$('#menu, #container, #push-mask').addClass('push');
			dd = 1;
			$('#container').bind('touchmove', function() {
				$('.menu-open').trigger('click');
			});
		}else {
			$(' #container, #menu, #push-mask').removeClass('push');
			dd = 0;
			$('#container').unbind('touchmove');
		}
	});		
	


})(Zepto)