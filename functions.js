$( document ).ready(function() {

  angleCalc();

  for (var i =0 ; i <4; i++) {

  	for (var j=0;j<6; j++) {
  			$('.lugares').append($('<div><img id="bike" src="img/dundo/bike.jpg"></div>').addClass('round-box'));
  	}
  	
  	//$('.lugares').append("<br>");
  }
	

	
  
 
});


$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	if (wScroll > ($(this).height() / 3)) {
	
		$('.fixed-navbar, .navbar-lockup').addClass('nav-fix');

	}
	
	else {
		
		$('.fixed-navbar, .navbar-lockup').removeClass('nav-fix');
		
	}

});

$('.mobile-nav-toggle').click(function(){
	
	if (!($(this).hasClass('nav-open'))) {
	
		$(this).addClass('nav-open');
	
		$('.slide-out-nav, .fixed-navbar, .mobile-shift').addClass('nav-open');
	
	}
	
	else {
		
		$(this).removeClass('nav-open');
		
		$('.slide-out-nav, .fixed-navbar, .mobile-shift').removeClass('nav-open');
		
	}
		
});

function angleCalc() {
	
	var opposite = $('.slide-out-nav').height(),
			adjacent = $('.slide-out-nav').width(),
			radian = Math.atan(opposite / adjacent),
			angle = (90 - radian * (180 / Math.PI)) * -1;
		
		$('.mobile-nav-slice').css({
			
			'transform' : 'rotate('+ angle +'deg)'
		
		});
		
}

window.onload = function(){
		var con = document.getElementById('contenedor_carga')
		con.style.visibility = 'hidden';
		con.style.apacity = '0';
}
