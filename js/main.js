;(function($) {

	/*
	 * 主页点击导航显示相应的content-left或content-right
	*/
	new MBP.fastButton($('nav a'), function() {
		$('nav a').removeClass('curr');
		$(this).addClass('curr');
		if($(this).hasClass('nav-left')) {
			$('#content-right').hide();
			$('#content-left').show();
		}else if($(this).hasClass('nav-right')) {
			$('#content-left').hide();
			$('#content-right').show();
		}
	});


})(Zepto)